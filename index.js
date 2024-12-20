const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('name-input');
const groupInput = document.getElementById('group-input');
const dataTable = document.getElementById('data-table');
const error = document.getElementById('error');
const clearAllBtn = document.getElementById('clear-all-btn');
const removeBtns = document.querySelectorAll('.remove-row-btn');

//обработчик событий для кнопок удаления строки из таблицы
removeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });
});

//обработчик событий для кнопки добавления строки в таблицу
addBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const group = groupInput.value.trim();

    if (name === '' || group === '') {
        error.style.opacity = '1';
        return;
    } else {
        error.style.opacity = '0';
    }

    const newRow = dataTable.insertRow();
    const nameCell = newRow.insertCell(0);
    const groupCell = newRow.insertCell(1);
    const removeRowCell = newRow.insertCell(2);

    nameCell.textContent = name;
    groupCell.textContent = group;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-row-btn');
    removeBtn.textContent = 'X';
    removeRowCell.appendChild(removeBtn);

    nameInput.value = '';
    groupInput.value = '';
});

//обработчик событий для кнопки удаления всех строк из таблицы
clearAllBtn.addEventListener('click', () => {
    const tbody = dataTable.querySelector('tbody');
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
});