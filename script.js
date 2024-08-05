window.addEventListener("load", function () {
  setTimeout(loading, 1500);
  setTimeout(loaded, 2000);

  function loading() {
    var preload = document.getElementById("preloader");
    preload.style.opacity = "0";
    preload.style.visibility = "hidden";
  }

  function loaded() {
    var load = document.getElementById("loader");
    load.style.opacity = "0";
    load.style.visibility = "hidden";
  }
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const APIKey = "AIzaSyC0GLaGvjYVVOiJL5SxuhPx8CqK5ZJwI7c";
const Userid = "UCJZHe7U8WOxIBM_Gh0JOdrA";
const subscriberCount = document.getElementById("subscriberCount");

var subCount;
var locked = document.querySelectorAll(".active");

var oneK = document.getElementById("one");
var tenK = document.getElementById("two");
var oneHK = document.getElementById("three");
var oneM = document.getElementById("four");
var tenM = document.getElementById("five");
var oneHM = document.getElementById("six");

let getdata = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      subCount = data["items"][0].statistics.subscriberCount;
      subscriberCount.innerHTML = subCount.toLocaleString();

      unlockPB();
    });
};

function unlockPB() {
  if (subCount >= 100000000) {
    oneK.classList.remove("active");
    tenK.classList.remove("active");
    oneHK.classList.remove("active");
    oneM.classList.remove("active");
    tenM.classList.remove("active");
    oneHM.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
    tenK.removeChild(tenK.lastElementChild);
    oneHK.removeChild(oneHK.lastElementChild);
    oneM.removeChild(oneM.lastElementChild);
    tenM.removeChild(tenM.lastElementChild);
    oneHM.removeChild(oneHM.lastElementChild);
  } else if (subCount >= 10000000) {
    oneK.classList.remove("active");
    tenK.classList.remove("active");
    oneHK.classList.remove("active");
    oneM.classList.remove("active");
    tenM.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
    tenK.removeChild(tenK.lastElementChild);
    oneHK.removeChild(oneHK.lastElementChild);
    oneM.removeChild(oneM.lastElementChild);
    tenM.removeChild(tenM.lastElementChild);
  } else if (subCount >= 1000000) {
    oneK.classList.remove("active");
    tenK.classList.remove("active");
    oneHK.classList.remove("active");
    oneM.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
    tenK.removeChild(tenK.lastElementChild);
    oneHK.removeChild(oneHK.lastElementChild);
    oneM.removeChild(oneM.lastElementChild);
  } else if (subCount >= 100000) {
    oneK.classList.remove("active");
    tenK.classList.remove("active");
    oneHK.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
    tenK.removeChild(tenK.lastElementChild);
    oneHK.removeChild(oneHK.lastElementChild);
  } else if (subCount >= 10000) {
    oneK.classList.remove("active");
    tenK.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
    tenK.removeChild(tenK.lastElementChild);
  } else if (subCount >= 1000) {
    oneK.classList.remove("active");

    oneK.removeChild(oneK.lastElementChild);
  } else if (subCount < 1000) {
  }
}

console.log(subCount);

setTimeout(function () {
  getdata();
}, 1000);
