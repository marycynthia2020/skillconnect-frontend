import { Mail, Phone } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../Logo";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Service", href: "#" },
  ];

  const usefulLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Terms & Condition", href: "#" },
  ];

  return (
    <footer className=" mt-10 md:mt-20 py-20 bg-[#2f2f2f] text-white " id="contact">
      <div className="max-w-[1440px] px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Contact */}
          <div className="space-y-4 items-left">
            {/* <Logo  color="#ffffff"/> */}
              <h3 className=' text-xl  font-medium'>SkillConnect</h3>
            <div className="space-y-2 text-lg opacity-50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:skillconnect@gmail.com" className="">
                  skillconnect@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+90123456789" className="">
                  +91 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
            <ul className="space-y-2 text-lg opacity-50">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-footer-heading transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-footer-heading group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 ">Useful Links</h3>
            <ul className="space-y-2 text-lg opacity-50">
              {usefulLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-footer-heading transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-footer-heading group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className=" mb-4 text-lg opacity-50">
              For any update follow us on social media
            </p>
            <div className="flex">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-footer-foreground/10 hover:bg-footer-heading hover:text-footer flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-footer-foreground/10 hover:bg-footer-heading hover:text-footer flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-footer-foreground/10 hover:bg-footer-heading hover:text-footer flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-footer-foreground/10 hover:bg-footer-heading hover:text-footer flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t opacity-50 pt-8">
          <p className="text-center text-xs uppercase tracking-wider">
            All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
