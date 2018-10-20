
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
	var senha = document.formulario1.senha.value;
	var senhaConfirmar = document.formulario1.senha1.value;
	
	if(nome == ""){
		alert("Por favor digitar o nome.");
		document.formulario1.senhaConfirmar.focus();
	}
	if(email == ""){
		alert("Por favor digitar o e-mail.");
		document.formulario1.email.focus();
	}
	if(senha == ""){
		alert("Por favor digitar a senha.");
		document.formulario1.senha.focus();
	}
	if(senhaConfirmar == ""){
		alert("Por favor confirme sua senha.");
		document.formulario1.senhaConfirmar.focus();
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
