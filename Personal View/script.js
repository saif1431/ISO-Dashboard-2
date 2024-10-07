document.addEventListener('DOMContentLoaded', function () {
    // Get all cards
    const cards = document.querySelectorAll('.card1, .card2');

    // Add click event to each card
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const nextItem = card.getAttribute('data-next'); // Get the next section's data-item value

            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('activ');
            });

            // Show the next section
            const nextSection = document.querySelector(`.content-section[data-item="${nextItem}"]`);
            if (nextSection) {
                nextSection.classList.add('activ');
            }
        });
    });
});


const settingIcon  = document.querySelector('#settingIcon');
const seetingDropDown = document.querySelector('.seetingDropDown');

settingIcon.addEventListener('click', () => {
  // Use getComputedStyle to get the current display value
  if (getComputedStyle(seetingDropDown).display === 'none') {
    seetingDropDown.style.display = 'block';
  } else {
    seetingDropDown.style.display = 'none';
  }
});



let swiper2 = new Swiper('.swiper2', {
  spaceBetween: 80,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: 'horizontal',
  mousewheel: true,
  slidePreView: 1,
})
