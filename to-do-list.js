const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myTask = input.value;
    input.value = '';

    const listTask = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.style.color = 'green';
    listText.style.fontWeight = 'bold';

    listTask.appendChild(listText);
    listText.textContent = myTask;
    listTask.appendChild(listBtn);
    listBtn.textContent = 'delete';
    list.appendChild(listTask);

    listBtn.addEventListener('click', () => {
        list.removeChild(listTask);
    });

    input.focus();

});


