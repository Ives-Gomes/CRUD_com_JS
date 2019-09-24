function clique() {
    var primeiro = document.getElementById('primeiro').value;
    var segundo = document.getElementById('segundo').value;
    var terceiro = document.getElementById('terceiro').value;
    var quarto = document.getElementById('quarto').value;
    var quinto = document.getElementById('quinto').value;

    if(primeiro.length == 0 || segundo.length == 0 || terceiro.length == 0 
        || quarto.length == 0 || quinto.length == 0) {
            alert("DADOS INCOMPLETOS!  PREENCHA CORRETAMENTE!");
    }
    else {
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
        cell6.innerHTML = `<button onClick="editar(this)" id="editar"><strong>EDITAR</strong></button>
                        <button onClick="#" id="deletar"><strong>DELETAR</strong></button>`;

        document.getElementById('primeiro').value = '';
        document.getElementById('segundo').value = '';
        document.getElementById('terceiro').value = '';
        document.getElementById('quarto').value = '';
        document.getElementById('quinto').value = '';
    }  
}

function editar(botao) {
    selectedRow = botao.parentElement.parentElement;
    document.getElementById('primeiro').value = selectedRow.cells[0].innerHTML;
    document.getElementById('segundo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('terceiro').value = selectedRow.cells[2].innerHTML;
    document.getElementById('quarto').value = selectedRow.cells[3].innerHTML;
    document.getElementById('quinto').value = selectedRow.cells[4].innerHTML;

    
}