import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  Users, 
  Heart, 
  Clock, 
  Stethoscope,
  Star,
  MapPin,
  Phone,
  GraduationCap,
  PawPrint
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  const [counters, setCounters] = useState({
    patients: 0,
    years: 0,
    surgeries: 0,
    satisfaction: 0
  })

  const finalStats = {
    patients: 5000,
    years: 15,
    surgeries: 2500,
    satisfaction: 98
  }

  useEffect(() => {
    if (statsInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      const incrementStats = (stat, final) => {
        const increment = final / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= final) {
            current = final
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [stat]: Math.floor(current) }))
        }, stepDuration)
      }

      incrementStats('patients', finalStats.patients)
      incrementStats('years', finalStats.years)
      incrementStats('surgeries', finalStats.surgeries)
      incrementStats('satisfaction', finalStats.satisfaction)
    }
  }, [statsInView])

  const teamMembers = [
    {
      name: "Dr. Ahmed Sabir",
      title: "Vétérinaire Principal",
      specialization: "Chirurgie & Médecine Générale",
      experience: "15 ans d'expérience",
      description: "Diplômé de l'École Nationale Vétérinaire, spécialisé en chirurgie et médecine interne. Passionné par le bien-être animal.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Fatima El Mansouri",
      title: "Vétérinaire Spécialisée",
      specialization: "Cardiologie & Échographie",
      experience: "10 ans d'expérience",
      description: "Experte en cardiologie vétérinaire et diagnostic par imagerie. Formation continue en médecine spécialisée.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Youssef Alami",
      title: "Assistant Vétérinaire",
      specialization: "Soins & Assistance",
      experience: "8 ans d'expérience",
      description: "Assistant expérimenté, spécialisé dans les soins post-opératoires et l'assistance aux interventions chirurgicales.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  const features = [
    {
      icon: Award,
      title: "Excellence reconnue",
      description: "Cabinet certifié avec reconnaissance professionnelle"
    },
    {
      icon: Heart,
      title: "Passion pour les animaux",
      description: "Équipe dévouée au bien-être de vos compagnons"
    },
    {
      icon: Stethoscope,
      title: "Équipement moderne",
      description: "Technologies de pointe pour des soins optimaux"
    },
    {
      icon: Clock,
      title: "Disponibilité 24h/24",
      description: "Service d'urgence permanent pour vos animaux"
    }
  ]

  const stats = [
    {
      icon: PawPrint,
      label: "Animaux soignés",
      value: counters.patients,
      suffix: "+"
    },
    {
      icon: Award,
      label: "Années d'expérience",
      value: counters.years,
      suffix: " ans"
    },
    {
      icon: Stethoscope,
      label: "Interventions réalisées",
      value: counters.surgeries,
      suffix: "+"
    },
    {
      icon: Star,
      label: "Satisfaction client",
      value: counters.satisfaction,
      suffix: "%"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sabivet-primary mb-6">
            À Propos de SabiVet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 15 ans, nous nous consacrons à la santé et au bien-être de vos animaux 
            de compagnie avec passion et professionnalisme
          </p>
        </div>

        {/* Clinic Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-heading font-bold text-sabivet-primary mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Fondé en 2008 à Agadir, le Cabinet vétérinaire SabiVet est né de la passion 
                du Dr. Ahmed Sabir pour les animaux et de sa volonté d'offrir des soins 
                vétérinaires de haute qualité au Maroc.
              </p>
              <p>
                Au fil des années, notre équipe s'est agrandie et nos installations se sont 
                modernisées pour répondre aux besoins croissants de nos clients et de leurs 
                compagnons. Nous combinons expertise traditionnelle et technologies innovantes.
              </p>
              <p>
                Aujourd'hui, SabiVet est reconnu comme une référence en matière de soins 
                vétérinaires dans la région d'Agadir, avec plus de 5000 animaux soignés 
                et une équipe de professionnels dévoués.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sabivet-primary" />
                <span className="text-gray-700">Cabinet vétérinaire SabiVet, Agadir</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sabivet-primary" />
                <a href="tel:+212637150811" className="text-sabivet-primary hover:text-sabivet-dark transition-colors">
                  +212 6 37 15 08 11
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cabinet vétérinaire SabiVet"
                className="rounded-2xl shadow-sabivet-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-sabivet-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Années d'Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-sabivet-light rounded-xl transition-all duration-300 hover:shadow-sabivet hover:transform hover:scale-105"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-sabivet-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-sabivet-primary mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 transition-all duration-300 hover:transform hover:scale-105"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-sabivet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-sabivet-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-sabivet-primary mb-4">
              Notre Équipe
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels expérimentés et passionnés, dédiés au bien-être de vos animaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sabivet p-8 text-center card-hover transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sabivet-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-sabivet-primary font-semibold mb-1">
                  {member.title}
                </div>
                <div className="text-gray-600 text-sm mb-3">
                  {member.specialization}
                </div>
                <div className="text-sabivet-secondary text-sm font-medium mb-4">
                  {member.experience}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 