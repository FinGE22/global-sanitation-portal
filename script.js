 (function () {
  const carousel = document.getElementById('carousel');
  const slidesWrapper = document.getElementById('slidesWrapper');
  const slides = Array.from(slidesWrapper.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');
  const captionTitle = document.getElementById('captionTitle');
  const captionSub = document.getElementById('captionSub');
  const cards = document.querySelectorAll('.cards-container .card');

  if (!slides.length) return;

  let current = 0;
  let interval = 4000; // ms
  let timer = null;
  const total = slides.length;

  // create dots
  const dots = [];
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    d.dataset.index = i;
    d.setAttribute('aria-label', `Go to slide ${i+1}`);
    dotsContainer.appendChild(d);
    dots.push(d);
    d.addEventListener('click', () => goToSlide(i));
  }

  // update visual state
  function update() {
    slides.forEach((s, idx) => {
      if (idx === current) s.classList.add('active');
      else s.classList.remove('active');
    });

    dots.forEach((d, idx) => {
      if (idx === current) d.classList.add('active');
      else d.classList.remove('active');
    });

    // update caption from data attributes of current slide
    const active = slides[current];
    captionTitle.textContent = active.dataset.title || '';
    captionSub.textContent = active.dataset.sub || '';
  }

  function next() {
    current = (current + 1) % total;
    update();
  }

  function prev() {
    current = (current - 1 + total) % total;
    update();
  }

  function goToSlide(i) {
    if (i < 0) i = 0;
    if (i >= total) i = total - 1;
    current = i;
    update();
  }

  // autoplay
  function startTimer() {
    stopTimer();
    timer = setInterval(next, interval);
  }
  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // event listeners
  nextBtn.addEventListener('click', () => { next(); startTimer(); });
  prevBtn.addEventListener('click', () => { prev(); startTimer(); });

  // pause on hover/focus
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', startTimer);

  // keyboard navigation
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); startTimer(); }
    if (e.key === 'ArrowRight') { next(); startTimer(); }
  });

  // clicking cards jumps to mapped slide:
  // our HTML cards use data-target mapping: 0..N-1
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = Number(card.dataset.target);
      if (!Number.isNaN(idx)) {
        goToSlide(idx);
        startTimer();
      }
    });
  });

  // make slides clickable too (advance on click)
  slides.forEach((s, idx) => {
    s.addEventListener('click', () => {
      // clicking active slide goes next, clicking inactive goes to it
      if (idx === current) next();
      else goToSlide(idx);
      startTimer();
    });
  });

  // initial display & start autoplay
  update();
  startTimer();

  // expose for debugging (optional)
  window.myCarousel = { goToSlide, next, prev, startTimer, stopTimer };
})();
