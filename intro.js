(() => {
  const intro = document.querySelector('.site-intro');
  if (!intro) return;

  const dismiss = () => {
    intro.classList.add('site-intro--hidden');
    intro.addEventListener('transitionend', () => intro.remove(), { once: true });
  };

  window.setTimeout(dismiss, 3700);
})();