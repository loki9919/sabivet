import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SabiVet - Cabinet Vétérinaire Professionnel à Agadir | Soins Pour Animaux</title>
        <meta name="description" content="SabiVet - Cabinet vétérinaire professionnel à Agadir, Maroc. Services vétérinaires complets pour vos animaux de compagnie. Urgences 24h/24. Appelez-nous au +212 6 37 15 08 11" />
        <meta name="keywords" content="vétérinaire, Agadir, Maroc, SabiVet, soins animaux, urgence vétérinaire, consultation, chirurgie, dentaire, vaccination, stérilisation" />
        <meta name="author" content="SabiVet - Cabinet Vétérinaire" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/sabivet-logo.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/sabivet-logo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/sabivet-logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#376d53" />
        <meta name="msapplication-TileColor" content="#376d53" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sabivet.ma" />
        <meta property="og:title" content="SabiVet - Cabinet Vétérinaire Professionnel à Agadir" />
        <meta property="og:description" content="Services vétérinaires professionnels pour vos animaux de compagnie à Agadir, Maroc. Urgences 24h/24, consultations, chirurgie et plus." />
        <meta property="og:image" content="/images/sabivet-logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SabiVet" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sabivet.ma" />
        <meta name="twitter:title" content="SabiVet - Cabinet Vétérinaire à Agadir" />
        <meta name="twitter:description" content="Services vétérinaires professionnels pour vos animaux de compagnie à Agadir. Urgences 24h/24." />
        <meta name="twitter:image" content="/images/sabivet-logo.jpg" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "SabiVet - Cabinet Vétérinaire",
              "image": "/images/sabivet-logo.jpg",
              "description": "Cabinet vétérinaire professionnel offrant des soins complets pour animaux de compagnie à Agadir, Maroc.",
              "url": "https://sabivet.ma",
              "telephone": "+212637150811",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Cabinet vétérinaire SabiVet",
                "addressLocality": "Agadir",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.4170535",
                "longitude": "-9.5777919"
              },
              "openingHours": [
                "Mo-Fr 08:00-19:00",
                "Sa 08:00-16:00"
              ],
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Vétérinaires",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Consultation vétérinaire"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Urgences 24h/24"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chirurgie vétérinaire"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://sabivet.ma" />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 