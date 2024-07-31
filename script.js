function addMovie() {
    const movieNameInput = document.getElementById('movieName');
    const movieName = movieNameInput.value.trim();

    if (movieName) {
        const tableBody = document.getElementById('movieTableBody');
        const newRow = document.createElement('tr');

        const movieCell = document.createElement('td');
        movieCell.textContent = movieName;
        movieCell.classList.add('col-10');
        newRow.appendChild(movieCell);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger form-control';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            newRow.remove();
        };
        deleteCell.appendChild(deleteButton);
        deleteCell.classList.add('col-1');
        newRow.appendChild(deleteCell);

        tableBody.appendChild(newRow);

        movieNameInput.value = '';
    }
}