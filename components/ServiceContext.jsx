import { createContext, useContext, useState } from 'react'

const ServiceContext = createContext()

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState('')

  const selectService = (serviceName) => {
    setSelectedService(serviceName)
    // Smooth scroll to contact section
    setTimeout(() => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <ServiceContext.Provider value={{ selectedService, selectService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export const useService = () => {
  const context = useContext(ServiceContext)
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider')
  }
  return context
} 