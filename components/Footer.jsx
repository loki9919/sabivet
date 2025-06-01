import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  Instagram,
  ArrowUp,
  Shield,
  Award,
  Stethoscope
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Accueil', href: 'hero' },
    { name: 'Services', href: 'services' },
    { name: 'À propos', href: 'about' },
    { name: 'Témoignages', href: 'testimonials' },
    { name: 'Contact', href: 'contact' }
  ]

  const services = [
    'Consultation générale',
    'Urgences 24h/24',
    'Chirurgie vétérinaire',
    'Vaccinations',
    'Stérilisation',
    'Soins dentaires',
    'Analyses laboratoire',
    'Cardiologie'
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/sabivetclinic/', name: 'Instagram' }
  ]

  const certifications = [
    { icon: Shield, text: 'Cabinet certifié' },
    { icon: Award, text: 'Vétérinaires diplômés' },
    { icon: Stethoscope, text: 'Équipement moderne' }
  ]

  return (
    <footer className="bg-sabivet-primary text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/sabivet-logo.jpg"
                alt="SabiVet - Cabinet Vétérinaire"
                width={160}
                height={50}
                className="h-10 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback text logo */}
              <div className="hidden items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sabivet-primary font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold">SabiVet</h3>
                  <p className="text-sabivet-accent text-sm">Cabinet Vétérinaire</p>
                </div>
              </div>
            </div>
            
            <p className="text-sabivet-accent leading-relaxed mb-6">
              Votre partenaire de confiance pour la santé et le bien-être de vos animaux 
              de compagnie depuis plus de 15 ans à Agadir.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <cert.icon className="w-5 h-5 text-sabivet-accent" />
                  <span className="text-sm text-sabivet-accent">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sabivet-accent hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sabivet-accent text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-sabivet-accent mt-0.5" />
                <div>
                  <a 
                    href="tel:+212637150811"
                    className="text-sabivet-accent hover:text-white transition-colors text-sm block"
                  >
                    +212 6 37 15 08 11
                  </a>
                  <span className="text-xs text-sabivet-accent/80">Urgences 24h/24</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sabivet-accent mt-0.5" />
                <a 
                  href="mailto:contact@sabivet.ma"
                  className="text-sabivet-accent hover:text-white transition-colors text-sm"
                >
                  contact@sabivet.ma
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sabivet-accent mt-0.5" />
                <div>
                  <span className="text-sabivet-accent text-sm block">
                    Cabinet vétérinaire SabiVet
                  </span>
                  <span className="text-sabivet-accent text-sm">Agadir, Maroc</span>
                  <a
                    href="https://www.google.com/maps/place/Cabinet+v%C3%A9t%C3%A9rinaire+SabiVet/@30.4170535,-9.5777919,17z/data=!3m1!4b1!4m6!3m5!1s0xdb3b71c43c17a23:0x2734e4e1c4b59bea!8m2!3d30.4170535!4d-9.5777919!16s%2Fg%2F11w1fmv9wv?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sabivet-accent/80 hover:text-white transition-colors block mt-1"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-sabivet-accent mt-0.5" />
                <div className="text-sabivet-accent text-sm">
                  <div>Lun-Ven: 8h00-19h00</div>
                  <div>Sam: 8h00-16h00</div>
                  <div className="text-xs text-sabivet-accent/80 mt-1">
                    Dimanche: Urgences uniquement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-sabivet-secondary/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-heading font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-sabivet-secondary/30 rounded-full flex items-center justify-center hover:bg-white hover:text-sabivet-primary transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md w-full md:w-auto">
              <h4 className="text-lg font-heading font-semibold mb-4 text-center md:text-left">
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-sabivet-secondary/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-sabivet-accent"
                />
                <button className="bg-white text-sabivet-primary px-6 py-2 rounded-r-lg hover:bg-sabivet-accent transition-colors duration-300 font-medium">
                  S'abonner
                </button>
              </div>
              <p className="text-xs text-sabivet-accent/80 mt-2">
                Recevez nos conseils vétérinaires et nos actualités
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-3 sm:mb-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <span className="font-semibold text-sm">Urgences Vétérinaires 24h/24</span>
                <p className="text-xs opacity-90">Service d'urgence disponible en permanence</p>
              </div>
            </div>
            <a
              href="tel:+212637150811"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
            >
              +212 6 37 15 08 11
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-sabivet-dark">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sabivet-accent text-sm">
                © 2024 SabiVet - Cabinet Vétérinaire. Tous droits réservés.
              </p>
              <p className="text-sabivet-accent/70 text-xs mt-1">
                Développé avec <Heart className="w-3 h-3 inline text-red-400" /> pour nos amis à quatre pattes
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-sabivet-primary hover:bg-white hover:text-sabivet-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Retour en haut"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              
              <div className="hidden md:flex space-x-4 text-xs text-sabivet-accent">
                <button className="hover:text-white transition-colors">
                  Mentions légales
                </button>
                <button className="hover:text-white transition-colors">
                  Politique de confidentialité
                </button>
                <button className="hover:text-white transition-colors">
                  CGU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 