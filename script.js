const keysDictonaryEn = {
  32: " ",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
};

const keysDictonaryRu = {
  32: " ",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  65: "ф",
  66: "и",
  67: "с",
  68: "в",
  69: "у",
  70: "а",
  71: "п",
  72: "р",
  73: "ш",
  74: "о",
  75: "л",
  76: "д",
  77: "ь",
  78: "т",
  79: "щ",
  80: "з",
  81: "й",
  82: "к",
  83: "ы",
  84: "е",
  85: "г",
  86: "м",
  87: "ц",
  88: "ч",
  89: "н",
  90: "я",
  91: "Meta",
  186: "ж",
  187: "=",
  188: "б",
  189: "-",
  190: "ю",
  191: "/",
  219: "х",
  220: "ё",
  221: "]",
  222: "э",
};

const specialKeysDictonary = {
  8: "Backspace",
  13: "Enter",
  9: "Tab",
  16: "Shift",
  20: "Capslock",
  37: "◄",
  38: "▲",
  39: "►",
  40: "▼",
  17: "Ctrl",
  18: "Alt"
};

const input = document.createElement("input");

const createInputContainer = () => {
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";
  inputContainer.appendChild(input);
  return inputContainer;
};

const inputContainer = createInputContainer();
const body = document.getElementsByTagName("body")[0];
body.appendChild(inputContainer);

const createButton = (keyCode) => {
  const keyRu =
    keysDictonaryRu[keyCode] ||
    specialKeysDictonary[keyCode] ||
    String.fromCharCode(keyCode);
  const keyEn =
    keysDictonaryEn[keyCode] ||
    specialKeysDictonary[keyCode] ||
    String.fromCharCode(keyCode);

  const button = document.createElement("button");
  const buttonInnerTextEn = document.createElement("span");
  buttonInnerTextEn.className = "textEn";
  const buttonInnerTextRu = document.createElement("span");
  buttonInnerTextRu.className = "textRu";

  button.className = "button";

  buttonInnerTextRu.innerText = keyRu;
  buttonInnerTextEn.innerText = keyEn;

  button.appendChild(buttonInnerTextEn);
  button.appendChild(buttonInnerTextRu);
  button.addEventListener("click", () => {
    if (body.classList.contains("ru")) {
      eventListener({ key: keyRu, keyCode: keyCode });
    } else {
      eventListener({ key: keyEn, keyCode: keyCode });
    }
  });
  return button;
};

const createRow = (className) => {
  const row = document.createElement("div");
  row.className = className;
  return row;
};

const row1 = createRow("first-keybord-row");
const row2 = createRow("two-keybord-row");
const row3 = createRow("three-keybord-row");
const row4 = createRow("four-keybord-row");
const row5 = createRow("five-keybord-row");
const rows = [row1, row2, row3, row4, row5];

const keysArrRow1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8];
const keysArrRow2 = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92];
const keysArrRow3 = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 13];
const keysArrRow4 = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16];
const keysArrRow5 = [17, 18, 32, 17, 18, 37, 40, 39];

const keyboardRow1 = keysArrRow1.map((value) => createButton(value)); // [button, button, button]
const keyboardRow2 = keysArrRow2.map((value) => createButton(value)); // [button, button, button]
const keyboardRow3 = keysArrRow3.map((value) => createButton(value)); // [button, button, button]
const keyboardRow4 = keysArrRow4.map((value) => createButton(value)); // [button, button, button]
const keyboardRow5 = keysArrRow5.map((value) => createButton(value)); // [button, button, button]
// keyboard.forEach((button) => row5.appendChild(button));
// body.appendChild(row5);

const keyboard = [
  keyboardRow1,
  keyboardRow2,
  keyboardRow3,
  keyboardRow4,
  keyboardRow5,
];

keyboard.forEach((keyboardRow, index) => {
  keyboardRow.forEach((button) => rows[index].appendChild(button));
  body.appendChild(rows[index]);
});

const eventListener = (event) => {
  console.log("e-turbo", event);

  if (event.keyCode === 8) {
    input.value = input.value.slice(0, -1);
    return;
  }
  if (event.keyCode === 9) {
    input.value = input.value + " " + " " + " ";
    return;
  }
  if (event.key === "Ctrl"  || event.key === "Alt" ||  event.key === "Shift"  || event.key === "Tab" || event.key === "Capslock" ||  event.key=== "◄",
 "▲" ||  event.key===  "►", event.key=== "▼") {
    return;
  }
  input.value = input.value + event.key;
};

body.addEventListener("keydown", eventListener);

// Language switch

let language = "en";
body.className = language;
document.addEventListener("keydown", (e) => {
  console.log("ctrlKey", e.ctrlKey);
  console.log("altKey", e.altKey);

  if (e.ctrlKey && e.altKey) {
    language = language === "ru" ? "en" : "ru";
    body.className = language;
  }
});
