class AppPrinter {
   constructor() {
      console.log("App instantiated");
   }

   prn(selector = "body p", data) {
      document.querySelector(selector).innerHTML = data;
   }

   prnAll(selector = "body p", data) {
      document
         .querySelectorAll(selector)
         .forEach((item) => (item.innerHTML = data));
   }
}

const $a = new AppPrinter();

const aP = (selector, data) => {
   $a.prnAll(selector, data);
};

//const App = new App('jujuj');
// Uncaught SyntaxError: Identifier 'App' has already been declared

const obj = {
   joska: "pista",
   ede: `ika ' Mika " Fika`,
};

aP("body p:first-child", JSON.stringify(obj));

const Cltest = class {
   constructor(qew) {
      console.log(qew);
   }
};

const kuka = new Cltest("kjh");

document.querySelector("body p:first-child").classList.add("new-class");

if (!document.querySelector("body p:first-child").hasAttribute("title")) {
   document.querySelector("body p:first-child").setAttribute("title", "bumbum");
}

let arrika = {
   motyo: "kuka",
   lotyo: "nuna",
};

const arr = (...a) => `<a href="#" ${a}>KUKU</a>`;

aP("body p:last-of-type", arr("qqqq", "kakaka", "kikiki"));

function names() {
   const argumentsArray = [...arguments]; // converts arguments to array
   argumentsArray.map((name) => console.log(`hi ${name}`));
}
names("samantha", "sam");

const namesa = (...args) => {
   const argumentsArray = [...args]; // converts arguments to array
   argumentsArray.map((name) => console.log(`hi ${name}`));
};
namesa("joska", "pistiké");
