const spanText = document.querySelector('.text')
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio officiis corrupti est quas consequuntur! Reiciendis, aliquid nihil provident quo ipsum et odit eum iusto rem, repellendus aliquam. Dolor, repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio officiis corrupti est quas consequuntur! Reiciendis, aliquid nihil provident quo ipsum et odit eum iusto rem, repellendus aliquam. Dolor, repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio officiis corrupti est quas consequuntur! Reiciendis, aliquid nihil provident quo ipsum et odit eum iusto rem, repellendus aliquam. Dolor, repellat?'
const spanCursor = document.querySelector('.cursor')

let indexText = 0

const addLetter = () => {
    spanText.textContent += txt[indexText]
    indexText++
    if (indexText === txt.length) {
        clearInterval(indexTyping)
    }
}

const indexTyping = setInterval(addLetter, 10)

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400)