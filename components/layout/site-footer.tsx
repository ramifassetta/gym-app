"use client"

import React from 'react';
import Link from 'next/link';
import { Dumbbell, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-6">
              <div className="bg-primary p-1.5 sm:p-2 rounded-lg">
                <Dumbbell className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">GymRoutine Pro</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Transformando la gestión de gimnasios y la experiencia de entrenamiento con tecnología de vanguardia.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-1">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-1">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-1">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-1">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 border-b border-gray-700 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 border-b border-gray-700 pb-2">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm sm:text-base">
                  Calle Gimnasio, 123<br />
                  28001 Madrid, España
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <a href="tel:+34900123456" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <a href="mailto:info@gymroutinepro.com" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                  info@gymroutinepro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} GymRoutine Pro. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/sitemap" className="text-gray-500 hover:text-primary text-xs sm:text-sm">
                Mapa del sitio
              </Link>
              <Link href="/help" className="text-gray-500 hover:text-primary text-xs sm:text-sm">
                Ayuda
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-primary text-xs sm:text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

