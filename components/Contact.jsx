import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useService } from './ServiceContext'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  User,
  MessageSquare,
  PawPrint
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { selectedService, setSelectedService } = useService()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    service: '',
    message: '',
    urgency: false
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const [errors, setErrors] = useState({})

  // Update form when service is selected
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService
      }))
      // Clear the selected service after setting it
      setTimeout(() => {
        setSelectedService('')
      }, 1000)
    }
  }, [selectedService, setSelectedService])

  const services = [
    "Consultation générale",
    "Vaccination",
    "Chirurgie",
    "Urgence",
    "Stérilisation",
    "Soins dentaires",
    "Analyses laboratoire",
    "Cardiologie",
    "Ophtalmologie",
    "Médecine préventive",
    "Pharmacie vétérinaire",
    "Urgences 24h/24",
    "Orthopédie",
    "Autre"
  ]

  const petTypes = [
    "Chien",
    "Chat",
    "Lapin",
    "Oiseau",
    "Rongeur",
    "Reptile",
    "Autre"
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis"
    }

    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: true, 
        error: null 
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        petName: '',
        petType: '',
        service: '',
        message: '',
        urgency: false
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }))
      }, 5000)

    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: "Une erreur est survenue. Veuillez réessayer." 
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+212 6 37 15 08 11"],
      action: "tel:+212637150811",
      actionText: "Numéro principal"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Cabinet vétérinaire SabiVet", "Agadir, Maroc"],
      action: "https://www.google.com/maps/place/Cabinet+v%C3%A9t%C3%A9rinaire+SabiVet/@30.4170535,-9.5777919,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3b71c43c17a23:0x2734e4e1c4b59bea!8m2!3d30.4170535!4d-9.5777919!16s%2Fg%2F11w1fmv9wv?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D",
      actionText: "Voir sur la carte"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lun-Ven: 8h00-19h00",
        "Sam: 8h00-16h00",
        "Urgences: 24h/24"
      ],
      action: null,
      actionText: null
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@sabivet.ma"],
      action: "mailto:contact@sabivet.ma",
      actionText: "Envoyer un email"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sabivet-primary mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prenez rendez-vous ou contactez-nous pour tous vos besoins vétérinaires. 
            Notre équipe est là pour vous accompagner.
          </p>
          {selectedService && (
            <div className="mt-4 p-3 bg-sabivet-accent border-l-4 border-sabivet-primary rounded-r-lg max-w-md mx-auto">
              <p className="text-sabivet-primary font-medium text-sm">
                ✅ Service sélectionné: <span className="font-semibold">{selectedService}</span>
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-sabivet-light rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-sabivet-primary mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Prendre Rendez-vous
              </h3>

              {/* Success Message */}
              {formStatus.isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">
                    Votre demande a été envoyée avec succès ! Nous vous contacterons sous peu.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <span className="text-red-800">{formStatus.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre nom"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+212 6 XX XX XX XX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Pet Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom de l'animal
                    </label>
                    <div className="relative">
                      <PawPrint className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors"
                        placeholder="Nom de votre animal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Type d'animal
                    </label>
                    <select
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionner</option>
                      {petTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service demandé *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    } ${formData.service ? 'bg-sabivet-accent/20 border-sabivet-primary' : ''}`}
                  >
                    <option value="">Sélectionner un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  {formData.service && (
                    <p className="text-sabivet-primary text-sm mt-1 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Service sélectionné: {formData.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sabivet-primary focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez les symptômes, votre demande ou toute information importante..."
                    ></textarea>
                  </div>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="urgency"
                    checked={formData.urgency}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-sabivet-primary bg-gray-100 border-gray-300 rounded focus:ring-sabivet-primary focus:ring-2"
                  />
                  <label className="ml-2 text-gray-700">
                    Il s'agit d'une urgence
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-sabivet-primary hover:bg-sabivet-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer la demande
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sabivet p-6 card-hover"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sabivet-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-sabivet-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-block mt-3 text-sabivet-primary hover:text-sabivet-dark font-medium text-sm transition-colors"
                        >
                          {info.actionText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-sabivet p-6">
              <h4 className="font-heading font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-sabivet-primary" />
                Notre Localisation
              </h4>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.2145234567!2d-9.5777919!3d30.4170535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b71c43c17a23%3A0x2734e4e1c4b59bea!2sCabinet%20v%C3%A9t%C3%A9rinaire%20SabiVet!5e0!3m2!1sen!2sma!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.google.com/maps/place/Cabinet+v%C3%A9t%C3%A9rinaire+SabiVet/@30.4170535,-9.5777919,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3b71c43c17a23:0x2734e4e1c4b59bea!8m2!3d30.4170535!4d-9.5777919!16s%2Fg%2F11w1fmv9wv?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sabivet-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-sabivet-dark transition-colors"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6">
              <h4 className="font-heading font-bold text-xl mb-2 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Urgences 24h/24
              </h4>
              <p className="mb-4 opacity-90">
                Pour les urgences vétérinaires, contactez-nous immédiatement
              </p>
              <a
                href="tel:+212637150811"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +212 6 37 15 08 11
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 