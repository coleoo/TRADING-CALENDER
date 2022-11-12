// GLOBAL VARIABLES
const saveButton = document.querySelector('#save-btn');

//NEW FEATURE ------------------------------------------------------------------------------------ */
// Create x amount of calender days
for (let i = 1; i < 30; i++) {

  let zero = 0;
  if (i < 10) {
    zero = 0;
  } else {
    zero = ""
  };


  // Create new calender day
  const newDay = document.createElement('div');
  newDay.className = "daybox";


  newDay.innerHTML =
    `<div>
  <h3 id="day">${zero}${i}</h3>
  <div class="plus-wrapper"><i id="plus-day-icon"class="fa-solid fa-plus"></i></div>
  </div>`;


  const gridContainer = document.getElementById('grid-container');
  gridContainer.appendChild(newDay);
}


//NEW FEATURE ------------------------------------------------------------------------------------ */

// Smiley faces color change
const smile = document.querySelector('#smile');
const meh = document.getElementById('meh');
const frown = document.getElementById('frown');



smileybox = document.querySelector('.smiley-box').querySelectorAll('i');
console.log(smileybox)

//             THIS ELEMENT IS THE ITEM
smileybox.forEach(element => {
  element.addEventListener('click', function () {
    smileybox.forEach(smileyboxelement => smileyboxelement.classList.remove('active'))
    element.classList.add('active');
  })
});

// LOOK into nodes when we console.log smileybox it gives us a nodelist which we use to solve this
// also watch and understand for each go on ytube


//NEW FEATURE ------------------------------------------------------------------------------------ */
// Daily tags carousel

const scrollBox = document.getElementById("scroller-wrapper");
const buttonRight = document.querySelector('.arrow-right');
const buttonLeft = document.querySelector('.arrow-left');

console.log(scrollBox);

buttonLeft.addEventListener('click', function () {
  scrollBox.scrollBy(-150, 0);
});
buttonRight.addEventListener('click', function scrollit() {
  scrollBox.scrollBy(150, 0);
});



//NEW FEATURE ------------------------------------------------------------------------------------ */
// Acess each calender day so we can popup on click

const popupContainer = document.querySelector('.popup-container');
const calenderDays = document.querySelectorAll('.plus-wrapper');
console.log(calenderDays);



calenderDays.forEach(element => element.addEventListener('click', function (event) {
  let userClickedThis = (event.target);
  popupContainer.style.display = "block"

  // Get values of popup to store in user saved days
  let profitInput = document.getElementById('pl').value;
  let amountOfTradesInput = document.getElementById('trades').value;

  console.log(profitInput);


  saveButton.addEventListener('click', function () {
    userClickedThis.innerHTML =
      `<div>
  <div class="plus-wrapper">
  <div id ="inner-day-content-box">
    <div id="line1">
      <h7>${profitInput}$</h7>
    </div>
    <div id="line2">
      <h3 style="font-size: 1..25rem;">${amountOfTradesInput} Trades</h3>
    </div>
    <div id="line3">
    <i id="smiley-day" class="fa-regular fa-face-smile"></i>
    </div>
  </div>
  </div>
  </div>`
  });
}));

// Exit popup
const exitPopup = document.getElementById("exit-btn");
exitPopup.addEventListener('click', function () {
  popupContainer.style.display = "none"
});

//NEW FEATURE ------------------------------------------------------------------------------------ */
// Change color from dark to light theme

const bigBoy = document.querySelector('.big-boy-container');
const rightContainer = document.querySelector('#right-container');
const rightBox = document.querySelector('#right-main-content-box');
const popupContain = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup-content-box');
const h3 = document.getElementsByTagName('h3');
const icons = document.querySelector('.big-boy-container').querySelectorAll('i');
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const h5 = document.getElementsByTagName('h5');
const p = document.getElementsByTagName('p');
const plusIcon = document.querySelectorAll('#plus-day-icon');

let lightModeBtn = document.getElementById('back');

lightModeBtn.addEventListener('click', function changeToLightMode() {
  for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = 'black';
  }
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.color = 'black';
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = 'black';
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'black';
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = 'black';
  }
  for (let i = 0; i < h5.length; i++) {
    h5[i].style.color = 'black';
  }


  bigBoy.style.background = 'white'
  rightContainer.style.background = '#d4d4d4'
  rightBox.style.background = 'white'
  popupContain.style.background = '#d4d4d4'
  popupBox.style.background = '#d4d4d4'
});
//NEW FEATURE ------------------------------------------------------------------------------------ */

// Change color from light to dark theme


let darkModeBtn = document.getElementById('next');

darkModeBtn.addEventListener('click', function changeToLightMode() {
  for (let i = 0; i < h3.length; i++) {
    h3[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < h5.length; i++) {
    h5[i].style.color = '#f1eff1';
  }
  for (let i = 0; i < plusIcon.length; i++) {
    plusIcon[i].style.color = "rgb(250, 235, 215,0.15)"
  }
  bigBoy.style.background = '#141516'
  rightContainer.style.background = '#292d2f'
  rightBox.style.background = '#141516'
  popupContain.style.background = '#292d2f'
  popupBox.style.background = '#292d2f'
});

// TRY STORING THE NEW CALENDER VALUES INTO AN 0BJECT AND THEN PARSE THOSE VALUES TO THE CALENDER DAY THAT THE USER CLICKS ON
// JUST SAVING THIS IDEA FOR TOMMORROW