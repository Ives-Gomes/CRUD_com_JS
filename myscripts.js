function clique() {
    var table = document.getElementById("tabela");
    var row = table.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();

    cell1.innerHTML = document.getElementById('primeiro').value;
    cell2.innerHTML = document.getElementById('segundo').value;
    cell3.innerHTML = document.getElementById('terceiro').value;
    cell4.innerHTML = document.getElementById('quarto').value;
    cell5.innerHTML = document.getElementById('quinto').value;
    cell6.innerHTML = `<a onClick="#">Editar</a><br>
                        <a onClick="#">Deletar</a>`;

    document.getElementById('primeiro').value = '';
    document.getElementById('segundo').value = '';
    document.getElementById('terceiro').value = '';
    document.getElementById('quarto').value = '';
    document.getElementById('quinto').value = '';

    
}