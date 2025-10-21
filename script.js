// Lightbox: set clicked image into modal
const lightboxModal = document.getElementById('lightboxModal');
if (lightboxModal) {
  lightboxModal.addEventListener('show.bs.modal', event => {
    const trigger = event.relatedTarget;
    const imgUrl = trigger?.getAttribute('data-img');
    const img = document.getElementById('lightboxImage');
    if (imgUrl && img) img.src = imgUrl;
  });
}

// Footer year
document.getElementById('year')?.append(new Date().getFullYear());