// Função para atualizar a data e hora
function mostrarDataHora() {
	// Cria um novo objeto de data
	var dataAtual = new Date();

	// Formata a data e hora para exibição
	var dataFormatada = dataAtual.toLocaleString(); // Pode-se usar toLocaleString() para formatar de acordo com a localização

	// Exibe a data e hora na tela
	document.getElementById('data-hora').innerText = 'Data e hora atual: ' + dataFormatada;
}

// Chama a função inicialmente para exibir a data e hora
mostrarDataHora();

// Atualiza a data e hora a cada segundo (1000 milissegundos)
setInterval(mostrarDataHora, 1000);
