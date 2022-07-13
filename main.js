// TODO :  ==========mode day-night ===================
const navModeBtn = document.querySelector("#input-mode");
const navModeday = document.querySelector(".icon-day");
const navModeNight = document.querySelector(".icon-night");
const maindiv = document.querySelector("body");
const navigasi = document.querySelector(".navigasi");
const profesion = document.querySelector(".profesion");

navModeBtn.addEventListener("click", () => {
  navModeday.classList.toggle("d-none");
  navModeNight.classList.toggle("d-none");
  maindiv.classList.toggle("main_dark");
  navigasi.classList.toggle("nav-dark");
  profesion.classList.toggle("yelo");
});

// TODO :  ============ phone navbar ===================
const navMenuBtn = document.querySelector("#input-menu");
const OpenMenu = document.querySelector(".icon-on");
const CloseMenu = document.querySelector(".icon-off");
const itemnav = document.querySelector(".setting ul");

navMenuBtn.addEventListener("click", () => {
  OpenMenu.classList.toggle("d-none");
  CloseMenu.classList.toggle("d-none");
  itemnav.classList.toggle("slide");
});

// TODO : ============= card flip   ====================
function flip() {
  document.querySelector("#card1").classList.toggle("flip");
}
function flip2() {
  document.querySelector("#card2").classList.toggle("flip");
}
function flip3() {
  document.querySelector("#card3").classList.toggle("flip");
}

// TODO : ============== nav bottom ===================
const section = document.querySelectorAll(".main section[id]");

function naveffect() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
window.addEventListener("scroll", naveffect);

function scroll() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector("#" + sectionId + " div").classList.remove("d-none-anim");
      document.querySelector("#" + sectionId + " div").classList.remove("d-none");
    } else {
      document.querySelector("#" + sectionId + " div").classList.add("d-none-anim");
      const opcsection = document.querySelector("#" + sectionId + " .d-none-anim");
      const opacity = getComputedStyle(opcsection).opacity;

      if (opacity == 0) {
        document.querySelector("#" + sectionId + " div").classList.add("d-none");
      }
    }
  });
}
window.addEventListener("scroll", scroll);

// TODO : ======= loader
var loader = document.getElementById("load");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// TODO: try img ===========
const tryImg = document.querySelector(".feature_img_edit");
function try_close() {
  tryImg.classList.add("d-none");
}
function trySummon() {
  tryImg.classList.remove("d-none");
}

// TODO: =========== form contact ==========
const scriptURL = "https://script.google.com/macros/s/AKfycbzTV1l-7oiP8SQoufbTSxoPKMF5Xi7klxNlZ6NW7_LL9AY9WD8jj2CUQrM0BVMZ6qujxg/exec";
const form = document.forms["submit-to-google-sheet"];
const progres = document.querySelector('.notive-processing');

const kirim = document.querySelector('.button-submit')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // click submit
  form.classList.add('d-none')
  kirim.classList.add('d-none')
  progres.classList.remove('d-none')
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)
      progres.classList.add('d-none')
      var lert = alert('succes....');
      
      if (lert == undefined) {
        form.classList.remove('d-none');
        kirim.classList.remove("d-none");
        form.reset();
      }
      
    } 
      
      
  )
    .catch((error) => {
      console.error("Error!", error.message)
      progres.classList.add('d-none')
      progres.classList.add('d-none')
      var lert = alert('failed....');
      
      if (lert == undefined) {
        form.classList.remove('d-none');
        form.reset();
        kirim.classList.remove('d-none')
      }
    });
});
