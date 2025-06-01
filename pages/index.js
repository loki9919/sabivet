import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { ServiceProvider } from '../components/ServiceContext'

export default function Home() {
  return (
    <>
      <Head>
        <title>SabiVet - Cabinet Vétérinaire à Agadir | Soins Professionnels pour vos Animaux</title>
        <meta name="description" content="Cabinet vétérinaire SabiVet à Agadir, Maroc. Services vétérinaires complets : consultations, chirurgie, urgences 24h/24. Équipe expérimentée et équipements modernes. Appelez +212 6 37 15 08 11" />
        <meta name="keywords" content="vétérinaire Agadir, cabinet vétérinaire Maroc, SabiVet, soins animaux, urgence vétérinaire, consultation, chirurgie vétérinaire, vaccinations, stérilisation" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Agadir" />
        <meta name="geo.position" content="30.4170535;-9.5777919" />
        <meta name="ICBM" content="30.4170535, -9.5777919" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SabiVet - Cabinet Vétérinaire à Agadir" />
        <meta property="og:description" content="Services vétérinaires professionnels pour vos animaux de compagnie à Agadir, Maroc. Urgences 24h/24." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://sabivet.ma" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="SabiVet - Cabinet Vétérinaire" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SabiVet - Cabinet Vétérinaire à Agadir" />
        <meta name="twitter:description" content="Services vétérinaires professionnels pour vos animaux de compagnie" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryClinic",
              "name": "SabiVet - Cabinet Vétérinaire",
              "description": "Cabinet vétérinaire professionnel à Agadir offrant des soins complets pour vos animaux de compagnie",
              "url": "https://sabivet.ma",
              "telephone": "+212637150811",
              "email": "contact@sabivet.ma",
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
              "image": "/clinic-image.jpg",
              "serviceArea": {
                "@type": "City",
                "name": "Agadir"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Vétérinaires",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Consultation générale"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chirurgie vétérinaire"
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
                      "name": "Vaccinations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Stérilisation"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Benali"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Le Dr. Sabir a sauvé la vie de ma chatte Luna lors d'une urgence nocturne. Son professionnalisme et sa compassion sont remarquables."
                }
              ]
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#376d53" />
      </Head>

      <ServiceProvider>
        <main className="min-h-screen bg-white">
          <Header />
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </ServiceProvider>
    </>
  )
} 