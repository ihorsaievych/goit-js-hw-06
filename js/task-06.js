//validity
const refs = {
    input : document.querySelector('input'),
};

const validationInput = (event) => {
    const curValue = event.currentTarget.value;
    const minLength = event.currentTarget.dataset.length;
    console.dir(event.currentTarget);

    refs.input.validity.valid=(curValue.length < minLength);
    
};

refs.input.addEventListener('blur',validationInput)