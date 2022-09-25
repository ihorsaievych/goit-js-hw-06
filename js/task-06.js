
const refs = {
    input : document.querySelector('input'),
};

const validationInput = (event) => {
    const curValue = event.currentTarget.value;
    const minLength = event.currentTarget.dataset.length;

    if(curValue.length < minLength) {
        refs.input.classList.add('invalid'); 
        refs.input.classList.remove('valid'); 
        return;  
    }
    if(curValue.length >= minLength) {
        refs.input.classList.add('valid'); 
        refs.input.classList.remove('invalid'); 
        return;  
    }

    // refs.input.minLength=minLength;
    // refs.input.checkValidity();
    
};

refs.input.addEventListener('blur',validationInput)