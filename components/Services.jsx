import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useService } from './ServiceContext'
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  Heart, 
  Pill, 
  Zap,
  Eye,
  Bone,
  Activity,
  Plus,
  ArrowRight,
  Clock,
  Calendar
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [flippedCard, setFlippedCard] = useState(null)
  const { selectService } = useService()

  const handleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  const handleServiceSelect = (serviceName) => {
    selectService(serviceName)
  }

  const services = [
    {
      icon: Stethoscope,
      title: "Consultation générale",
      shortDesc: "Examens de routine et bilans de santé complets",
      fullDesc: "Nos vétérinaires expérimentés réalisent des examens approfondis pour maintenir la santé optimale de vos animaux. Vaccinations, bilans annuels, conseils nutritionnels et préventifs.",
      features: ["Examen clinique complet", "Vaccinations", "Conseils préventifs", "Suivi médical"],
      duration: "30-45 min",
      emergency: false
    },
    {
      icon: Scissors,
      title: "Chirurgie",
      shortDesc: "Interventions chirurgicales avec équipement moderne",
      fullDesc: "Bloc opératoire équipé des dernières technologies pour tous types d'interventions chirurgicales. Stérilisation, chirurgie orthopédique, interventions d'urgence.",
      features: ["Chirurgie générale", "Stérilisation", "Orthopédie", "Chirurgie d'urgence"],
      duration: "1-3 heures",
      emergency: true
    },
    {
      icon: Shield,
      title: "Médecine préventive",
      shortDesc: "Protection et prévention des maladies",
      fullDesc: "Programmes de prévention personnalisés incluant vaccinations, vermifugation, protection antiparasitaire et conseils d'hygiène pour une vie saine.",
      features: ["Vaccinations", "Vermifugation", "Antiparasitaires", "Conseils hygiène"],
      duration: "20-30 min",
      emergency: false
    },
    {
      icon: Heart,
      title: "Cardiologie",
      shortDesc: "Soins spécialisés du cœur et circulation",
      fullDesc: "Diagnostic et traitement des affections cardiaques avec électrocardiogramme, échocardiographie et suivi spécialisé des pathologies cardiovasculaires.",
      features: ["ECG", "Échocardiographie", "Suivi cardiaque", "Traitements spécialisés"],
      duration: "45-60 min",
      emergency: true
    },
    {
      icon: Pill,
      title: "Pharmacie vétérinaire",
      shortDesc: "Médicaments et produits de soin",
      fullDesc: "Large gamme de médicaments vétérinaires, compléments alimentaires, produits d'hygiène et accessoires de soin pour vos animaux.",
      features: ["Médicaments", "Compléments", "Produits d'hygiène", "Accessoires"],
      duration: "5-15 min",
      emergency: false
    },
    {
      icon: Zap,
      title: "Urgences 24h/24",
      shortDesc: "Service d'urgence disponible en permanence",
      fullDesc: "Service d'urgence vétérinaire disponible 24h/24 et 7j/7 pour tous types d'urgences : accidents, empoisonnements, complications diverses.",
      features: ["Disponibilité 24h/24", "Soins d'urgence", "Réanimation", "Hospitalisation"],
      duration: "Variable",
      emergency: true
    },
    {
      icon: Eye,
      title: "Ophtalmologie",
      shortDesc: "Soins spécialisés des yeux",
      fullDesc: "Diagnostic et traitement des affections oculaires : conjonctivites, glaucome, cataracte, blessures oculaires avec équipement spécialisé.",
      features: ["Examens oculaires", "Traitements", "Chirurgie oculaire", "Suivi spécialisé"],
      duration: "30-45 min",
      emergency: false
    },
    {
      icon: Bone,
      title: "Orthopédie",
      shortDesc: "Traitement des os et articulations",
      fullDesc: "Spécialisation en orthopédie vétérinaire : fractures, luxations, arthrose, dysplasie avec radiographie numérique et traitements adaptés.",
      features: ["Radiographie", "Orthopédie", "Traumatologie", "Rééducation"],
      duration: "45-90 min",
      emergency: true
    },
    {
      icon: Activity,
      title: "Analyses laboratoire",
      shortDesc: "Diagnostics précis avec analyses complètes",
      fullDesc: "Laboratoire d'analyses sur place pour diagnostics rapides : analyses sanguines, urinaires, coprologiques et tests spécialisés.",
      features: ["Analyses sanguines", "Tests urinaires", "Coprolologie", "Diagnostics rapides"],
      duration: "15-30 min",
      emergency: false
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-sabivet-light">
      <div className="container-custom">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sabivet-primary mb-6">
            Nos Services Vétérinaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de soins vétérinaires professionnels pour assurer la santé et le bien-être 
            de vos compagnons à quatre pattes
          </p>
          <div className="mt-4 text-sabivet-primary text-sm font-medium">
            📋 Cliquez sur un service pour réserver directement
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative h-80 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => handleCardFlip(index)}
              >
                {/* Front of card */}
                <div className={`absolute inset-0 w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}>
                  <div className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-sabivet p-8 flex flex-col items-center text-center backface-hidden group-hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                      service.emergency ? 'bg-red-100 group-hover:bg-red-200' : 'bg-sabivet-accent group-hover:bg-sabivet-primary/10'
                    }`}>
                      <service.icon className={`w-8 h-8 transition-colors duration-300 ${
                        service.emergency ? 'text-red-600' : 'text-sabivet-primary group-hover:text-sabivet-dark'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 group-hover:text-sabivet-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.shortDesc}
                    </p>
                    
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      {service.emergency && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                          Urgence
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-4 text-sabivet-primary">
                      <Plus className="w-6 h-6 mx-auto transition-transform group-hover:rotate-90 duration-300" />
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full bg-sabivet-primary rounded-xl shadow-sabivet p-8 text-white transform rotate-y-180 backface-hidden">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm mb-6 opacity-90">
                      {service.fullDesc}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-sabivet-accent rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleServiceSelect(service.title)
                        }}
                        className="bg-white text-sabivet-primary hover:bg-sabivet-accent font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Réserver ce service</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0.5s' }}>
          <div className="bg-white rounded-2xl shadow-sabivet p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-sabivet-primary mb-4">
              Besoin d'un service spécialisé ?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe d'experts est à votre disposition pour tous vos besoins vétérinaires
            </p>
            <div className="flex justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for card flip effect */}
      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}

export default Services 