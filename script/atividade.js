const lista = service.find()
// start() 

function adicionarAtividade() {
    const atividade = document.querySelector('.atividade').value;
    const adicionarHora = document.querySelector('.adicionar__hora').value;
    const selecionarDia = document.querySelector('.selecionar__dia').value;
    const novaAtividade = { id: uuidv4(), atividade, adicionarHora, selecionarDia }
    saveAndRefresh(novaAtividade)

    console.log(novaAtividade)
}

function start() {
	const items = lista?.map(htmlValue).join("\n");
	document.getElementById(".secao__atividades").innerHTML = items;
}

function updateItens(novaAtividade) {
	document.getElementById(".secao__atividades").innerHTML += htmlValue(novaAtividade);
}


function htmlValue(novaAtividade) {
	return `
        <div class="card w-40">
            <div class="card-body afazeres">                  
                <p class="card-text">${novaAtividade.atividade}</p>                  
            </div>
        </div>
	`
}


function saveAndRefresh(novaAtividade) {
	lista.push(novaAtividade)
	service.save()
	updateItens(novaAtividade)
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }