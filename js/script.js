var lista = [1, 2, 3, 4, 5, 6, 7, 8];
var possiveis = [];
var cliques = 0;

alert('Selecione sua posição no minimapa.');

function lutar(value){
	if(cliques == 0){
		matar(value);
		cliques++;
	}else{
		// Conversão de string para inteiro
		var paraInt = value.toString();
		
		// Caso o adversário ainda não esteja inserido
		if(Number.isInteger(value) && (paraInt.length == 1)){
			nome(value);
		}else{
			if(lista.includes(1) || lista.includes(2) || lista.includes(3) || lista.includes(4) || lista.includes(5) || lista.includes(6) || lista.includes(7) || lista.includes(8)){
				alert('Você deve inserir o nome de todos usuários antes de iniciar o combate.');
			}else{
				processar(value);
				lock(value);

				if(cliques > 3){
					possiveis = lista.slice(0, 3);
					cores(possiveis);
					document.getElementById('possiveis').innerHTML = ' '+possiveis+'.';

					if(cliques == 4){
						inserirMatador(lista);
					}
				}

				cliques++;
			}
		}
	}
}

function nome(value){
	// Recebe nome do adversário
	var novo = prompt("Nome do adversário");
	
	// Verifica se foi informado o nome
	while(novo.length == 0){
		var novo = prompt("Você deve inserir o nome do adversário");
	}

	// Verifica se o nome já existe
	while(lista.indexOf(novo) > -1) {
		var novo = prompt("Nome já existe no mapa, informe outro");
	}
	
	inserir(value, novo); 
	document.getElementById(value).id = novo;
}

/*
function reiniciar(){
	lista = [1, 2, 3, 4, 5, 6, 7, 8];
	possiveis = [];
	cliques = 0;
	lista.forEach(function(item, indice, array){
		document.getElementById(item).innerHTML = '<b class="text d-flex flex-column justify-content-center align-items-center">'+item+'</b>';
		document.getElementById(item).classList.add("btn-go");
		document.getElementById(item).classList.remove("bg-transparent");
		document.getElementById(item).style.cursor = "pointer";
		document.getElementById(item).setAttribute("onclick", "lutar('"+item+"')");
	});
}
*/

function cores(value){
	value.forEach(function(item, indice, array){
		document.getElementById(item).classList.remove("bg-danger");
		document.getElementById(item).classList.add("bg-success");
	});
}

function inserirMatador(value){
	value.forEach(function(item, indice, array){
		document.getElementById(item).innerHTML = '<div class="icones"><div class="icon bg-black editar" onclick="rename('+"'"+item+"'"+')"></div><div class="icon bg-black matar" onclick="matar('+"'"+item+"'"+')"></div></div><b class="text d-flex flex-column justify-content-center align-items-center">'+item+'</b>';
	});
}

function processar(value){
	var index = lista.indexOf(value);
	lista.splice(index, 1);
	lista.push(value);
}

function inserir(value, novo){
	var index = lista.indexOf(value);
	lista.splice(index, 1);
	lista.splice(index, 0, novo);
	var element = document.getElementById(value);
	element.innerHTML = '<div class="icones"><div class="icon bg-black editar" onclick="rename('+"'"+novo+"'"+')"></div></div><b class="text d-flex flex-column justify-content-center align-items-center">'+novo+'</b>';
	element.setAttribute("onclick", "lutar('"+novo+"');"); 
}

function rename(value){
	event.stopPropagation();
	var element = document.getElementById(value);
	nome(value);
}

function matar(value){
	var element = document.getElementById(value);
	element.innerHTML = '';
	element.removeAttribute("onclick");
	element.classList.remove("btn-go");
	element.classList.add("bg-transparent");
	element.style.cursor = "auto";
	var index = lista.indexOf(value);
	lista.splice(index, 1);
}

function lock(value){
	var element = document.getElementById(value);
	element.classList.remove("bg-success");
	element.classList.add("bg-danger");
}