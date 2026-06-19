const reviews = [
  'Amazing food and great service.',
  'One of the best places for family dining.',
  'Delicious food with authentic taste.',
  'Highly recommended for anyone who loves great food.',
];

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="section__container fade-in">
        <hr className="section-divider" />
        <h2>Customer Reviews</h2>

        <ul className="reviews-list">
          {reviews.map((review, i) => (
            <li className="review-item" key={i}>
              <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <span className="review-text">{review}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
