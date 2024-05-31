'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const skills =[
  {
      "name": "ReactJS",
      "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
  },
  {
      "name": "ExpressJS",
      "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
  },
  {
      "name": "NodeJS",
      "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
  },
  {
      "name": "Redux",
      "icon": "https://img.icons8.com/color/48/000000/redux.png"
  },
  {
      "name": "Firebase",
      "icon": "https://img.icons8.com/color/48/000000/firebase.png"
  },
  {
      "name": "MaterialUI",
      "icon": "https://img.icons8.com/color/48/000000/material-ui.png"
  },
  {
      "name": "TailwindCSS",
      "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
  },
  {
      "name": "Bootstrap",
      "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
  },
  {
      "name": "HTML5",
      "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  {
      "name": "CSS3",
      "icon": "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
      "name": "JavaScript",
      "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
      "name": "Java",
      "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
  },
  {
      "name": "Python",
      "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
  },
  {
      "name": "C++",
      "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
  },
  {
      "name": "MongoDB",
      "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
  },
  {
      "name": "MySQL",
      "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
  },
  {
      "name": "Netlify",
      "icon": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
  },
  {
      "name": "Git VCS",
      "icon": "https://img.icons8.com/color/48/000000/git.png"
  },
  {
      "name": "GitHub",
      "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
  }   
];

const skillsGrid = document.querySelector('.skills-grid');

skills.forEach(skill => {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');

  const skillIcon = document.createElement('img');
  skillIcon.src = skill.icon;
  skillIcon.alt = skill.name;
  skillIcon.classList.add('skill-icon');

  const skillName = document.createElement('div');
  skillName.textContent = skill.name;
  skillName.classList.add('skill-name');

  skillItem.appendChild(skillIcon);
  skillItem.appendChild(skillName);

  skillsGrid.appendChild(skillItem);
});
