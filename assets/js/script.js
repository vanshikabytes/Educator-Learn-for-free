'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});

/* web count */

      const countEl = document.getElementById("count");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/laptop/mouse/?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }



