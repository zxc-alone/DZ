const content = document.querySelector('.content');
const button = document.createElement('button');
button.textContent='Отправить';
content.appendChild(button);

button.addEventListener('click', (event)=> {
    event.target.textContent='Текст отправлен';
})
