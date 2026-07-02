import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { restaurant } from "@/data/menu";

const socialLinks = [
  {
    label: "Instagram",
    href: restaurant.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: restaurant.social.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: restaurant.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0F0F10]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xl font-bold text-[#F5F5F5]">
              {restaurant.name}
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              {restaurant.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary">
              تواصل معنا
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary/70" />
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary/70" />
                <a
                  href={`mailto:${restaurant.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {restaurant.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                <span>{restaurant.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary">
              ساعات العمل
            </h3>
            <p className="flex items-start gap-3 text-sm text-text-secondary">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
              {restaurant.hours}
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#17181C] text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-xs text-text-secondary">
            © {currentYear} {restaurant.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
