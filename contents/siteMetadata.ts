export const siteMetadata = {
  title: 'Artstrokes — Páginas web en 48 horas · $3,500 MXN',
  description: 'Diseño web para emprendedores en México. Tu página lista en 48 horas desde $3,500 MXN. Sin suscripciones, sin sorpresas.',
  url: 'https://artstrokes.mx', // Cuando tengamos el dominio, este debe cambiar
  ogImage: 'https://artstrokes.mx/og-image.jpg',
  telephone: '+525530584253', // Josecito tienes que hacer tu cambio awhatsappbussiness please!!!!!!!
  priceRange: '$$',
  geo: {
    locality: 'Ciudad de México',
    region: 'CDMX',
    postalCode: '11500',
    country: 'MX'
  }
};

export const generateAdvancedSeoSchema = (data: typeof siteMetadata) => {
  const businessId = `${data.url}/#organization`;
  const serviceId = `${data.url}/#servicios-web`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        'name': 'Artstrokes',
        'image': data.ogImage,
        'url': data.url,
        'telephone': data.telephone,
        'priceRange': '$3500 MXN',
        'description': data.description,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Servicio digital con cobertura en todo México',
          'addressLocality': data.geo.locality,
          'addressRegion': data.geo.region,
          'postalCode': data.geo.postalCode,
          'addressCountry': data.geo.country
        },
        'areaServed': [
          { '@type': 'Country', 'name': 'México' }
        ],
        'knowsLanguage': ['es']
      },

      {
        '@type': 'Service',
        '@id': serviceId,
        'name': 'Diseño y Desarrollo de Páginas Web en 48 Horas',
        'provider': { '@type': 'ProfessionalService', '@id': businessId },
        'description': 'Creación de páginas web premium y landing pages para emprendedores y negocios en México. Entrega garantizada en 2 días hábiles.',
        'serviceType': 'Web Design and Development',
        'areaServed': { '@type': 'Country', 'name': 'México' },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Servicios de Diseño Web',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Landing Page Editorial Premium'
              },
              'price': '3500',
              'priceCurrency': 'MXN',
              'priceSpecification': {
                '@type': 'PriceSpecification',
                'price': '3500',
                'priceCurrency': 'MXN',
                'valueAddedTaxIncluded': true
              }
            }
          ]
        },
        'availableChannel': {
          '@type': 'ServiceChannel',
          'language': { '@type': 'Language', 'name': 'Spanish', 'alternateName': 'es' }
        }
      },

      {
        '@type': 'FAQPage',
        '@id': `${data.url}/#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Cómo entregan una página web en solo 48 horas?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'En Artstrokes optimizamos el proceso de diseño editorial y desarrollo utilizando una estructura sólida y moderna. Una vez que nos entregas tu información, nos enfocamos al 100% en tu proyecto para tenerlo listo en 2 días hábiles.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿El precio de $3,500 MXN incluye cargos ocultos o suscripciones?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No, en Artstrokes no cobramos suscripciones mensuales ni tarifas ocultas. El pago de $3,500 MXN es único por el diseño y desarrollo de tu página web.'
            }
          },
          {
            '@type': 'Question',
            'name': '¿Ofrecen el servicio para todo México?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, diseñamos páginas web para emprendedores, profesionistas y negocios de cualquier parte de la República Mexicana de forma 100% remota y digital.'
            }
          }
        ]
      },

      {
        '@type': 'WebSite',
        '@id': `${data.url}/#website`,
        'url': data.url,
        'name': 'Artstrokes',
        'description': data.description,
        'inLanguage': 'es'
      }
    ]
  };
};