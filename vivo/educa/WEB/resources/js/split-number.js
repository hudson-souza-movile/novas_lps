function getPhone() {
	var numero = document.getElementById("numero").value;
	var ddd = numero.slice(1, 3);
	var firstHalf = numero.slice(5,10)
	var secondHalf = numero.slice(11,15)
	var phone = (firstHalf)+(secondHalf)

	document.getElementById("ddd").value = ddd;
	document.getElementById("telefone").value = phone;
	document.getElementById("form-numero").submit();
}