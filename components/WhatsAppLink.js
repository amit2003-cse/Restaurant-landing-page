const WHATSAPP_URL = 'https://wa.me/917562850040?text=I%20want%20to%20know%20about%20your%20service%3F';

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
