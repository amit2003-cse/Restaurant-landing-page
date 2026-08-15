import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; {year} ClubOSG. All rights reserved.
        </p>
        <div className="footer__links">
          <Link href="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
          <a
            href="https://wa.me/917562850040?text=I%20want%20to%20know%20about%20your%20service%3F"
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
