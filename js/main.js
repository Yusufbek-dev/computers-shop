let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".min-menu");
let infoHead = document.querySelector("#info-head");
let infoHeadIcon = document.querySelector(".headInfo-icon");
let infoList = document.querySelector(".info-list");
let serviceHead = document.querySelector("#service-head");
let serviceHeadIcon = document.querySelector(".headSer-icon");
let serviceList = document.querySelector(".service-list");

let closeBtn = document.querySelector(".close-btn");
let closeBg = document.querySelector(".sm-bg")

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  closeBg.classList.toggle("active");
});
closeBg.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  closeBg.classList.remove("active");
});
closeBtn.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  closeBg.classList.remove("active");
});

infoHead.addEventListener("click", ()=> {
  infoHeadIcon.classList.toggle("active");
  infoList.classList.toggle("active");

})
serviceHead.addEventListener("click", ()=> {
  serviceHeadIcon.classList.toggle("active");
  serviceList.classList.toggle("active");

})
document.querySelectorAll(".info-list li").forEach(item => {
  item.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    closeBg.classList.remove("active");
  });
});
document.querySelectorAll(".service-list a").forEach(item => {
  item.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// stuff effects

let showBtn = document.querySelector(".sm-view-btn");
let showList = document.querySelector(".stuff-list.first");

showBtn.addEventListener("click", ()=> {
  showList.classList.toggle("active");
})