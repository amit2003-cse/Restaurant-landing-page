import { WHATSAPP_URL } from '@/lib/config';

export default function WhatsAppLink({ children, variant = 'green', className = '' }) {
  const classes = `btn btn--${variant} ${className}`.trim();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label="Chat on WhatsApp"
    >
      {children}
    </a>
  );
}

export { WHATSAPP_URL };
