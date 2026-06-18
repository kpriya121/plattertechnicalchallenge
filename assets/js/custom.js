

 const swiper = new Swiper('.best-sellers-swiper', {
      slidesPerView: 5,
      spaceBetween: 16,
      grabCursor: true,
      slidesOffsetAfter: 0,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
      },
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 14 },
        1024: { slidesPerView: 4, spaceBetween: 16 },
        1280: { slidesPerView: 4.1, spaceBetween: 16 },
      },
    });


  
    document.querySelectorAll('.md\\:hidden .product-card').forEach((el, i) => {
      if (i >= 4) el.style.display = 'none';
    });

    let isOpen = false;
    function toggleShowMore() {
      isOpen = !isOpen;
      document.querySelectorAll('.md\\:hidden .product-card').forEach((el, i) => {
        if (i >= 4) el.style.display = isOpen ? '' : 'none';
      });
      document.getElementById('show-more-label').textContent = isOpen ? 'Show Less' : 'Show More';
      document.getElementById('show-more-icon').style.transform = isOpen ? 'rotate(180deg)' : '';
    }



    
  
    const track = document.querySelector('.products-track');
    const thumb = document.getElementById('scroll-thumb');

    if (track && thumb) {
      track.addEventListener('scroll', () => {
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const thumbWidth = 20; // percent
        const offset = progress * (100 - thumbWidth);
        thumb.style.left = offset + '%';
      });
    }
