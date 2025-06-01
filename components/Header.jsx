import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Accueil', href: 'hero' },
    { name: 'Services', href: 'services' },
    { name: 'À propos', href: 'about' },
    { name: 'Témoignages', href: 'testimonials' },
    { name: 'Contact', href: 'contact' }
  ]

  return (
    <>
      {/* Top bar with contact info */}
      <div className={`bg-sabivet-primary text-white py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'} hidden md:block`}>
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+212 6 37 15 08 11</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Cabinet vétérinaire SabiVet, Agadir</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Lun-Sam: 8h-19h | Urgences 24h/24</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl top-0' 
            : 'bg-white/90 backdrop-blur-sm top-10'
        }`}
      >
        <nav className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}>
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <div className="relative group">
                <div className={`absolute -inset-2 bg-gradient-to-r from-sabivet-primary to-sabivet-secondary rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                <div className="relative bg-white rounded-lg p-2 shadow-lg border border-sabivet-accent group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/sabivet-logo.jpg"
                    alt="SabiVet - Cabinet Vétérinaire"
                    width={isScrolled ? 160 : 200}
                    height={isScrolled ? 50 : 65}
                    priority
                    className={`object-contain transition-all duration-300 ${
                      isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'
                    } filter brightness-110 contrast-110`}
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Enhanced Fallback text logo */}
                  <div className="hidden items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-sabivet-primary to-sabivet-secondary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <div>
                      <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-sabivet-primary to-sabivet-secondary bg-clip-text text-transparent">
                        SabiVet
                      </h1>
                      <p className="text-sm text-gray-600 hidden sm:block">
                        Cabinet Vétérinaire
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-sabivet-primary font-medium transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sabivet-primary to-sabivet-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Rendez-vous
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-sabivet-primary transition-colors duration-300 hover:bg-sabivet-accent"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 shadow-lg">
            <div className="container-custom">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-sabivet-primary font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-sabivet-accent"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary w-full text-sm"
                  >
                    Prendre Rendez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header 