const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = rangeInput.value + 'px';

const textResizing = () => {
  onText.style.fontSize = `${rangeInput.value}px`;
};

rangeInput.addEventListener('input', textResizing);