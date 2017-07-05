const app1 = new Moon({
	el: "#app",
	data: {
		page_title:
		"Educação aproxima seus horizontes!",
		
		page_subtitle:
		"O Vivo Educa tem mais de 200 cursos à sua disposição, classificados entre 8 completas categorias, para aprender no seu tempo e onde quiser.",
		
		cta1:
		"Quero começar a aprender!",
		
		sec1_title:
		"Mais que aulinhas",
		
		card1_title:
		"Dicas de carreira",
		
		card1_text:
		"Tenha aulas preparatórias para entrevistas de emprego com os cursos de carreira do e melhore suas entrevistas de emprego.",
		
		card2_title:
		"Cozinha e gastronomia",
		
		card2_text:
		"Gostaria de saber cozinhar melhor ou melhorar o que você já sabe? Aqui você consegue aprender com cursos básicos e avançados.",
		
		card3_title:
		"Aprenda tecnologia",
		
		card3_text:
		"Em pleno século 21 não se pode mais ficar sem conhecer o mínimo da tecnologia que nos cerca e entendê-las melhor.",
		
		sec2_title:
		"Como funciona?",
		
		sec2_text:
		"O Vivo Educa pode ser assinado aqui neste site ou no aplicativo. Assinando e baixando o aplicativo, você vai ter acesso a todos os cursos da nossa plataforma, exercícios, materiais de apoio, além de ter cursos ao vivo e poder acessar todos os vídeos offline usando seu smartphone ou tablet.",
		
		sec2_text2:
		"O valor do serviço é de R$ 4,99/semana ou de R$12,99/mês (desconto de 13%) mas você também tem a opção de acessar todas as aulas gratuitas pelo tempo até encontrar o curso que vai querer!",
		
		sec3_title:
		"Quer aprender mais?",
		
		cta2:
		"Quero começar a aprender!",
	}
});

var n = new Date().getFullYear();
app1.set('year', n);
