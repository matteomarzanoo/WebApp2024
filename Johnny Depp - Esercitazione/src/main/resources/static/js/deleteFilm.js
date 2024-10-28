// DELETE ROW ON DEMAND
document.getElementById("removeFilmButton").addEventListener("click", function() {
    document.getElementById("removeFilmForm").style.display = "block";
    document.getElementById("filmForm").style.display = "none";
});

function removeFilmByNumber(event) {
    event.preventDefault(); // Impedisce il submit del form

    const filmNumber = parseInt(document.getElementById("filmNumber").value);

    const rows =document.getElementById('filmTable').querySelectorAll('tr');

    if (filmNumber > 0 && filmNumber <= rows.length) {
        rows[filmNumber - 1].remove(); // Rimuove la riga corrispondente (indice base 0)
        document.getElementById("removeFilmForm").style.display = "none"; // Nasconde il form
        document.getElementById("removeFilmByNumberForm").reset(); // Resetta il campo del form
    } else {
        alert("Numero libro non valido!"); // Avviso per numero non valido
    }
}

document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row); // Elimina la riga
    });
});

function deleteRow(button)
{
    const row = button.parentNode.parentNode; // Trova la riga corrente
    row.parentNode.removeChild(row);
}
