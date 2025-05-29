const blockDiv = document.querySelector('div.block');
const newDiv = document.createElement('div');
newDiv.className= 'item';
newDiv.textContent='Элемент внутри';

newDiv.style.color='blue';
newDiv.style.border='solid black';
newDiv.style.backgroundColor='#f8f8f8';
newDiv.style.padding='16px';

newDiv.setAttribute('class', 'item_1');

blockDiv.appendChild(newDiv);
