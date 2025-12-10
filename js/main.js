
const API_URL = "https://script.google.com/macros/s/AKfycbwILcStDf0U_R9I8DDxh7Q0q03z7UIWQyAQUxLYyZ9XXmeU01YpL_hR6zDXRPDseoAx/exec";

const TRANSLATIONS = {"es": {"nav.home": "Inicio", "nav.licenses": "Licencias", "nav.catalog": "Catálogo", "nav.equipment": "Equipos", "nav.faq": "Preguntas frecuentes", "nav.contact": "Contacto", "hero.kicker": "Licencias digitales y hardware corporativo en Panamá", "hero.title": "Licencias de software originales y equipos informáticos en Panamá", "hero.subtitle": "LicensesPTY es la unidad de SOLUTECH PANAMA especializada en licencias digitales ESD y soluciones para empresas y usuarios finales. Entregamos licencias originales con soporte local y facturación en Panamá.", "hero.ctaPrimary": "Ver licencias disponibles", "hero.ctaSecondary": "Cotizar por WhatsApp", "hero.badge1": "Licencias ESD originales", "hero.badge2": "Facturación local en Panamá", "hero.badge3": "Soporte técnico especializado", "trust.title": "Transparencia y seguridad primero", "trust.text": "Este sitio es una landing informativa de LicensesPTY. No solicitamos contraseñas, códigos de verificación ni datos bancarios desde esta página. Todas las compras y pagos se gestionan a través de los canales oficiales de SOLUTECH PANAMA y proveedores autorizados.", "trust.point1": "Licencias ESD originales y verificables.", "trust.point2": "Facturación en Panamá para personas y empresas.", "trust.point3": "Soporte técnico en español.", "trust.point4": "Sin cobros automáticos ni formularios sospechosos.", "brands.label": "Marcas que distribuimos:", "licenses.title": "Licencias que ofrecemos", "licenses.subtitle": "Trabajamos con las principales marcas de software para cubrir necesidades de hogar, oficinas pequeñas y empresas. La mayoría de nuestras licencias son ESD (entrega digital), adquiridas en distribuidores autorizados.", "licenses.kaspersky": "Soluciones antivirus y de seguridad de endpoints para usuarios domésticos y empresas.", "licenses.mcafee": "Protección para múltiples dispositivos, identidad y navegación segura.", "licenses.eset": "Seguridad ligera para estaciones de trabajo, servidores y dispositivos móviles.", "licenses.m365": "Suscripciones Microsoft 365 para hogar y empresas con correo, Office y almacenamiento en la nube.", "licenses.windows": "Licencias originales de Windows para equipos nuevos o en regularización.", "licenses.sage": "Software contable y administrativo para pymes que necesitan control financiero confiable.", "licenses.viewBrand": "Ver productos", "catalog.title": "Catálogo de licencias", "catalog.subtitle": "Los precios se consultan dinámicamente desde nuestro sistema interno. Si un producto aparece con \"Precio a consultar\", contáctanos para una cotización personalizada.", "catalog.filterBrand": "Marca:", "catalog.brandAll": "Todas", "catalog.brandOthers": "Otros", "catalog.filterSearch": "Buscar:", "catalog.loading": "Cargando precios...", "catalog.thSku": "SKU", "catalog.thProduct": "Producto", "catalog.thDevices": "Equipos", "catalog.thYears": "Plan (años)", "catalog.thPrice": "Precio (USD)", "catalog.note": "Algunos productos pueden no estar disponibles en todo momento. Los precios finales se confirman en la cotización.", "equip.title": "Equipos informáticos y hardware", "equip.text": "Además de licencias de software, podemos suministrar equipos informáticos para proyectos nuevos o ampliaciones. Trabajamos bajo pedido, ajustando las configuraciones a las necesidades de cada cliente.", "equip.item1": "Computadoras de escritorio para oficina.", "equip.item2": "Laptops empresariales y para teletrabajo.", "equip.item3": "Equipos para punto de venta.", "equip.item4": "Monitores y periféricos.", "equip.item5": "Impresoras y multifuncionales.", "equip.item6": "Equipos de red (routers, switches, Wi-Fi).", "equip.ctaTitle": "¿Buscas equipos específicos?", "equip.ctaText": "Cuéntanos qué tipo de equipo necesitas (cantidad, uso, presupuesto) y te enviaremos opciones de configuración pensadas para tu caso.", "equip.ctaButton": "Escribir por WhatsApp", "faq.title": "Preguntas frecuentes", "faq.subtitle": "Respondemos algunas preguntas comunes sobre nuestras licencias y forma de trabajo.", "contact.title": "¿Necesitas una cotización o asesoría?", "contact.text": "Envíanos un mensaje con el software o equipo que necesitas y con gusto te responderemos con opciones y precios actualizados para Panamá.", "contact.locationLabel": "Operado por:", "contact.locationValue": "SOLUTECH PANAMA, PH Central Park, Ciudad de Panamá, Panamá.", "contact.formTitle": "Formulario de contacto", "contact.formName": "Nombre completo", "contact.formEmail": "Correo electrónico", "contact.formCompany": "Empresa (opcional)", "contact.formPhone": "Teléfono / WhatsApp (opcional)", "contact.formProduct": "Tipo de producto", "contact.formMessage": "Mensaje", "contact.formSubmit": "Enviar formulario", "contact.formNote": "Este formulario está protegido con Cloudflare Turnstile. Usaremos tu información únicamente para responder tu solicitud.", "legal.title": "Aviso importante", "legal.text": "LicensesPTY no solicita códigos de verificación, contraseñas de correo ni datos bancarios por WhatsApp o formularios externos. Si recibes un mensaje sospechoso, valida siempre los canales oficiales publicados en esta página.", "legal.privacyTitle": "Privacidad y datos", "legal.privacyText": "Solo utilizamos tu información para elaborar cotizaciones, facturación y soporte técnico relacionado con los servicios contratados. No vendemos ni compartimos tus datos con terceros para campañas masivas de spam.", "footer.text": "LicensesPTY es una marca operada por SOLUTECH PANAMA. Licencias de software ESD y equipos informáticos para Panamá.", "footer.rights": "Todos los derechos reservados."}, "en": {"nav.home": "Home", "nav.licenses": "Licenses", "nav.catalog": "Catalog", "nav.equipment": "Hardware", "nav.faq": "FAQ", "nav.contact": "Contact", "hero.kicker": "Digital licenses and corporate hardware in Panama", "hero.title": "Original software licenses and IT equipment in Panama", "hero.subtitle": "LicensesPTY is the SOLUTECH PANAMA unit specialized in ESD digital licenses and solutions for companies and end users. We deliver original licenses with local support and invoicing in Panama.", "hero.ctaPrimary": "View available licenses", "hero.ctaSecondary": "Quote via WhatsApp", "hero.badge1": "Original ESD licenses", "hero.badge2": "Local invoicing in Panama", "hero.badge3": "Specialized technical support", "trust.title": "Transparency and security first", "trust.text": "This website is an informational landing page for LicensesPTY. We never request passwords, verification codes or banking details from this site. All purchases and payments are handled through SOLUTECH PANAMA official channels and authorized providers.", "trust.point1": "Original, verifiable ESD licenses.", "trust.point2": "Invoicing in Panama for individuals and companies.", "trust.point3": "Technical support in Spanish.", "trust.point4": "No automatic charges or suspicious forms.", "brands.label": "Vendors we work with:", "licenses.title": "Licenses we offer", "licenses.subtitle": "We work with leading software vendors to cover home, small office and business needs. Most licenses are ESD (digital delivery) acquired from authorized distributors.", "licenses.kaspersky": "Antivirus and endpoint security solutions for home users and businesses.", "licenses.mcafee": "Protection for multiple devices, identity and safe browsing.", "licenses.eset": "Lightweight security for workstations, servers and mobile devices.", "licenses.m365": "Microsoft 365 subscriptions for home and business with email, Office and cloud storage.", "licenses.windows": "Original Windows licenses for new devices or legalization.", "licenses.sage": "Accounting and administration software for small and medium businesses.", "licenses.viewBrand": "View products", "catalog.title": "License catalog", "catalog.subtitle": "Prices are pulled dynamically from our internal system. If a product shows “Price on request”, contact us for a tailored quote.", "catalog.filterBrand": "Brand:", "catalog.brandAll": "All", "catalog.brandOthers": "Others", "catalog.filterSearch": "Search:", "catalog.loading": "Loading prices...", "catalog.thSku": "SKU", "catalog.thProduct": "Product", "catalog.thDevices": "Devices", "catalog.thYears": "Plan (years)", "catalog.thPrice": "Price (USD)", "catalog.note": "Some products may not be available at all times. Final prices are confirmed in the quote.", "equip.title": "IT equipment and hardware", "equip.text": "Beyond software licenses, we can supply IT equipment for new projects or expansions. We work on demand, tailoring configurations to each customer.", "equip.item1": "Office desktop computers.", "equip.item2": "Business laptops and remote work equipment.", "equip.item3": "Point-of-sale systems.", "equip.item4": "Monitors and peripherals.", "equip.item5": "Printers and multifunction devices.", "equip.item6": "Network equipment (routers, switches, Wi‑Fi).", "equip.ctaTitle": "Looking for specific hardware?", "equip.ctaText": "Tell us what type of equipment you need (quantity, use case, budget) and we will send you configuration options tailored to you.", "equip.ctaButton": "Message on WhatsApp", "faq.title": "Frequently asked questions", "faq.subtitle": "Here are some common questions about our licenses and how we work.", "contact.title": "Need a quote or advice?", "contact.text": "Send us a message with the software or hardware you need and we’ll reply with updated options and prices for Panama.", "contact.locationLabel": "Operated by:", "contact.locationValue": "SOLUTECH PANAMA, PH Central Park, Panama City, Panama.", "contact.formTitle": "Contact form", "contact.formName": "Full name", "contact.formEmail": "Email address", "contact.formCompany": "Company (optional)", "contact.formPhone": "Phone / WhatsApp (optional)", "contact.formProduct": "Product type", "contact.formMessage": "Message", "contact.formSubmit": "Send form", "contact.formNote": "This form is protected with Cloudflare Turnstile. We only use your data to reply to your request.", "legal.title": "Important notice", "legal.text": "LicensesPTY will never request verification codes, email passwords or banking data via WhatsApp or external forms. If you receive any suspicious message, always verify the official channels shown on this page.", "legal.privacyTitle": "Privacy and data", "legal.privacyText": "We only use your information to prepare quotes, invoicing and technical support related to contracted services. We do not sell or share your data with third parties for mass spam campaigns.", "footer.text": "LicensesPTY is a brand operated by SOLUTECH PANAMA. ESD software licenses and IT equipment for Panama.", "footer.rights": "All rights reserved."}};

let currentLang = "es";
let allItems = [];
let currentBrandFilter = "all";

function detectInitialLang() {
  const saved = localStorage.getItem("licensespty_lang");
  if (saved && TRANSLATIONS[saved]) return saved;
  const navLang = (navigator.language || navigator.userLanguage || "es").toLowerCase();
  if (navLang.startsWith("en")) return "en";
  return "es";
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["es"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();
}

function initLang() {
  currentLang = detectInitialLang();
  applyTranslations(currentLang);
}

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("licensespty_lang", currentLang);
  applyTranslations(currentLang);
  renderFaq(); // re-render FAQs to change language
}

function initTheme() {
  const saved = localStorage.getItem("licensespty_theme");
  let theme = saved;
  if (!theme) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  setTheme(theme);
}

function setTheme(theme) {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
  localStorage.setItem("licensespty_theme", theme);
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

function initNav() {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function formatPrice(value) {
  const num = Number(value);
  if (!num || num === 0) return currentLang === "en" ? "Price on request" : "Precio a consultar";
  return num.toFixed(2);
}

function detectBrandFromName(name) {
  const n = (name || "").toLowerCase();
  if (n.includes("kaspersky")) return "Kaspersky";
  if (n.includes("mcafee")) return "McAfee";
  if (n.includes("eset")) return "ESET";
  if (n.includes("microsoft 365") || n.includes("office 365") || n.includes("m365")) return "Microsoft 365";
  if (n.includes("windows")) return "Windows";
  if (n.includes("sage")) return "Sage 50";
  return "Otros";
}

function normalizeItem(raw) {
  const item = {
    sku: raw.sku || raw.SKU || "",
    product: raw.product || raw.Product || raw.Producto || "",
    devices: raw.devices || raw.Equipos || "",
    years: raw.years || raw["Plan (años)"] || "",
    price: raw.price || raw.PrecioUSD || 0,
  };

  let brand = raw.brand || raw.Marca || raw.Brand || raw.Vendor || "";
  if (!brand) {
    brand = detectBrandFromName(item.product);
  }
  item.brand = brand;
  return item;
}

async function loadCatalog() {
  const statusEl = document.getElementById("catalogStatus");
  const bodyEl = document.getElementById("catalogBody");
  if (!statusEl || !bodyEl) return;
  try {
    statusEl.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> ' + (TRANSLATIONS[currentLang]?.["catalog.loading"] || "Cargando precios...");
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    allItems = Array.isArray(data) ? data.map(normalizeItem) : [];
    applyFilters();
    statusEl.textContent = "";
  } catch (err) {
    console.error("Error loading catalog", err);
    statusEl.textContent = currentLang === "en" ? "Error loading catalog" : "Error cargando catálogo";
  }
}

function applyFilters() {
  const bodyEl = document.getElementById("catalogBody");
  if (!bodyEl) return;
  const searchValue = (document.getElementById("searchInput")?.value || "").toLowerCase();
  let items = allItems;
  if (currentBrandFilter && currentBrandFilter !== "all") {
    items = items.filter(i => (i.brand || "Otros") === currentBrandFilter);
  }
  if (searchValue) {
    items = items.filter(i =>
      (i.sku || "").toLowerCase().includes(searchValue) ||
      (i.product || "").toLowerCase().includes(searchValue)
    );
  }
  const rows = items.map(i => `
    <tr>
      <td>${i.sku}</td>
      <td>${i.product}</td>
      <td>${i.devices}</td>
      <td>${i.years}</td>
      <td>${formatPrice(i.price)}</td>
    </tr>
  `).join("");
  bodyEl.innerHTML = rows || `<tr><td colspan="5" style="text-align:center;padding:0.75rem 0;">${currentLang === "en" ? "No results" : "Sin resultados"}</td></tr>`;
}

function initCatalogControls() {
  const brandSelect = document.getElementById("brandFilter");
  if (brandSelect) {
    brandSelect.addEventListener("change", (e) => {
      currentBrandFilter = e.target.value || "all";
      applyFilters();
    });
  }
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => applyFilters());
  }

  const bodyBrand = document.body.getAttribute("data-brand");
  if (bodyBrand && brandSelect) {
    currentBrandFilter = bodyBrand;
    brandSelect.value = bodyBrand;
  }
}

const FAQ_DATA = {
  es: [
    {
      q: "¿Las licencias que venden son originales?",
      a: "Sí. Trabajamos únicamente con licencias originales adquiridas en canales autorizados. Muchas de ellas son ESD (entrega digital) y pueden validarse directamente en las plataformas oficiales del fabricante."
    },
    {
      q: "¿Qué significa que una licencia sea ESD?",
      a: "ESD significa Electronic Software Download. Es una licencia 100% original que se entrega por medios digitales (correo o portal) sin caja física. Es el modelo recomendado por la mayoría de fabricantes."
    },
    {
      q: "¿Facturan en Panamá?",
      a: "Sí. La facturación se emite desde SOLUTECH PANAMA a nombre de su empresa o como persona natural, según sus datos fiscales en Panamá."
    },
    {
      q: "¿Cómo se realiza el pago?",
      a: "Dependiendo del tipo de cliente y del monto, podemos ofrecer opciones como transferencias locales, depósitos o pasarelas de pago. Los datos exactos se comparten únicamente en la cotización formal."
    },
    {
      q: "¿Piden contraseñas o códigos de verificación?",
      a: "No. Nunca solicitamos contraseñas de correo, códigos de verificación de doble factor ni datos bancarios por esta página ni por WhatsApp. Si alguien los pide en nuestro nombre, es un intento de fraude."
    },
    {
      q: "¿Pueden instalar o activar el software de forma remota?",
      a: "Sí, en muchos casos ofrecemos acompañamiento remoto para instalación y activación, siempre con su autorización y explicando cada paso que se realiza en su equipo."
    },
    {
      q: "¿Atienden solo empresas o también usuarios finales?",
      a: "Trabajamos con ambos. Podemos ayudar tanto a pymes y organizaciones como a usuarios particulares que quieran regularizar o actualizar sus licencias."
    },
    {
      q: "¿Los precios que aparecen en el catálogo incluyen impuestos?",
      a: "En la mayoría de los casos los precios publicados incluyen impuestos, pero el valor definitivo siempre se confirma en la cotización enviada por correo o WhatsApp."
    },
    {
      q: "¿Qué pasa si el producto aparece como \"Precio a consultar\"?",
      a: "Significa que el precio puede variar por tipo de cambio, promociones o condiciones especiales del proveedor. En esos casos le preparamos una cotización puntual."
    },
    {
      q: "¿También venden equipos informáticos?",
      a: "Sí. Podemos suministrar computadoras, portátiles, monitores, impresoras y otros equipos según requerimientos de su proyecto."
    },
    {
      q: "¿Solo atienden en Ciudad de Panamá?",
      a: "Podemos atender a clientes en todo Panamá. Las licencias se entregan digitalmente y la facturación se envía por correo."
    }
  ],
  en: [
    {
      q: "Are the licenses you sell original?",
      a: "Yes. We only work with original licenses purchased through authorized channels. Many of them are ESD digital licenses that can be validated directly on the vendor platforms."
    },
    {
      q: "What does an ESD license mean?",
      a: "ESD stands for Electronic Software Download. It is a 100% original license delivered digitally (email or portal) with no physical box. It is the model recommended by most vendors."
    },
    {
      q: "Do you issue invoices in Panama?",
      a: "Yes. Invoices are issued from SOLUTECH PANAMA under your company name or as an individual, according to your local tax information."
    },
    {
      q: "How do I pay?",
      a: "Depending on the customer type and amount, we can offer local transfers, deposits or payment gateways. Exact details are only shared in the formal quote."
    },
    {
      q: "Do you ever ask for passwords or verification codes?",
      a: "No. We never request email passwords, 2FA verification codes or banking information through this website or WhatsApp. If someone asks for that in our name, it is a fraud attempt."
    },
    {
      q: "Can you help me install or activate the software remotely?",
      a: "Yes, in many cases we can provide remote assistance for installation and activation, always with your consent and explaining each step performed on your device."
    },
    {
      q: "Do you work only with businesses or also with end users?",
      a: "We work with both. We can assist SMEs, organizations and individual users who want to regularize or update their licenses."
    },
    {
      q: "Do catalog prices include taxes?",
      a: "In most cases published prices include taxes, but the final value is always confirmed in the quote we send by email or WhatsApp."
    },
    {
      q: "What does “Price on request” mean?",
      a: "It means the price may vary because of exchange rate, promotions or specific vendor conditions. In such cases we prepare a tailored quote."
    },
    {
      q: "Do you also sell IT hardware?",
      a: "Yes. We can provide computers, laptops, monitors, printers and other equipment according to your project requirements."
    },
    {
      q: "Do you only serve Panama City?",
      a: "We can serve customers across Panama. Licenses are delivered digitally and invoices are sent by email."
    }
  ]
};

function renderFaq() {
  const listEl = document.getElementById("faqList");
  if (!listEl) return;
  const data = FAQ_DATA[currentLang] || FAQ_DATA["es"];
  listEl.innerHTML = data.map(item => `
    <details class="faq-item">
      <summary><span>${item.q}</span></summary>
      <div class="faq-body">${item.a}</div>
    </details>
  `).join("");
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLang();
  initNav();
  initYear();

  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.addEventListener("click", toggleLang);

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  initCatalogControls();
  renderFaq();
  loadCatalog();
});
