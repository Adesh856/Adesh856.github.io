let i = 0;
let txt = "Full Stack Web Developer";
let speed = 150;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    const demo1 = document.getElementById("demo1");
    if (demo1) {
      demo1.innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    const demo1 = document.getElementById("demo1");
    if (demo1) {
      demo1.innerHTML = "";
    }
    setTimeout(typeWriter, speed);
  }
}

var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    if (myNav) {
      myNav.classList.add("nav-colored");
    }
    if (myNav2) {
      myNav2.classList.add("nav-colored");
    }
  } else {
    if (myNav) {
      myNav.classList.remove("nav-colored");
    }
    if (myNav2) {
      myNav2.classList.remove("nav-colored");
    }
  }
};

GitHubCalendar(".calendar", "Adesh856", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)
let resume3 = document.getElementById("resume-button-3").addEventListener("click", NewTab)
function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1ylfMPKwZh9Wnaix1zhw_Yc6GDUmmXP64/view?usp=sharing"
  );
}

function openNav() {
  const mySidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (mySidebar) {
    mySidebar.style.width = "250px";
  }
  if (main) {
    main.style.display = "none";
  }
}

function closeNav() {
  const mySidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (mySidebar) {
    mySidebar.style.width = "0";
  }
  if (main) {
    main.style.display = "block";
  }
}
