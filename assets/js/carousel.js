function carousel() {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 80,
    peek: { before: 150, after: 150 },
    autoplay: 2000 | true,
  }).mount()
}

document.addEventListener('DOMContentLoaded', () => {
  carousel();
})