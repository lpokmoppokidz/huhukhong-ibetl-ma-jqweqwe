import React from 'react'
import './Category.scss'
const Categeory = () => {
  // Category data
  const categories = [
    {
      id: 'women',
      title: 'Women',
      subtitle: 'Fashion & Style',
      count: '2.5k+ items',
      iconPath: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V2H13V5.5L7 7V9L13 7.5V15L11.5 16.5V22H12.5V16.5L15 15H17V13H15L13 7.5V15L14.5 16.5V22H15.5V16.5L21 9Z'
    },
    {
      id: 'men',
      title: 'Men',
      subtitle: 'Classic & Modern',
      count: '1.8k+ items',
      iconPath: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM15.89 8.11C15.5 7.72 14.83 7.68 14.39 8.11L13 9.5V12.5L11 10.5V7H9V10.5L7 12.5V15H9V22H11V15H13V22H15V15H17V12.5L15.89 8.11Z'
    },
    {
      id: 'kids',
      title: 'Kids',
      subtitle: 'Fun & Comfort',
      count: '950+ items',
      iconPath: 'M12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM19 13H15L13.5 7.5C13.1 6.1 11.9 5 10.5 5S7.9 6.1 7.5 7.5L6 13H2L3.5 8.5C4.4 6.1 6.6 4.5 9.1 4.5S13.6 6.1 14.5 8.5L16 13H20L19 13ZM7.5 22V16H5.5L7 11H9L10.5 16H8.5V22H7.5ZM16.5 22V16H14.5L16 11H18L19.5 16H17.5V22H16.5Z'
    },
    {
      id: 'family',
      title: 'Family',
      subtitle: 'For Everyone',
      count: '3.2k+ items',
      iconPath: 'M16 4C16.55 4 17 4.45 17 5S16.55 6 16 6 15 5.55 15 5 15.45 4 16 4ZM13 11.5V7H11V11.5L9.5 13L10.91 14.41L13 12.33L15.09 14.41L16.5 13L15 11.5H13ZM7.91 6C8.91 6.5 9.91 7 10.91 7.5L10.91 5.5C10.41 5.5 9.91 5.5 9.41 5.5C8.41 5.5 7.41 5.5 6.91 6H7.91ZM5.5 10C5.5 10.5 5.5 11 5.5 11.5L7 11.5V10H5.5ZM6 22H8V16H10V22H12V14H6V22Z'
    }
  ];

  // Promo banner data
  const promoBanner = {
    badge: 'Limited Time',
    title: 'MEGA SALE',
    discount: {
      percent: '50%',
      text: 'OFF'
    },
    description: 'Get amazing discounts on all categories. Don\'t miss out on this incredible deal!',
    timer: {
      hours: 24,
      minutes: 59,
      seconds: 59
    },
    buttonText: 'Shop Now',
    buttonIconPath: 'M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z'
  };

  // Function to render a single category card
  const renderCategoryCard = (category) => (
    <div class="category-card" data-category={category.id} key={category.id}>
      <div class="category-card__content">
        <div class="category-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d={category.iconPath} />
          </svg>
        </div>
        <div class="category-card__info">
          <h3 class="category-card__title">{category.title}</h3>
          <p class="category-card__subtitle">{category.subtitle}</p>
        </div>
      </div>
      <span class="category-card__count">{category.count}</span>
    </div>
  );

  // Function to render the promo banner
  const renderPromoBanner = () => (
    <div class="promo-banner">
      <div class="promo-banner__content">
        <div class="promo-banner__badge">{promoBanner.badge}</div>
        <h2 class="promo-banner__title">{promoBanner.title}</h2>
        <div class="promo-banner__discount">
          <span class="discount__percent">{promoBanner.discount.percent}</span>
          <span class="discount__text">{promoBanner.discount.text}</span>
        </div>
        <p class="promo-banner__description">
          {promoBanner.description}
        </p>
        <div class="promo-banner__timer">
          <div class="timer__item">
            <span class="timer__number" id="hours">{promoBanner.timer.hours}</span>
            <span class="timer__label">Hours</span>
          </div>
          <div class="timer__item">
            <span class="timer__number" id="minutes">{promoBanner.timer.minutes}</span>
            <span class="timer__label">Minutes</span>
          </div>
          <div class="timer__item">
            <span class="timer__number" id="seconds">{promoBanner.timer.seconds}</span>
            <span class="timer__label">Seconds</span>
          </div>
        </div>
        <button class="promo-banner__btn" id="shopNowBtn">
          <span>{promoBanner.buttonText}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d={promoBanner.buttonIconPath} />
          </svg>
        </button>
      </div>
      <div class="promo-banner__decoration">
        <div class="decoration__circle decoration__circle--1"></div>
        <div class="decoration__circle decoration__circle--2"></div>
        <div class="decoration__circle decoration__circle--3"></div>
      </div>
    </div>
  );

  return (
     <div class="category-section">
        <div class="categories">
            <h2 class="categories__title">Shop by Category</h2>
            <div class="categories__grid">
                {categories.map(renderCategoryCard)}
            </div>
        </div>

        {/* Promo Banner Section */}
        {renderPromoBanner()}
    </div>
  )
}

export default Categeory