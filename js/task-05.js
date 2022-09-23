const refs = {
    input : document.querySelector('input#name-input'),
    span : document.querySelector('span#name-output'),
}

const typeSpan = (event) => {
    const valueInput = event.currentTarget.value; 
    //console.dir(event.currentTarget); 
    if(valueInput==='') {
        refs.span.textContent='Anonymous';
    }
    else {
        refs.span.textContent=valueInput;
    };
};

refs.input.addEventListener('input',typeSpan)