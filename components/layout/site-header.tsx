"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";

const SiteHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? scrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' 
            : 'bg-gradient-gym/20 backdrop-blur-sm py-5'
          : 'bg-white/95 backdrop-blur-md py-3 shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
                      <Link href="/" className="flex items-center space-x-2">
              <div className={`p-2 rounded-lg ${isHomePage ? (scrolled ? 'bg-primary' : 'bg-white/30 backdrop-blur-sm') : 'bg-primary'}`}>
                <Dumbbell className={`h-6 w-6 text-white`} />
              </div>
              <span className={`text-xl font-bold ${isHomePage ? (scrolled ? 'text-primary' : 'text-white') : 'text-primary'}`}>
                Optifit
              </span>
            </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="/features" className={`font-medium ${isHomePage ? (scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/80 hover:text-white') : 'text-gray-700 hover:text-primary'}`}>
                Características
              </Link>
              <Link href="/pricing" className={`font-medium ${isHomePage ? (scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/80 hover:text-white') : 'text-gray-700 hover:text-primary'}`}>
                Precios
              </Link>
              <Link href="/about" className={`font-medium ${isHomePage ? (scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/80 hover:text-white') : 'text-gray-700 hover:text-primary'}`}>
                Nosotros
              </Link>
              <Link href="/contact" className={`font-medium ${isHomePage ? (scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/80 hover:text-white') : 'text-gray-700 hover:text-primary'}`}>
                Contacto
              </Link>
            </nav>
            
            <div className="flex space-x-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  className={isHomePage 
                    ? (scrolled 
                      ? "border-primary text-primary hover:bg-primary hover:text-white" 
                      : "bg-transparent border-white text-white hover:bg-white/10")
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                  }
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/register">
                <Button 
                  className={isHomePage 
                    ? (scrolled 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "bg-white text-primary hover:bg-white/90")
                    : "bg-primary text-white hover:bg-primary/90"
                  }
                >
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className={`h-6 w-6 ${isHomePage ? (scrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isHomePage ? (scrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/features" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Características
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Precios
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-2 flex flex-col space-y-3">
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Registrarse
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default SiteHeader;