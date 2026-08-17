import WhatsAppLink from './WhatsAppLink';
import { DISCOUNT_PERCENT } from '@/lib/config';

export default function DiscountCTA() {
  return (
    <section className="section section--alt cta-section" id="order-now">
      <div className="section__container fade-in">
        <hr className="section-divider" />
        <h2>Order Now &amp; Get {DISCOUNT_PERCENT}% Discount</h2>
        <p>
          Order your favorite dishes directly through WhatsApp and enjoy a special discount on your order.
        </p>
        <WhatsAppLink variant="gold">Order Now</WhatsAppLink>
      </div>
    </section>
  );
}
