
const refs = {
    inputFontSize : document.querySelector('input#font-size-control'),
    span: document.querySelector('span#text'),
}

const changeFontSize = (event) => {
    const curFontSize = event.currentTarget.value;
    refs.span.style.fontSize = `${curFontSize}px`;
    //console.dir(refs.span);
};

refs.inputFontSize.addEventListener('input',changeFontSize);