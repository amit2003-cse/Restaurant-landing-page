import WhatsAppLink from './WhatsAppLink';

export default function DiscountCTA() {
  return (
    <section className="section section--alt cta-section" id="order-now">
      <div className="section__container fade-in">
        <hr className="section-divider" />
        <h2>Order Now &amp; Get 5% Discount</h2>
        <p>
          Order your favorite dishes directly through WhatsApp and enjoy a special discount on your order.
        </p>
        <WhatsAppLink variant="gold">Order Now</WhatsAppLink>
      </div>
    </section>
  );
}
