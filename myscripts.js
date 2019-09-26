let selectedRow = null;

function clique() {
    if(primeiro.length == 0 || segundo.length == 0 || terceiro.length == 0 
        || quarto.length == 0 || quinto.length == 0) {
            alert("DADOS INCOMPLETOS!  PREENCHA CORRETAMENTE!");
    }
    else{
        let formData = ler();
        if (selectedRow == null){
            inserir(formData);
        }
        else{
            atualizar(formData);
        }
        resetar();
    }
}

function ler() {
    let formData = {}
    formData["primeiro"] = document.getElementById('primeiro').value;
    formData["segundo"] = document.getElementById('segundo').value;
    formData["terceiro"] = document.getElementById('terceiro').value;
    formData["quarto"] = document.getElementById('quarto').value;
    formData["quinto"] = document.getElementById('quinto').value;

    return formData;
}

function inserir(formData) {
    let table = document.getElementById("tabela");
    let row = table.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();

    cell1.innerHTML = formData.primeiro;
    cell2.innerHTML = formData.segundo;
    cell3.innerHTML = formData.terceiro;
    cell4.innerHTML = formData.quarto;
    cell5.innerHTML = formData.quinto;
    cell6.innerHTML = `<button onClick="editar(this)" id="editar"><strong>EDITAR</strong></button>
                       <button onClick="deletar(this)" id="deletar"><strong>DELETAR</strong></button>`;
}

function resetar() {
    document.getElementById('primeiro').value = '';
    document.getElementById('segundo').value = '';
    document.getElementById('terceiro').value = '';
    document.getElementById('quarto').value = '';
    document.getElementById('quinto').value = '';

    selectedRow = null;
}

function atualizar(formData) {
    selectedRow.cells[0].innerHTML = formData.primeiro;
    selectedRow.cells[1].innerHTML = formData.segundo;
    selectedRow.cells[2].innerHTML = formData.terceiro;
    selectedRow.cells[3].innerHTML = formData.quarto;
    selectedRow.cells[4].innerHTML = formData.quinto;
}

function editar(botao) {
    selectedRow = botao.parentElement.parentElement;

    document.getElementById('primeiro').value = selectedRow.cells[0].innerHTML;
    document.getElementById('segundo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('terceiro').value = selectedRow.cells[2].innerHTML;
    document.getElementById('quarto').value = selectedRow.cells[3].innerHTML;
    document.getElementById('quinto').value = selectedRow.cells[4].innerHTML;

}

function deletar(botao) {
    let confirmou = confirm("Tem certeza que deseja apagar?");

    if(confirmou) {
        let selectedRow = botao.parentElement.parentElement;
        let deletar = selectedRow;
        deletar.parentNode.removeChild(deletar);
    }
}
let total = 0;
function soma() {
    let teste = document.getElementById('tabela');
    let rows = teste.rows; 
    for (let i = 0; i < rows.length+2; i++) {
        total += rows[i].value;
    }
}
soma();