const app1 = new Moon({
	el: "#app",
	data: {
		page_title:
		"Conteúdo de Alexandre Rossi, o Dr. Pet!",
		
		page_subtitle:
		"As melhores dicas do maior especialista em comportamento animal no Brasil para pessoas que são apaixonadas por seus bichinhos de estimação.",
		
		cta1:
		"Quero dicas do Dr. Pet!",
		
		sec1_title:
		"Saia do básico",
		
		card1_title:
		"Dicas do melhor",
		
		card1_text:
		"Alexandre é formado em Zootecnia e mestre em Psicologia pela USP, com especialização em Comportamento Animal pela Universidade de Queensland - Austrália.",
		
		card2_title:
		"Múltiplos canais",
		
		card2_text:
		"O Dicas Pet leva pra você informações sobre cães, gatos, adestramento e sobre a Estopinha. Escolha quantos canais quiser receber sem pagar a mais por isso.",
		
		card3_title:
		"Gatos também!",
		
		card3_text:
		"Se seu pet é um gatinho você também tem muito pra ver com Dicas Pet. Todas as semanas temos conteúdo novo pra você saber cuidar melhor do seu felino querido!",
		
		sec2_title:
		"Como funciona?",
		
		sec2_text:
		"O Claro Pet pode ser assinado apenas por cliente Claro, aqui neste site ou enviando uma mensagem com a palavra “PET” para o número 738. Depois de assinar você vai ter 3 dias para experiementar gratuitamente e depois o custo é de apenas R$3,99/semana.",
		
		sec2_text2:
		"Todo assinante recebe 1 MMS referente a categoria que selecionou (Adestramento, Cão, Gato e Estopinha). Lembrando que você pode receber quantas quiser, é só enviar a palavra “MAIS” para 738!",
		
		sec3_title:
		"Quer receber tudo isso?",
		
		cta2:
		"Quero dicas do Dr. Pet!",
	}
});

var n = new Date().getFullYear();
app1.set('year', n);
