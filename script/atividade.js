var dia = "";

let diaSemana = [{  
  dia: 'segunda',
  atividades: []
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
        hora: document.getElementById('adicionar-hora').value,
        descricao: document.getElementById('atividade_add').value
      }      
      dia.atividades.push(objeto);
      
      document.getElementById('adicionar-hora').value = "" ;
      document.getElementById('atividade_add').value = "" ;        
      

    
  }

function eventos() {
    let saida = buscarDia(dia);
    let html = saida.atividades.map(s => `
    <div class="d-flex direction-row efeitos">
      <div>
        <p class="hora__plano text-center d-flex align-items-center justify-content-center">${s.hora}</p>
       </div>
       <p class="listra"></p>
        <div>
        <p class="plano d-flex align-items-center">${s.descricao}</p>
        </div>
        <button type="button" class="btn__apagar d-flex align-items-center justify-content-center" onclick="apagar_hora('${s.hora}', '${s.descricao}')">Apagar</button>
    </div>`).join("\n")
    
    document.getElementById('agendamento').innerHTML = html;
    
}


function segunda() {
    dia = 'segunda'
}

function terca() {
  dia = 'terca'
}

function quarta() {
  dia = 'quarta'
}

function quinta() {
  dia = 'quinta'
}

function sexta() {
  dia = 'sexta'
}

function sabado() {
  dia = 'sabado'
}

function domingo() {
  dia = 'domingo'
}
