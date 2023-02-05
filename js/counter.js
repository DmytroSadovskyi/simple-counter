const counter = document.querySelector('.counter');
const decrementBtn = document.querySelector('[data-decrement]');
const incrementBtn = document.querySelector('[data-increment]');
const resetBtn = document.querySelector('[data-reset]');

let counterValue = 0;

const onDecrementButtonClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
    if (counterValue < 0) {
     counter.style.color = '#e71f05'
}

}

const onIncrementButtonClick = () => {
    counterValue += 1;
    counter.textContent = counterValue;

    if (counterValue > 0) {
        counter.style.color = '#4ee705'
    }
  
}

const onResetButtonClick = () => {
    counterValue = 0;
    counter.textContent = 0;
    counter.style.color = 'black'
}


decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);
resetBtn.addEventListener('click', onResetButtonClick);