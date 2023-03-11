const btn = document.querySelector(".btn")
const display = document.querySelector(".counter-text")

const updateDisplay = () => {
    const currentCount = parseInt(display.innerText.trim().toString())
    display.innerText = currentCount + 1;
}

btn.addEventListener("click", updateDisplay)