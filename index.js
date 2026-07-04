// --- CORS HEADERS HELPER ---
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// --- DATABASE MODELS ---
const ExamModel = {
  async getAll(db) {
    const { results } = await db.prepare("SELECT * FROM exams ORDER BY id DESC").all();
    return results.map(r => ({ ...r, questions: JSON.parse(r.questions || "[]") }));
  }
};

const ArticleModel = {
  async getAll(db) {
    const { results } = await db.prepare("SELECT * FROM articles ORDER BY id DESC").all();
    return results;
  }
};

const ResultModel = {
  async getAll(db) {
    const { results } = await db.prepare("SELECT * FROM exam_results ORDER BY timestamp DESC").all();
    return results;
  },
  async create(db, { id, exam_id, exam_title, score, correct_count, total_questions, duration_used }) {
    await db.prepare(
      "INSERT INTO exam_results (id, exam_id, exam_title, score, correct_count, total_questions, duration_used) VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
    .bind(id, exam_id, exam_title, parseInt(score), parseInt(correct_count), parseInt(total_questions), parseInt(duration_used))
    .run();
  }
};

// --- MAIN WORKER FETCH HANDLER ---
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Handle CORS Preflight Options
    if (method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Pastikan binding database D1 tersedia (sesuaikan dengan wrangler.toml, default: DB atau lms)
    const db = env.DB || env.lms;
    if (!db) {
      return jsonResponse({ error: "Database binding tidak ditemukan." }, 500);
    }

    try {
      // --- ROUTING EXAMS ---
      if (path === "/api/exams" && method === "GET") {
        const exams = await ExamModel.getAll(db);
        return jsonResponse({ success: true, data: exams });
      }

      // --- ROUTING ARTICLES ---
      if (path === "/api/articles" && method === "GET") {
        const articles = await ArticleModel.getAll(db);
        return jsonResponse({ success: true, data: articles });
      }

      // --- ROUTING EXAM RESULTS (RIWAYAT) ---
      if (path === "/api/results") {
        // Validasi Token JWT Sederhana / Authorization Header
        const authHeader = request.headers.get("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return jsonResponse({ error: "Unauthorized: Missing token" }, 401);
        }

        if (method === "GET") {
          const results = await ResultModel.getAll(db);
          return jsonResponse({ success: true, data: results });
        }

        if (method === "POST") {
          const body = await request.json();
          if (!body.examId || body.score === undefined) {
            return jsonResponse({ error: "Missing examId or score" }, 400);
          }

          const newResult = {
            id: body.id || "res-" + Date.now(),
            exam_id: body.examId,
            exam_title: body.examTitle,
            score: body.score,
            correct_count: body.correctCount,
            total_questions: body.totalQuestions,
            duration_used: body.durationUsed
          };

          await ResultModel.create(db, newResult);
          return jsonResponse({ success: true, message: "Result saved to cloud", data: newResult }, 201);
        }
      }

      // Route Not Found
      return jsonResponse({ error: "Endpoint tidak ditemukan" }, 404);

    } catch (error) {
      return jsonResponse({ error: error.message }, 500);
    }
  },
};
