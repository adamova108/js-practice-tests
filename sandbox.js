class AppPrinter {

    constructor() {
        console.log('App instantiated');
    }

    prn(data) {
        document.querySelector('body p').innerHTML = data;
    }

    prnAll(data) {
        document.querySelectorAll('body p').forEach(item => item.innerHTML = data);
    }

}

const $a = new AppPrinter;

const aP = (data) => {
    $a.prnAll(data);
}

//const App = new App('jujuj');
// Uncaught SyntaxError: Identifier 'App' has already been declared


const obj = {
    joska: 'pista',
    ede: `ika ' Mika " Fika`
}

aP(JSON.stringify(obj));

const Cltest = class {
    constructor(qew) {
        console.log(qew);
    }
}

const kuka = new Cltest('kjh');
