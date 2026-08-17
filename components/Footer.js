import Link from 'next/link';
import { SITE_NAME, WHATSAPP_URL } from '@/lib/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
        <div className="footer__links">
          <Link href="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
}
