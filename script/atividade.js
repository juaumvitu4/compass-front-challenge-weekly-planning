var dia = "";


let diaSemana = [{  
  dia: 'segunda',
  atividades: [],
}, {   
    dia: 'terca',
    atividades: []
  }, {
    dia: 'quarta',
    atividades: []
  }, {
    dia: 'quinta',
    atividades: []
  },{
    dia: 'sexta',
    atividades: []
  }, {
    dia: 'sabado',
    atividades: []
  }, {
    dia: 'domingo',
    atividades: []

  }]

function buscarDia(dia) {
  return diaSemana.find(x => x.dia === dia);

}

function agendamento() {
    document.getElementById('agendamento').innerText = '';
    var diasemana1 = document.getElementById('semana').value;

      
    let dia = buscarDia(diasemana1)
       
      let objeto = {
        id: uuidv4(),
        hora: document.getElementById('adicionar-hora').value,
        descricao: document.getElementById('atividade_add').value

      }      
      dia.atividades.push(objeto);
      
      document.getElementById('adicionar-hora').value = "" ;
      document.getElementById('atividade_add').value = "" ;   
      localSalvo();   
  }

  // tentando fazer o conflito de horario
  // function buscarHoraAtividade(atividades){
  //   let atividadesHora = new Map();
  //   console.log(atividadesHora.keys())
  //   atividades.forEach(element => {
  //     try {
  //       if(Array.from(atividadesHora.keys()).contains(element.hora)) {
  //          let auxiliar = atividadesHora.get(element.hora);
  //          auxiliar.push(element.descricao);
  //       }
        
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     atividadesHora.set(element.hora, [element.descricao]);
  //   });
  //   console.log(Array.from(atividadesHora.keys()))
  //   return atividadesHora;
  // }


  function eventos() {    
    diaSemana = JSON.parse(localStorage.getItem("items")) ?? diaSemana;
    let saida = buscarDia(dia);
    // conflito de horario
    // let atividades = buscarHoraAtividade(saida.atividades);
    // let html = Array.from(atividades.keys()).map(x => {
    //   let htmlSub = atividades.get(x).map(y => `<p class="listra"></p>
    //      <div>
    //      <p class="plano d-flex align-items-center">${y}</p>
    //      </div>`)        
    //   .join("\n")
    //   return `
    //   <div class="d-flex direction-row efeitos">
    //   <div>
    //   <p class="hora__plano text-center d-flex align-items-center justify-content-center">${x.hora}</p>
    //   </div>
    //   ${htmlSub}      
    //   <button type="button" class="btn__apagar d-flex align-items-center justify-content-center" onclick="excluir('')">Apagar</button>
    //   </div>`
    // })
    let html = saida.atividades.map(s => `
    <div class="d-flex direction-row efeitos">
      <div>
        <p class="hora__plano text-center d-flex align-items-center justify-content-center">${s.hora}</p>
       </div>
       <p class="listra"></p>
        <div>
        <p class="plano d-flex align-items-center">${s.descricao}</p>
        </div>
        <button type="button" class="btn__apagar d-flex align-items-center justify-content-center" onclick="excluir('${s.id}')">Apagar</button>
    </div>`).join("\n")
    
    document.getElementById('agendamento').innerHTML = html;
}

function excluir(uuidv4) {
   let apagarDia = buscarDia(dia)
   let atividadeApagar = apagarDia.atividades.filter(x => uuidv4 !== x.id);
   apagarDia.atividades = atividadeApagar;
   localSalvo();
   eventos();

}

function excluirTodos() {
  let apagarDia = buscarDia(dia)
  apagarDia.atividades = []
  localSalvo();
  eventos();

}

function excluirLocal() {
  localStorage.clear()
  // let apagarDia = buscarDia(dia)
  // apagarDia.atividades = []
  eventos();

}

function localSalvo() {
  localStorage.setItem("items", JSON.stringify(diaSemana));  
}



function segunda() {    
  if(dia !== ''){
      document.querySelector(`.${dia}`).style.width="200px";
  }
    dia = 'segunda'
    document.querySelector('.segunda').style.width="250px";
}

function terca() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'terca'
  document.querySelector('.terca').style.width="250px";
}

function quarta() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'quarta'
  document.querySelector('.quarta').style.width="250px";
}

function quinta() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'quinta'
  document.querySelector('.quinta').style.width="250px";
}

function sexta() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'sexta'
  document.querySelector('.sexta').style.width="250px";
}

function sabado() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'sabado'
  document.querySelector('.sabado').style.width="250px";
}

function domingo() {
  if(dia !== ''){
    document.querySelector(`.${dia}`).style.width="200px";
}
  dia = 'domingo'
  document.querySelector('.domingo').style.width="250px";
}


function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}