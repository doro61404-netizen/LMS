const contactForm = document.querySelector('[data-contact-form]');

const setFieldError = (field, message) => {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (error) error.textContent = message;
};

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formStatus = contactForm.querySelector('[data-form-status]');
  const fields = [...contactForm.querySelectorAll('input[required], textarea[required]')];
  let isValid = true;

  fields.forEach((field) => {
    const message = field.validity.valueMissing
      ? 'Please complete this field.'
      : field.validity.typeMismatch
        ? 'Please use a valid email address.'
        : '';
    setFieldError(field, message);
    isValid = isValid && !message;
  });

  if (!isValid) {
    formStatus.textContent = 'Please review the highlighted fields.';
    contactForm.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  formStatus.textContent = 'Your message is ready. Connect a backend before enabling delivery.';
});

contactForm?.querySelectorAll('input, textarea').forEach((field) => {
  field.addEventListener('input', () => setFieldError(field, ''));
});