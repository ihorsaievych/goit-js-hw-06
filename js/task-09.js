function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColor : document.querySelector('.change-color'),
  body : document.body,
  span : document.querySelector('.color'),
}

const onChangeColor = (event) => {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${newColor}`;
  refs.span.textContent = `${newColor}`;
};

refs.buttonChangeColor.addEventListener('click',onChangeColor);