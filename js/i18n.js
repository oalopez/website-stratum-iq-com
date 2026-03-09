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
      'industries.education.title': 'Educacion',
      'industries.education.desc': 'Analitica educativa conversacional para instituciones de educacion superior.',
      'industries.education.cap1': 'IA conversacional',
      'industries.education.cap2': 'Analitica en lenguaje natural',
      'industries.education.cap3': 'Multi-tenant con permisos',
      'industries.education.cap4': '100+ instituciones',
      'industries.tourism.title': 'Turismo',
      'industries.tourism.desc': 'Inteligencia turistica y competitiva para destinos y operadores.',
      'industries.tourism.cap1': 'Inteligencia turistica',
      'industries.tourism.cap2': 'Reportes narrativos LLM',
      'industries.tourism.cap3': 'Analisis de sentimiento',
      'industries.tourism.cap4': 'Benchmarking competitivo',
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
      'footer.by': 'Un producto de',
      'viz.finance.q': 'Oye, necesito que me revises a un tal Juan Perez en listas PEP y sanciones, por favor',
      'viz.finance.risk': 'ALTO',
      'viz.finance.detail': '3 coincidencias en 42+ listas',
      'viz.education.q': 'Como va la desercion este semestre? Quiero ver todos los programas comparados',
      'viz.education.eng': 'Ingenieria',
      'viz.education.law': 'Derecho',
      'viz.education.med': 'Medicina',
      'viz.education.insight': 'Factor #1: carga academica (43%)',
      'viz.tourism.q': 'Que tan satisfechos estan los turistas en Cartagena comparado con Santa Marta?',
      'viz.tourism.gastro': 'Gastronomia',
      'viz.tourism.nature': 'Naturaleza'
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
      'industries.education.title': 'Education',
      'industries.education.desc': 'Conversational educational analytics for higher education institutions.',
      'industries.education.cap1': 'Conversational AI',
      'industries.education.cap2': 'Natural language analytics',
      'industries.education.cap3': 'Multi-tenant with permissions',
      'industries.education.cap4': '100+ institutions',
      'industries.tourism.title': 'Tourism',
      'industries.tourism.desc': 'Tourism and competitive intelligence for destinations and operators.',
      'industries.tourism.cap1': 'Tourism intelligence',
      'industries.tourism.cap2': 'LLM narrative reports',
      'industries.tourism.cap3': 'Sentiment analysis',
      'industries.tourism.cap4': 'Competitive benchmarking',
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
      'footer.by': 'A product by',
      'viz.finance.q': 'Hey, I need you to check a Juan Perez against PEP and sanctions lists, please',
      'viz.finance.risk': 'HIGH',
      'viz.finance.detail': '3 matches across 42+ lists',
      'viz.education.q': 'How\'s dropout looking this semester? I want to see all programs compared',
      'viz.education.eng': 'Engineering',
      'viz.education.law': 'Law',
      'viz.education.med': 'Medicine',
      'viz.education.insight': 'Factor #1: academic load (43%)',
      'viz.tourism.q': 'How satisfied are tourists in Cartagena compared to Santa Marta?',
      'viz.tourism.gastro': 'Gastronomy',
      'viz.tourism.nature': 'Nature'
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
