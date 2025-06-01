import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote, Heart, PawPrint } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Benali",
      location: "Agadir",
      petName: "Luna",
      petType: "Chat Persan",
      rating: 5,
      text: "Le Dr. Sabir a sauvé la vie de ma chatte Luna lors d'une urgence nocturne. Son professionnalisme et sa compassion sont remarquables. Je recommande vivement SabiVet !",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1-e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Chirurgie d'urgence"
    },
    {
      name: "Mohamed Alaoui",
      location: "Agadir",
      petName: "Rex",
      petType: "Berger Allemand",
      rating: 5,
      text: "Excellent suivi pour les vaccinations et les soins préventifs de Rex. L'équipe est très professionnelle et toujours disponible pour répondre à nos questions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Soins préventifs"
    },
    {
      name: "Fatima Zahra",
      location: "Agadir",
      petName: "Mimi",
      petType: "Canari",
      rating: 5,
      text: "Dr. El Mansouri a pris un soin extraordinaire de mon canari. Son expertise et sa patience avec les petits animaux sont impressionnantes. Merci beaucoup !",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Soins aviaires"
    },
    {
      name: "Hassan Tahiri",
      location: "Agadir",
      petName: "Simba",
      petType: "Chat de gouttière",
      rating: 5,
      text: "Consultation excellente pour Simba. Le diagnostic était précis et le traitement très efficace. L'équipe de SabiVet est vraiment à l'écoute des propriétaires.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Consultation générale"
    },
    {
      name: "Aicha Benjelloun",
      location: "Agadir",
      petName: "Bella",
      petType: "Golden Retriever",
      rating: 5,
      text: "La stérilisation de Bella s'est parfaitement déroulée. Suivi post-opératoire impeccable. Je fais confiance à SabiVet pour tous les soins de mes animaux.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Chirurgie"
    },
    {
      name: "Youssef Berrada",
      location: "Agadir",
      petName: "Oscar",
      petType: "Lapin nain",
      rating: 5,
      text: "Service d'urgence disponible 24h/24, équipe réactive et compétente. Oscar a été soigné rapidement et efficacement. Bravo à toute l'équipe !",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      service: "Urgence"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-sabivet-light">
      <div className="container-custom">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sabivet-primary mb-6">
            Témoignages de nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos clients pensent de nos services vétérinaires et 
            de l'attention que nous portons à leurs compagnons
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-white rounded-2xl shadow-sabivet-lg p-8 md:p-12 mb-8">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-sabivet-accent rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-sabivet-primary" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-sabivet-primary" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 z-10"
            >
              <ChevronRight className="w-6 h-6 text-sabivet-primary" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center pt-8">
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials[currentSlide].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-heading font-semibold text-lg text-gray-900">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].location}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <PawPrint className="w-4 h-4 text-sabivet-primary" />
                    <span className="text-sabivet-primary text-sm font-medium">
                      {testimonials[currentSlide].petName} - {testimonials[currentSlide].petType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Tag */}
              <div className="mt-6">
                <span className="bg-sabivet-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentSlide].service}
                </span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-sabivet-primary scale-125' 
                    : 'bg-gray-300 hover:bg-sabivet-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0.3s' }}>
          <div className="text-center p-6 bg-white rounded-xl shadow-sabivet">
            <div className="w-16 h-16 bg-sabivet-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-sabivet-primary" />
            </div>
            <div className="text-3xl font-bold text-sabivet-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sabivet">
            <div className="w-16 h-16 bg-sabivet-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-sabivet-primary" />
            </div>
            <div className="text-3xl font-bold text-sabivet-primary mb-2">98%</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sabivet">
            <div className="w-16 h-16 bg-sabivet-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <PawPrint className="w-8 h-8 text-sabivet-primary" />
            </div>
            <div className="text-3xl font-bold text-sabivet-primary mb-2">500+</div>
            <div className="text-gray-600">Avis positifs</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-sabivet-primary to-sabivet-secondary text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Confiez la santé de vos animaux à notre équipe d'experts
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-sabivet-primary hover:bg-sabivet-accent font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials