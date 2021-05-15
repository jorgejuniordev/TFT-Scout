var lista = [1, 2, 3, 4, 5, 6, 7, 8];
var possiveis = [];
var cliques = 0;

alert('Selecione sua posição no minimapa.');

function lutar(value){

	if(cliques == 0){
		my(value);
	}else{
		// Conversão de string para inteiro
		var paraInt = value.toString();
		
		// Caso o adversário ainda não esteja inserido
		if(Number.isInteger(value) && (paraInt.length == 1)){
			
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
		}else{
			if(lista.includes(1) || lista.includes(2) || lista.includes(3) || lista.includes(4) || lista.includes(5) || lista.includes(6) || lista.includes(7) || lista.includes(8)){
				alert('Você deve inserir o nome de todos usuários antes de iniciar o combate.');
			}else{
				processar(value);
				lock(value);

				if(cliques > 10){
					possiveis = lista.slice(0, 3);
					cores(possiveis);
				}
			}
		}
	}

	cliques++;
}

function cores(value){
	value.forEach(function(item, indice, array){
		console.log(item, indice);
		document.getElementById(item).classList.remove("bg-secondary");
		document.getElementById(item).classList.remove("bg-warning");
		document.getElementById(item).classList.remove("bg-danger");
		document.getElementById(item).classList.add("bg-success");
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
	element.innerHTML = novo;
	element.setAttribute("onclick", "lutar('"+novo+"');"); 
}


function my(value){
	var element = document.getElementById(value);
	element.innerHTML = '';
	element.removeAttribute("onclick");
	element.classList.remove("bg-secondary");
	element.classList.add("bg-transparent");
	element.style.cursor = "auto";
	var index = lista.indexOf(value);
	lista.splice(index, 1);
}

function lock(value){
	var element = document.getElementById(value);
	element.classList.remove("bg-secondary");
	element.classList.add("bg-warning");
}