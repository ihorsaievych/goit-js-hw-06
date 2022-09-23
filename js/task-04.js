let counterValue = 0;
const refs = {
    buttonInc: document.querySelector('button[data-action="increment"]'),
    buttonDec: document.querySelector('button[data-action="decrement"]'),
    value : document.querySelector('#value'),
}

const refresh = () => {
    refs.value.firstChild.textContent = counterValue;
};

function counterCalc(event) {
    const action = event.currentTarget.dataset.action;
    //console.log(action);
    switch (action) {
        case "decrement": counterValue -= 1;
            break;
        case "increment": counterValue += 1;
            break;
    }
    //console.log(counterValue);
    refresh();
}

refs.buttonInc.addEventListener('click',counterCalc);
refs.buttonDec.addEventListener('click',counterCalc);