
function VerificaSenha(){
	var senha = document.formulario1.senha.value;
	var senhaConfirmar = document.formulario1.senha1.value;
	
	//Validando se as senhas são iguais
	
	if(senha != senhaConfirmar){
		document.getElementById("imgCerto").style.display = "none";
		alert("ERRO !, senha errada ")
	}
	else{
		document.getElementById("imgCerto").style.display = "inline";
	}
}

function cadastrar(){
	var nome = document.formulario1.nome.value;
	var email = document.formulario1.email.value;
	var tel = document.formulario1.tel.value;
	var senha = document.formulario1.senha.value;
	var senhaConfirmar = document.formulario1.senha1.value;

	var reg_tel = /(\(11\) (9\d{4})-\d{4})|((\(1[2-9]{1}\)|\([2-9]{1}\d{1}\)) [5-9]\d{3}-\d{4})$/;
	var padrao_nome = /[0-9]/g;
	var reg_email = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;


	if(nome == ""){
		alert("Por favor digitar o nome.");
		document.formulario1.senhaConfirmar.focus();
		return false;
	}else if(nome.match(padrao_nome)){
		document.formulario1.nome.focus();
		alert(" OPS!, Somente letras no nome");
		return false;
	}

	if(email == ""){
		alert("Por favor digitar o e-mail.");
		document.formulario1.email.focus();
		return false;
	}else if(!email.match(reg_email)) {
		document.formulario1.nome.focus();
		alert("Voce digitou E-mail errado");
		return false;
	};
	if(senha == ""){
		alert("Por favor digitar a senha.");
		document.formulario1.senha.focus();
		return false;

	}
	if(senhaConfirmar == ""){
		alert("Por favor confirme sua senha.");
		document.formulario1.senhaConfirmar.focus();
		return false;

	}
	if(tel==""){
		alert("Insire seu telefone, por favor !");
		document.formulario1.tel;focus();
		return false
	}
	else if(!tel.match(reg_tel)){
		document.formulario1.tel.focus();
		alert("Insira apenas numeros!");
		return false;
	}


	document.formulario1.nome.disabled = true;
	document.formulario1.email.disabled = true;
	
	alert("Olá " + nome + ". Obrigada por preencher nosso cadastro! Seja bem vindo!");
}

function mostrarCurso(){
	var div_curso = document.getElementById("div_curso");
	div_curso.style.display = "block";
}

function ocultarCurso(){
	var div_curso = document.getElementById("div_curso");
	div_curso.style.display = "none";
}
