import { useState, useEffect } from 'react'
import { Calendar, ArrowRight, Heart, Shield, Clock, Star, Award, Users } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Heart,
      title: "Soins avec passion",
      description: "Des professionnels dévoués à la santé de vos animaux"
    },
    {
      icon: Shield,
      title: "Équipement moderne",
      description: "Technologie de pointe pour des diagnostics précis"
    },
    {
      icon: Clock,
      title: "Urgences 24h/24",
      description: "Disponibles pour vos urgences vétérinaires"
    }
  ]

  const stats = [
    { icon: Users, number: "15+", label: "Années d'expérience" },
    { icon: Award, number: "2000+", label: "Animaux soignés" },
    { icon: Star, number: "4.9/5", label: "Note clients" }
  ]

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(55, 109, 83, 0.9) 0%, rgba(91, 136, 113, 0.8) 50%, rgba(55, 109, 83, 0.9) 100%), url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Sophisticated animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sabivet-accent/30 to-transparent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-sabivet-accent/20 to-transparent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-sabivet-accent/15 to-transparent rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Elegant particle overlay */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Sophisticated headline with enhanced typography */}
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-display-1 font-heading font-extrabold mb-8 text-shadow-xl leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-sabivet-accent to-white bg-clip-text text-transparent">
                Des soins
              </span>
              <span className="block text-sabivet-accent text-shadow-lg">
                exceptionnels
              </span>
              <span className="block">
                pour vos animaux
              </span>
            </h1>
          </div>

          {/* Enhanced subtitle with better spacing */}
          <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-body-large md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed px-4 text-white/95 font-medium">
              Cabinet vétérinaire SabiVet à Agadir - Votre partenaire de confiance pour la santé et le bien-être de vos compagnons à quatre pattes
            </p>
            <div className="flex justify-center items-center space-x-8 mb-12 text-caption text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Expertise certifiée</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Soins personnalisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Service 24h/24</span>
              </div>
            </div>
          </div>

          {/* Sophisticated CTA Section */}
          <div className={`transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 px-4">
              <button 
                onClick={scrollToContact}
                className="group relative bg-white text-sabivet-primary hover:bg-sabivet-accent font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[250px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sabivet-accent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Prendre Rendez-vous</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2 relative z-10" />
              </button>
              
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="group bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 min-w-[250px] backdrop-blur-sm"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Statistics section */}
          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced feature cards */}
          <div className={`transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white/10 hover:transform hover:scale-105 border border-white/10 hover:border-white/30 min-h-[240px] flex flex-col justify-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300 border border-white/20">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 