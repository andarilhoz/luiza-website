const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Veterinária Luiza",
    "url": "https://www.luizanayara.com.br",
    "description": "Especializada em Medicina Veterinária Integrativa com foco em acupuntura, cannabis medicinal, laserterapia, nutrição, fitoterapia e outros tratamentos.",
    "image": "https://www.luizanayara.com.br/img/logo6.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Francisco Marson, 234",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "05634-160",
      "addressCountry": "BR"
    },
    "telephone": "+55-11-95552-3946",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.60270836340529,
      "longitude": -46.740342335492514
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/mv.luizanayara"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Veterinária Luiza",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.luizanayara.com.br/img/logo6.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.luizanayara.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
  