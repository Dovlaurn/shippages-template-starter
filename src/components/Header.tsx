import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    // You can implement actual sign-in logic here
    // For now, we'll just scroll to the contact section
    scrollToSection('contact');
  };

  const handleGetStarted = () => {
    // You can implement actual sign-up logic here
    // For now, we'll just scroll to the pricing section
    scrollToSection('pricing');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="ShipPages Logo" 
              className="h-8 w-auto rounded"
            />
            <span className="text-xl font-bold text-gray-900">Your name here</span>
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:inline-flex"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button size="sm" onClick={handleGetStarted}>
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
