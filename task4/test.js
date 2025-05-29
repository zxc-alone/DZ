const btn = document.querySelector('.btn');
const inp = document.querySelector(`input[type="text"]`);

btn.addEventListener('click', ()=> {
    if (inp.value.length == 0){
        if (!document.querySelector('h2')){
            const h2 = document.createElement('h2');
            h2.textContent = 'Вы не заполнили поле ввода';
            h2.style.color = 'red';
            document.body.appendChild(h2);
        }
    }
    else {
        if (document.querySelector('h2')){
            document.querySelector('h2').remove();
        }
    }
})
