document.getElementById("addFilmButton").addEventListener("click", function() {
    document.getElementById("filmForm").style.display = "block";
    document.getElementById("removeFilmForm").style.display = "none";
});

document.getElementById("newFilmForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const publisher = document.getElementById("producer").value;

    const tableBody = document.getElementById("filmTable").getElementsByTagName('tbody')[0];

    addNewRowV1(tableBody , title , year , publisher);

    document.getElementById("filmForm").style.display = "none";
    document.getElementById("newFilmForm").reset();
});

function addNewRowV1(tableBody, title, year, producer){
    const newRowHTML = `
        <tr>
            <td>${title}</td>
            <td>${year}</td>
            <td>${producer}</td>
            <td><button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;
    tableBody.innerHTML += newRowHTML;
}


function addNewRowV2(tableBody, title, year, producer){
    const newRow = tableBody.insertRow();

    const titleCell = newRow.insertCell(0);    // Cella per il titolo
    const yearCell = newRow.insertCell(1);     // Cella per l'anno
    const producerCell = newRow.insertCell(2); // Cella per la casa editrice
    const deleteButtonCell = newRow.insertCell(3); // Cella per il bottone elimina

    titleCell.textContent = title;
    yearCell.innerHTML = `<span class="badge bg-primary">${year}</span>`;
    producerCell.textContent = producer;
    deleteButtonCell.innerHTML =`<button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button>`

}
