import { SITE_NAME } from '@/lib/config';

const features = [
  {
    icon: '🥬',
    title: 'Fresh Ingredients',
    desc: 'We use high quality ingredients to prepare every dish fresh for our customers.',
  },
  {
    icon: '🍛',
    title: 'Authentic Taste',
    desc: 'Our recipes are carefully crafted to deliver traditional flavors.',
  },
  {
    icon: '🪑',
    title: 'Comfortable Dining',
    desc: 'A welcoming environment perfect for families and gatherings.',
  },
  {
    icon: '⚡',
    title: 'Fast Service',
    desc: 'Quick service so you can enjoy your favorite meals without waiting.',
  },
];

export default function WhyChoose() {
  return (
    <section className="section" id="why-choose">
      <div className="section__container fade-in">
        <hr className="section-divider" />
        <h2>Why Choose {SITE_NAME}</h2>

        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-card__icon" role="img" aria-label={f.title}>
                {f.icon}
              </span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
