<script>
  
    // First carousel (Featured Collection)
    (function(){
      const track = document.getElementById('track');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      const cards = Array.from(track.children);
      let index = 0;
      let cardsPerView = 3;

      function updateCardsPerView() {
        if (window.innerWidth <= 680) {
          cardsPerView = 1;
        } else if (window.innerWidth <= 1000) {
          cardsPerView = 2;
        } else {
          cardsPerView = 3;
        }
      }

      function slide(){
        updateCardsPerView();
        
        const gap = 28;
        const cardWidth = 320; // Fixed card width as per your requirement
        
        const translateX = -index * (cardWidth + gap);
        track.style.transform = `translateX(${translateX}px)`;

        // Update buttons
        prevBtn.classList.toggle('disabled', index <= 0);
        nextBtn.classList.toggle('disabled', index >= cards.length - cardsPerView);
      }

      nextBtn.addEventListener('click', () => {
        updateCardsPerView();
        if(index < cards.length - cardsPerView){
          index++;
          slide();
        }
      });

      prevBtn.addEventListener('click', () => {
        if(index > 0){
          index--;
          slide();
        }
      });

      // Handle responsive adjustments
      function handleResize(){
        updateCardsPerView();
        slide();
      }

      window.addEventListener('load', handleResize);
      window.addEventListener('resize', handleResize);

      // init immediately
      updateCardsPerView();
      slide();

    })();

    // Second carousel (Best Sellers)
    (function(){
      const track = document.getElementById('track2');
      const prevBtn = document.getElementById('prev2');
      const nextBtn = document.getElementById('next2');
      const cards = Array.from(track.children);
      let index = 0;
      let cardsPerView = 3;

      function updateCardsPerView() {
        if (window.innerWidth <= 680) {
          cardsPerView = 1;
        } else if (window.innerWidth <= 1000) {
          cardsPerView = 2;
        } else {
          cardsPerView = 3;
        }
      }

      function slide(){
        updateCardsPerView();
        
        const gap = 28;
        const cardWidth = 320; // Fixed card width as per your requirement
        
        const translateX = -index * (cardWidth + gap);
        track.style.transform = `translateX(${translateX}px)`;

        // Update buttons
        prevBtn.classList.toggle('disabled', index <= 0);
        nextBtn.classList.toggle('disabled', index >= cards.length - cardsPerView);
      }

      nextBtn.addEventListener('click', () => {
        updateCardsPerView();
        if(index < cards.length - cardsPerView){
          index++;
          slide();
        }
      });

      prevBtn.addEventListener('click', () => {
        if(index > 0){
          index--;
          slide();
        }
      });

      // Handle responsive adjustments
      function handleResize(){
        updateCardsPerView();
        slide();
      }

      window.addEventListener('load', handleResize);
      window.addEventListener('resize', handleResize);

      // init immediately
      updateCardsPerView();
      slide();

    })();

// Second carousel (Best Sellers)
(function(){
  const track = document.getElementById('track2');
  const prevBtn = document.getElementById('prev2');
  const nextBtn = document.getElementById('next2');
  const cards = Array.from(track.children);
  let centerIndex = 0; // start index
  let cardsPerView = 3;

  function updateCardsPerView() {
    if (window.innerWidth <= 680) {
      cardsPerView = 1;
    } else if (window.innerWidth <= 1000) {
      cardsPerView = 2;
    } else {
      cardsPerView = 3;
    }
  }

  function slide(){
    updateCardsPerView();

    // clamp 0 to last index
    centerIndex = Math.max(0, Math.min(centerIndex, cards.length - 1));

    // active card ko center karo
    const containerWidth = track.parentElement.offsetWidth;
    const activeCard = cards[centerIndex];
    const activeCardOffset = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const translateX = containerWidth / 2 - activeCardOffset;

    track.style.transform = `translateX(${translateX}px)`;

    // active card update
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if(i === centerIndex){
        card.classList.add("active");
      }
    });

    // buttons disable/enable
    prevBtn.classList.toggle('disabled', centerIndex === 0);
    nextBtn.classList.toggle('disabled', centerIndex === cards.length - 1);
  }

  nextBtn.addEventListener('click', () => {
    if(centerIndex < cards.length - 1){
      centerIndex++;
      slide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if(centerIndex > 0){
      centerIndex--;
      slide();
    }
  });

  window.addEventListener('resize', () => {
    // reset to middle card when resize
    updateCardsPerView();
    centerIndex = Math.floor(cardsPerView / 2);
    slide();
  });

  window.addEventListener('load', () => {
    updateCardsPerView();
    centerIndex = Math.floor(cardsPerView / 2); // middle card default
    slide();
  });

})();


// ✅ toggle + and – automatically
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
    setTimeout(() => {
      document.querySelectorAll('.accordion-button').forEach(btn => {
        const icon = btn.querySelector('.toggle-icon');
        if (btn.classList.contains('collapsed')) {
          icon.textContent = "+";
        } else {
          icon.textContent = "–";
        }
      });
    }, 150);
  });
});


 </script>