import { SITE_NAME } from '@/lib/config';

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="section__container fade-in">
        <hr className="section-divider" />
        <h2>About {SITE_NAME}</h2>
        <p className="about__text">
          {SITE_NAME} is dedicated to serving freshly prepared dishes with authentic taste
          and quality ingredients. Our goal is to create a memorable dining experience where
          customers can enjoy delicious food, warm hospitality, and a comfortable atmosphere.
        </p>
        <p className="about__text">
          From traditional Indian favorites to modern flavors, every dish is prepared with care by
          our experienced kitchen team. Whether you&apos;re visiting with family, friends, or colleagues,
          {SITE_NAME} ensures a satisfying dining experience.
        </p>
      </div>
    </section>
  );
}
