(function () {
  'use strict';

  var translations = {
    es: {
      'nav.platform': 'Plataforma',
      'nav.industries': 'Industrias',
      'nav.technology': 'Tecnologia',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos',
      'hero.badge': 'Plataforma de Inteligencia de Datos',
      'hero.headline': 'Transformamos datos<br>en <span class="text-gradient">decisiones.</span>',
      'hero.subtitle': 'Plataforma de inteligencia de datos potenciada por IA para industrias reguladas.',
      'hero.cta1': 'Conocer la plataforma',
      'hero.cta2': 'Contactar',
      'platform.label': 'Plataforma',
      'platform.title': 'Inteligencia de datos<br><span class="text-gradient">de extremo a extremo</span>',
      'platform.desc': 'StratumIQ conecta fuentes de datos heterogeneas, aplica razonamiento con IA y entrega inteligencia accionable en tiempo real. Una plataforma, multiples industrias.',
      'platform.tag1': 'Automatizacion Web',
      'platform.tag2': 'Razonamiento IA',
      'platform.tag3': 'Inteligencia Accionable',
      'platform.pipe1': 'Fuentes de Datos',
      'platform.pipe2': 'Motor StratumIQ',
      'platform.pipe3': 'Inteligencia Accionable',
      'industries.label': 'Industrias',
      'industries.title': 'Probada en <span class="text-gradient">3 verticales</span>',
      'industries.desc': 'Soluciones especializadas para industrias reguladas y de alto impacto.',
      'industries.flipHint': 'Click para ver demo',
      'industries.flipBack': 'Click para volver',
      'industries.chatPlaceholder': 'Escribe tu consulta...',
      'industries.finance.title': 'Financiero',
      'industries.finance.desc': 'Compliance automatizado e inteligencia regulatoria para instituciones financieras.',
      'industries.finance.cap1': 'Bots de datos financieros',
      'industries.finance.cap2': 'Screening AML 42+ listas',
      'industries.finance.cap3': 'Riesgo geoespacial',
      'industries.finance.cap4': 'Deteccion multi-fuente',
      'industries.finance.q': 'Necesito verificar a Juan Perez contra listas PEP y sanciones.',
      'industries.finance.a': 'Encontre 3 coincidencias en 42+ listas. Riesgo: <strong>ALTO</strong>. 2 alertas PEP activas en OFAC y UE. Recomiendo revision manual inmediata.',
      'industries.education.title': 'Educacion',
      'industries.education.desc': 'Analitica educativa conversacional para instituciones de educacion superior.',
      'industries.education.cap1': 'IA conversacional',
      'industries.education.cap2': 'Analitica en lenguaje natural',
      'industries.education.cap3': 'Multi-tenant con permisos',
      'industries.education.cap4': '100+ instituciones',
      'industries.education.q': 'Cual es la tasa de desercion del programa de Ingenieria?',
      'industries.education.a': 'La desercion en Ingenieria es <strong>12.3%</strong> este semestre, 2.1% menor que el anterior. Factores principales: carga academica y financiamiento.',
      'industries.tourism.title': 'Turismo',
      'industries.tourism.desc': 'Inteligencia turistica y competitiva para destinos y operadores.',
      'industries.tourism.cap1': 'Inteligencia turistica',
      'industries.tourism.cap2': 'Reportes narrativos LLM',
      'industries.tourism.cap3': 'Analisis de sentimiento',
      'industries.tourism.cap4': 'Benchmarking competitivo',
      'industries.tourism.q': 'Como se compara Cartagena vs Santa Marta en satisfaccion?',
      'industries.tourism.a': 'Cartagena: <strong>4.2/5</strong> (+0.3 vs Q3). Santa Marta: 3.8/5. Cartagena lidera en gastronomia y vida nocturna. Santa Marta destaca en naturaleza.',
      'how.label': 'Como Funciona',
      'how.title': 'De datos crudos a <span class="text-gradient">inteligencia accionable</span>',
      'how.step1.title': 'Fuentes',
      'how.step1.desc': 'Web, APIs, documentos, listas regulatorias. Conectamos cualquier fuente de datos estructurada o no estructurada.',
      'how.step2.title': 'Motor',
      'how.step2.desc': 'Scraping inteligente, NLP, matching difuso, validacion multi-fuente. Procesamiento automatizado con IA.',
      'how.step3.title': 'Salida',
      'how.step3.desc': 'Dashboards, alertas, APIs, reportes narrativos. Inteligencia lista para tomar decisiones.',
      'metrics.sources': 'Fuentes de datos',
      'metrics.institutions': 'Instituciones',
      'metrics.countries': 'Paises',
      'metrics.uptime': 'Disponibilidad',
      'tech.label': 'Tecnologia',
      'tech.title': 'Construida con <span class="text-gradient">tecnologia de punta</span>',
      'tech.desc': 'Nuestra plataforma combina las tecnicas mas avanzadas de inteligencia artificial generativa con arquitectura cloud-native para entregar resultados confiables a escala.',
      'contact.label': 'Contacto',
      'contact.title': 'Hablemos de <span class="text-gradient">sus datos</span>',
      'contact.desc': 'Descubra como StratumIQ puede transformar sus datos en ventaja competitiva.',
      'contact.cta': 'Escribanos',
      'footer.by': 'Un producto de'
    },
    en: {
      'nav.platform': 'Platform',
      'nav.industries': 'Industries',
      'nav.technology': 'Technology',
      'nav.contact': 'Contact',
      'nav.cta': 'Let\'s Talk',
      'hero.badge': 'Data Intelligence Platform',
      'hero.headline': 'We transform data<br>into <span class="text-gradient">decisions.</span>',
      'hero.subtitle': 'AI-powered data intelligence platform for regulated industries.',
      'hero.cta1': 'Explore the platform',
      'hero.cta2': 'Contact us',
      'platform.label': 'Platform',
      'platform.title': 'End-to-end<br><span class="text-gradient">data intelligence</span>',
      'platform.desc': 'StratumIQ connects heterogeneous data sources, applies AI reasoning and delivers actionable intelligence in real time. One platform, multiple industries.',
      'platform.tag1': 'Web Automation',
      'platform.tag2': 'AI Reasoning',
      'platform.tag3': 'Actionable Intelligence',
      'platform.pipe1': 'Data Sources',
      'platform.pipe2': 'StratumIQ Engine',
      'platform.pipe3': 'Actionable Intelligence',
      'industries.label': 'Industries',
      'industries.title': 'Proven across <span class="text-gradient">3 verticals</span>',
      'industries.desc': 'Specialized solutions for regulated and high-impact industries.',
      'industries.flipHint': 'Click to see demo',
      'industries.flipBack': 'Click to go back',
      'industries.chatPlaceholder': 'Type your query...',
      'industries.finance.title': 'Financial',
      'industries.finance.desc': 'Automated compliance and regulatory intelligence for financial institutions.',
      'industries.finance.cap1': 'Financial data bots',
      'industries.finance.cap2': 'AML Screening 42+ lists',
      'industries.finance.cap3': 'Geospatial risk',
      'industries.finance.cap4': 'Multi-source detection',
      'industries.finance.q': 'I need to verify Juan Perez against PEP and sanctions lists.',
      'industries.finance.a': 'Found 3 matches across 42+ lists. Risk: <strong>HIGH</strong>. 2 active PEP alerts in OFAC and EU. Recommend immediate manual review.',
      'industries.education.title': 'Education',
      'industries.education.desc': 'Conversational educational analytics for higher education institutions.',
      'industries.education.cap1': 'Conversational AI',
      'industries.education.cap2': 'Natural language analytics',
      'industries.education.cap3': 'Multi-tenant with permissions',
      'industries.education.cap4': '100+ institutions',
      'industries.education.q': 'What is the dropout rate for the Engineering program?',
      'industries.education.a': 'Engineering dropout rate is <strong>12.3%</strong> this semester, 2.1% lower than previous. Key factors: academic load and financing.',
      'industries.tourism.title': 'Tourism',
      'industries.tourism.desc': 'Tourism and competitive intelligence for destinations and operators.',
      'industries.tourism.cap1': 'Tourism intelligence',
      'industries.tourism.cap2': 'LLM narrative reports',
      'industries.tourism.cap3': 'Sentiment analysis',
      'industries.tourism.cap4': 'Competitive benchmarking',
      'industries.tourism.q': 'How does Cartagena compare to Santa Marta in satisfaction?',
      'industries.tourism.a': 'Cartagena: <strong>4.2/5</strong> (+0.3 vs Q3). Santa Marta: 3.8/5. Cartagena leads in gastronomy and nightlife. Santa Marta excels in nature.',
      'how.label': 'How It Works',
      'how.title': 'From raw data to <span class="text-gradient">actionable intelligence</span>',
      'how.step1.title': 'Sources',
      'how.step1.desc': 'Web, APIs, documents, regulatory lists. We connect any structured or unstructured data source.',
      'how.step2.title': 'Engine',
      'how.step2.desc': 'Smart scraping, NLP, fuzzy matching, multi-source validation. AI-powered automated processing.',
      'how.step3.title': 'Output',
      'how.step3.desc': 'Dashboards, alerts, APIs, narrative reports. Intelligence ready for decision-making.',
      'metrics.sources': 'Data sources',
      'metrics.institutions': 'Institutions',
      'metrics.countries': 'Countries',
      'metrics.uptime': 'Uptime',
      'tech.label': 'Technology',
      'tech.title': 'Built with <span class="text-gradient">cutting-edge technology</span>',
      'tech.desc': 'Our platform combines the most advanced generative AI techniques with cloud-native architecture to deliver reliable results at scale.',
      'contact.label': 'Contact',
      'contact.title': 'Let\'s talk about <span class="text-gradient">your data</span>',
      'contact.desc': 'Discover how StratumIQ can transform your data into competitive advantage.',
      'contact.cta': 'Write to us',
      'footer.by': 'A product by'
    }
  };

  var currentLang = localStorage.getItem('stratumiq-lang') || 'es';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('stratumiq-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    var dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update toggle button label
    var toggleLabel = document.querySelector('.lang-toggle__label');
    if (toggleLabel) {
      toggleLabel.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Update page title
    document.title = lang === 'es'
      ? 'StratumIQ \u2014 Inteligencia de Datos con IA'
      : 'StratumIQ \u2014 AI-Powered Data Intelligence';
  }

  // Initialize
  applyLanguage(currentLang);

  // Toggle button
  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Expose for external use
  window.stratumI18n = { apply: applyLanguage, current: function () { return currentLang; } };
})();
