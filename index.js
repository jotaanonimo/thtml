function checar()
{
 var botoes = document.getElementsByName("mybuttons");

 for (var i = 0 in botoes) 
		if(botoes[i].checked)
			if (botoes[3].checked)
				alert("Escolheu: " + botoes[i].value + " Acertou, parabéns!");
			else
				alert("Escolheu: " + botoes[i].value + " Alternativa incorreta");
}			