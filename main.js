// Outline text appears on screen
const lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 200;
  },
  direction: "left",
  loop: true,
});

// Jumping letters animation
const textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 500,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

  var pathEls = document.querySelectorAll('path');
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 3000),
      delay: anime.random(0, 0),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      autoplay: true
    });
  }

  // Neon animated text
  const letterEls = document.querySelectorAll('.letterNeon');
  for (var i = 0; i < letterEls.length; i++) {
    var letterEl = letterEls[i];
    var offset = anime.setDashoffset(letterEl);
    letterEl.setAttribute('stroke-dashoffset', offset);
     anime({
      targets: letterEl,
      duration: anime.random(0, 1000),
      delay: anime.random(0, 300),
      opacity: [
        { value: 0, duration: anime.random(0, 300) },
      ],
      loop: true
    });
  }

  // Infinite loop animation, random colors
  const wrapperEl = document.querySelector('.loop-wrapper');
  const numberOfEls = 100;
  const duration = 5000;
  const delay = duration / numberOfEls;

  let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
  });

  function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
      begin: function() {
        anime({
          targets: el,
          backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
          rotate: [rotate + 'deg', rotate + 10 +'deg'],
          translateY: [translateY + '%', translateY + 10 + '%'],
          scale: [1, 1.25],
          easing: 'easeInOutSine',
          direction: 'alternate',
          duration: duration * .1
        });
      }
    });
    wrapperEl.appendChild(el);
  };

  for (let i = 0; i < numberOfEls; i++) createEl(i);