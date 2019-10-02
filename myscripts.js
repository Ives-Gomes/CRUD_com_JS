let selectedRow = null;

function clique() {
    if(primeiro.value == "" ||  segundo.value == "" || terceiro.value == "" 
       || quarto.value == "" || quinto.value == "") {
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

    cell1.innerText = formData.primeiro;
    cell2.innerText = formData.segundo;
    cell3.innerText = formData.terceiro;
    cell4.innerText = formData.quarto;
    cell5.innerText = formData.quinto;
    cell6.innerHTML = `<button onClick="editar(this)" id="editar"><strong>EDITAR</strong></button>
                       <button onClick="deletar(this)" id="deletar"><strong>DELETAR</strong></button>`;
    soma();
    projetos();
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
    selectedRow.cells[0].innerText = formData.primeiro;
    selectedRow.cells[1].innerText = formData.segundo;
    selectedRow.cells[2].innerText = formData.terceiro;
    selectedRow.cells[3].innerText = formData.quarto;
    selectedRow.cells[4].innerText = formData.quinto;
    soma();
    projetos();
}

function editar(botao) {
    selectedRow = botao.parentElement.parentElement;

    document.getElementById('primeiro').value = selectedRow.cells[0].innerText;
    document.getElementById('segundo').value = selectedRow.cells[1].innerText;
    document.getElementById('terceiro').value = selectedRow.cells[2].innerText;
    document.getElementById('quarto').value = selectedRow.cells[3].innerText;
    document.getElementById('quinto').value = selectedRow.cells[4].innerText;

}

function deletar(botao) {
    let confirmou = confirm("Tem certeza que deseja apagar?");

    if(confirmou) {
        let selectedRow = botao.parentElement.parentElement;
        let deletar = selectedRow;
        deletar.parentNode.removeChild(deletar);
    }
    soma();
    projetos();
}

function soma() {
    let porcento = 0;
    let total = 0;
    let tabela = document.getElementById('tabela');
    let rows = tabela.rows; 
    for (let i = 2; i < rows.length; i++) {
        total += parseFloat(rows[i].cells[2].innerText);
    }
    porcento = parseFloat(total / 270).toFixed(1);
    document.getElementById('soma').innerText = "Valor Total: " + total + "/27000" + " " + porcento + "%";
}

function projetos() {
    let tabela = document.getElementById('tabela');
    let rows = tabela.rows;
    document.getElementById('numprojetos').innerText = "Meta de Projetos: " + (rows.length - 2) + "/18";
}

function buscar() {
    let pesquisa = document.getElementById('pesquisa').value;
    let table = document.getElementById('tabela');
    
    for(let i = 2; i < table.rows.length; i++) {
        let row = table.rows[i];
        let cell = row.cells[0];

        if(pesquisa == cell.innerText || pesquisa == "") {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }

    }
}