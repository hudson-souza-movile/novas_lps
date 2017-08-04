const app1 = new Moon({
	el: "#app",
	data: {
		page_title:
		"Receitas do chef Claude Troisgros para sua casa.",
		
		page_subtitle:
		"Fique por dentro dos segredos de culinária dele e surpreenda na cozinha! Saboreie já as novas tendências do mundo da gastronomia!",
		
		cta1:
		"Quero cozinhar como chef!",
		
		sec1_title:
		"Mais que receitinhas",
		
		card1_title:
		"Dicas de restaurantes",
		
		card1_text:
		"Quer sair pra jantar e não sabe onde? O TIM Gourmet te ajuda mostrando os restaurantes mais próximos e informações como horário de funcionamento e preço. Imperdível!",
		
		card2_title:
		"Conteúdo gastronômico",
		
		card2_text:
		"Fique sabendo quais são os melhores eventos gastronômicos que vão estar na sua cidade ou próximos a você e vivencie novas exoeriências culinárias!",
		
		card3_title:
		"Peça um Delivery",
		
		card3_text:
		"Com preguiça de cozinhar hoje? Com o iFood integrado no TIM Gourmet, você poderá pedir seu prato favorito e ele chegará na sua casa! Quer praticidade maior do que isso?",
		
		sec2_title:
		"Como funciona?",
		
		sec2_text:
		"O TIM gourmet pode ser assinado via aplicativo ou via SMS. Caso você não tenha um smartphone para baixar o app, você também poderá assinar o TIM gourmet e receberá o conteúdo de receitas de culinária, de segunda a sexta, via SMS.",
		
		sec2_text2:
		"Para assinar, envie TG para o número 3040. Após o período de gratuidade de 3 dias, o valor do serviço é de R$ 3,99 por semana. Os custos do prato escolhido e da taxa de entrega no TIM gourmet Delivery não estão incluídos na assinatura do serviço.",

		sec2_img: true,
		
		sec3_title:
		"Quer saber mais?",
		
		cta2:
		"Experimente por 3 dias!",

		// which kind of footer?	
		social: false,
		facebook: "https://www.facebook.com/clarobrasil", //URL
		twitter: "https://twitter.com/clarobrasil",  //URL
		instagram: "", //URL
		pinterest: "", //URL
		linkedin: "", //URL

		app: true,
		app_store: "https://itunes.apple.com/br/app/vivo-educa/id1158949850?ls=1&mt=8", //URL
		play_store: "https://play.google.com/store/apps/details?id=com.movile.learning.vivo", //URL
	}
});

var n = new Date().getFullYear();
app1.set('year', n);
