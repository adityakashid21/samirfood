import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="premium-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-footer-foreground rounded-xl flex items-center justify-center">
                <span className="text-footer font-display font-bold text-lg">FF</span>
              </div>
              <span className="font-display font-semibold text-xl">FreshFarms</span>
            </div>
            <p className="text-footer-muted text-sm leading-relaxed">
              Premium farm-fresh vegetables and fruits exported from India to the world. Quality, freshness, and reliability in every shipment.
            </p>
            <div className="flex items-center gap-2 text-sm text-footer-muted">
              <Globe className="w-4 h-4" />
              <span>Operating globally – Export-focused fresh produce</span>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-lg">Products</h3>
            <ul className="space-y-3">
              {['Premium Onions', 'Green Chilies', 'Fresh Grapes', 'Cherry Tomatoes', 'Carrots', 'Apples'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Products', href: '#products' },
                { name: 'Schedule Meeting', href: '#schedule' },
                { name: 'Quality Standards', href: '#about' },
                { name: 'Export Process', href: '#about' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-footer-muted flex-shrink-0 mt-0.5" />
                <span className="text-footer-muted text-sm">
                  FreshFarms Export Hub<br />
                  Nashik, Maharashtra<br />
                  India - 422001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-footer-muted flex-shrink-0" />
                <a href="tel:+919876543210" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-footer-muted flex-shrink-0" />
                <a href="mailto:exports@freshfarms.in" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                  exports@freshfarms.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-footer-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-footer-muted text-sm">
              © {new Date().getFullYear()} FreshFarms. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
