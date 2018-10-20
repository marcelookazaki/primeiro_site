function VerificaSenha(){
	var senha = document.formulario1.senha.value;
	var senhaConfirmar = document.formulario1.senha1.value;
	
	//Verificando se a senha não está vazia 
	if(senha == ""){
		alert("Por favor digitar a senha.");
		document.formulario1.senha.focus();
	}
	
	//Validando se as senhas são iguais
	if(senha != senhaConfirmar){
		document.getElementById("imgCerto").style.display = "none";
	}
	else{
		document.getElementById("imgCerto").style.display = "inline";
	}
}

function cadastrar(){
	var nome = document.formulario1.nome.value;
	var email = document.formulario1.email.value;
	var senha = document.formulario1.senha.value;
	
	if(nome == ""){
		alert("Por favor digitar o nome.");
	}
	if(email == ""){
		alert("Por favor digitar o e-mail.");
	}
	if(senha == ""){
		alert("Por favor digitar a senha.");
	}
}

function mostrarCurso(){
	var div_curso = document.getElementById("div_curso");
	div_curso.style.display = "block";
}

function ocultarCurso(){
	var div_curso = document.getElementById("div_curso");
	div_curso.style.display = "none";
}