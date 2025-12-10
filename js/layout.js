async function loadPartial(targetId, url) {
  const container = document.getElementById(targetId);
  if (!container) return;

  try {
    const res = await fetch(url);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error("Error cargando partial", url, err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadPartial("site-header", "/partials/header.html"),
    loadPartial("site-footer", "/partials/footer.html"),
  ]);

  // Opcional: año en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Aquí puedes poner lógica básica del header si quieres:
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // Si más adelante movemos lógica de idioma/tema a main.js,
  // desde aquí puedes llamar a window.initLicensesPTY && window.initLicensesPTY();
});
