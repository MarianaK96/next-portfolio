import anime from "animejs/lib/anime.es.js";

export const TextMaskedUpwards = (selector, duration, delay = 0, direction) => {
  var textWrapper = document.querySelector(`#${selector}`);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: `#${selector} .letter`,
    translateY: direction === "out" ? [0, 125] : [125, 0],
    translateZ: 0,
    easing: direction === "out" ? "easeInOutCubic" : "easeOutExpo",
    duration: duration,
    delay: (el, i) => delay + 20 * i,
  });
};

export const TextMaskedUpwardsMultiWord = (
  selector,
  duration,
  delay = 0,
  direction
) => {
  const textWrapper = document.querySelector(`#${selector}`);
  const textWords = textWrapper.textContent.split(" ");
  let formattedWords = textWords.map(
    (word) =>
      "<div>&nbsp;" +
      word.replace(/\S/g, "<span class='letter'>$&</span>") +
      "</div>"
  );
  let removeComma = formattedWords.join("");
  textWrapper.innerHTML = removeComma;

  anime.timeline().add({
    targets: `#${selector} div .letter`,
    translateY: direction === "out" ? [0, 200] : [200, 0],
    translateZ: 0,
    easing: direction === "out" ? "easeInOutCubic" : "easeOutExpo",
    duration: duration,
    delay: (el, i) => delay + 20 * i,
  });
};

const splitPreservingSpaces = (string) => {
  string = string.split(" ");
  var stringArray = new Array();
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (i != string.length - 1) {
      stringArray.push(" ");
    }
  }
  return stringArray;
};

export const TextUpMultiWord = (selector, duration, delay = 0, direction) => {
  const textWrapper = document.querySelector(`#${selector}`);
  const textWords = splitPreservingSpaces(textWrapper.textContent);
  // console.log('text words ::: ', textWords)
  let formattedWords = textWords.map(
    (word) =>
      "<div>" + word.replace(/\S/g, "<div class='letter'>$&</div>") + "</div>"
  );
  let removeComma = formattedWords.join();
  // console.log('formattedWords.join() ', formattedWords)
  textWrapper.innerHTML = formattedWords.join("");

  anime.timeline().add({
    targets: `#${selector} div .letter`,
    translateY: direction === "out" ? [0, 200] : [200, 0],
    translateZ: 0,
    // scaleX: 1.5,
    easing: direction === "out" ? "easeInOutCubic" : "easeOutExpo",
    duration: duration,
    delay: delay,
  });
  // .add({
  //     targets: `#${selector} div .letter`,
  //     scaleX: 1,
  // }, `-=${duration - 350}`)
};

export const LoopOverList = (selector, duration = 500, delay = 0) => {
  var textWrapper = document.querySelector(`#${selector} li a`);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: `#${selector} .letter`,
    translateY: [125, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: duration,
    delay: (el, i) => delay + 20 * i,
  });
};

export const TextLineFadeInUpwards = (
  selector,
  duration,
  delay = 0,
  direction
) => {
  anime.timeline().add({
    targets: `#${selector} li`,
    translateY: direction === "out" ? [0, 125] : [125, 0],
    opacity: direction === "out" ? [1, 0] : [0, 1],
    translateZ: 0,
    easing: direction === "out" ? "easeInOutCubic" : "easeOutExpo",
    duration: duration,
    delay: anime.stagger(delay),
  });
};
