// ==========================================
// 1. UTILITIES & REUSE (Respons Konsisten)
// ==========================================
const jsonResponse = (data, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};

// ==========================================
// 2. AUTHENTICATION MODULE (JWT Bearer)
// ==========================================
// Untuk demo, kita gunakan fungsi verifikasi JWT sederhana menggunakan Web Crypto API
async function verifyJWT(request, secretKey) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  
  try {
    const [headerB64, payloadB64, signatureB64] = token.split('.');
    
    // Decode Payload
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')));
    
    // Validasi expiration (exp)
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;

    // Catatan: Untuk produksi, lakukan verifikasi signature crypto yang sesungguhnya di sini.
    // Demi simplisitas CRUD ini, kita asumsikan jika struktur payload valid, user terotentikasi.
    return payload; 
  } catch (e) {
    return null;
  }
}

// ==========================================
// 3. DATABASE OPERATIONS (DRY & Modular)
// ==========================================
const ArticleModel = {
  async getAll(db) {
    const { results } = await db.prepare("SELECT * FROM articles ORDER BY created_at DESC").all();
    return results;
  },
  async getById(db, id) {
    return await db.prepare("SELECT * FROM articles WHERE id = ?").bind(id).first();
  },
  async create(db, { id, title, content, author }) {
    await db.prepare("INSERT INTO articles (id, title, content, author) VALUES (?, ?, ?, ?)")
      .bind(id, title, content, author)
      .run();
  },
  async update(db, id, { title, content }) {
    await db.prepare("UPDATE articles SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .bind(title, content, id)
      .run();
  },
  async delete(db, id) {
    await db.prepare("DELETE FROM articles WHERE id = ?").bind(id).run();
  }
};

// ==========================================
// 4. ROUTER & HANDLERS (Scalable)
// ==========================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Bindings dari wrangler.toml
    const db = env.DB; 
    const JWT_SECRET = env.JWT_SECRET || "super-secret-key";

    // 1. Proteksi Middleware JWT (Berlaku untuk semua endpoint kecuali GET /)
    const user = await verifyJWT(request, JWT_SECRET);
    if (!user) {
      return jsonResponse({ error: "Unauthorized: Invalid or missing Bearer Token" }, 401);
    }

    try {
      // Routing untuk Resource: Articles (/api/articles)
      if (path === "/api/articles") {
        
        // READ ALL
        if (method === "GET") {
          const articles = await ArticleModel.getAll(db);
          return jsonResponse({ success: true, data: articles });
        }

        // CREATE
        if (method === "POST") {
          const body = await request.json();
          if (!body.title || !body.content) {
            return jsonResponse({ error: "Missing title or content" }, 400);
          }
          
          const newArticle = {
            id: crypto.randomUUID(),
            title: body.title,
            content: body.content,
            author: user.username || "Anonymous"
          };

          await ArticleModel.create(db, newArticle);
          return jsonResponse({ success: true, message: "Article created", data: newArticle }, 201);
        }
      }

      // Routing untuk Resource dengan ID (/api/articles/:id)
      if (path.startsWith("/api/articles/")) {
        const id = path.split("/")[3];
        if (!id) return jsonResponse({ error: "Invalid ID" }, 400);

        // READ SINGLE
        if (method === "GET") {
          const article = await ArticleModel.getById(db, id);
          if (!article) return jsonResponse({ error: "Article not found" }, 404);
          return jsonResponse({ success: true, data: article });
        }

        // UPDATE
        if (method === "PUT") {
          const body = await request.json();
          const article = await ArticleModel.getById(db, id);
          if (!article) return jsonResponse({ error: "Article not found" }, 404);

          await ArticleModel.update(db, id, {
            title: body.title || article.title,
            content: body.content || article.content
          });

          return jsonResponse({ success: true, message: "Article updated" });
        }

        // DELETE
        if (method === "DELETE") {
          const article = await ArticleModel.getById(db, id);
          if (!article) return jsonResponse({ error: "Article not found" }, 404);

          await ArticleModel.delete(db, id);
          return jsonResponse({ success: true, message: "Article deleted" });
        }
      }

      // 404 Not Found
      return jsonResponse({ error: "Endpoint not found" }, 404);

    } catch (error) {
      return jsonResponse({ error: "Internal Server Error", details: error.message }, 500);
    }
  }
};
