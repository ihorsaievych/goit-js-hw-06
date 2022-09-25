function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let firstZero = '';
  if(newColor.length!==7){ 
    firstZero = '#'+'Zero000000'.slice(4,4+7-newColor.length)+newColor.slice(1);
  }
  else {
    firstZero = newColor;
  }
  return firstZero;
}

const refs = {
  boxes : document.querySelector('#boxes'),
  dataBoxes : document.querySelector('#controls'),
  inputAmount : document.querySelector('#controls input'), 
}

function createBoxes(amount) {
  let markup = '';
  for(let i = 0; i < amount; i++) {
    markup = markup + `<div style="width: ${30+i*10}px; height: ${30+i*10}px; background-color: ${getRandomHexColor()};"></div>`
  }
  refs.boxes.insertAdjacentHTML('beforeend', markup);
} 

const onBoxes = (event) => {
  if(event.target.type !== "button") {return};
  
  if (event.target.dataset.create!==undefined) {
    createBoxes(refs.inputAmount.valueAsNumber);
    return;
  }

  if (event.target.dataset.destroy!==undefined) {
    while (refs.boxes.childNodes.length > 0) {
      refs.boxes.firstChild.remove();
    }
    refs.inputAmount.value=0;
    return;
  }

};

refs.dataBoxes.addEventListener('click',onBoxes);