// Typing Effect
const text = "Welcome to Hack & Code";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// Scroll function
function scrollToSection() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

// Particles Background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00ffff" },
    line_linked: {
      enable: true,
      color: "#00ffff"
    }
  }
});
