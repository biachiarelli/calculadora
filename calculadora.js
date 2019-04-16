"use strict"

var form = document.getElementById("form");
var input = document.getElementById("input");
var message = document.getElementById("message");

var numbers = [];
var operation = [];

var isNumber = true;

/*Adicioanr*/
function add(a, b) {
	return (b+a)
}

/*Subtrair*/
function sub(a, b){
	return (b-a)
}

/*Multiplicar*/
function mult(a, b){
	return (b*a)
}

/*Dividir*/
function div(a, b){
	return (b/a)
}

/*Porcentagem*/
function percent(a, b){
	if(b){
		return b/100 * a
	} else {
		return a/100
	}
}

/*Raiz*/
function root(a){
	return Math.sqrt(a)
}	

/*Exponencial*/
function exp(b, a){
	return Math.pow(a, b);
}

/*Limpa barra de input*/
function clean(){
	numbers = [];
	operation = [];
	input.value = "";
	message.innerHTML = "";
	isNumber = true;
}

/*Imprime na barra de input*/
function printInput(value){
	input.value += value;
}

/*Alert de ajuda*/
function helpMessage() {
	alert('Esta calculadora realiza operações com um ou dois números. \n\n'+
		'+: soma \n' +
		'-: subtração \n' +
		'*: multiplicação \n' +
		'/: divisão \n' +
		'%: porcentagem \n' +
		'√¯: raiz quadrada \n' +
		'^: exponencial')
}

function inputValue(value, isBtnInput) {
	if(isBtnInput == null)
		isBtnInput = true;

	if(!Number(value) && value != "0"){

		if(value == "+" || value == "-" || value == "*" || value == "/" || value == "√¯" || value == "^" || value == "%"){
			if(isBtnInput)
				printInput(value);
			isNumber = false;

			if(operation.length != 0){
				getAnswer(value)
			} else{
				operation.push(value);
			}
		} else if(value == "C" || value == ""  || value == null){
			clean();
		}else if(value == "?"){
			helpMessage()
		}else {
			input.value = input.value.slice(0, input.value.length-1);

			message.innerHTML = "Apenas números ou operações válidos, para mais informações clique '?'";
		}
	} else{
		if(isBtnInput)
			printInput(value);
		
		if(message.innerHTML != "")
			message.innerHTML = "";

		if(isNumber){
			value = numbers.length != 0 ? String(numbers.pop()).concat(String(value)) : value
		}

		numbers.push(parseInt(value));
		isNumber = true;

	}
}

/*Mudança na barra do input*/
function changeInput(){
	var value = input.value.substr(-1);
	console.log(input.value)
	console.log(value)

	inputValue(value, false);
}

/*Calcula a resposta*/
function getAnswer(op) {
	var answer;

	for(var i in operation){
		switch (operation[i]){
			case '+':
				answer = add(numbers.pop(), numbers.pop());
				break
			case '-':
				answer = sub(numbers.pop(), numbers.pop());
				break
			case '*':
				answer = mult(numbers.pop(), numbers.pop());
				break
			case '/':
				answer = div(numbers.pop(), numbers.pop());
				break
			case '%':
				answer = percent(numbers.pop(), numbers.pop());
				break
			case '√¯':
				answer = root(numbers.pop());
				break
			case '^':
				answer = exp(numbers.pop(), numbers.pop());
				break;

		}
	}
	
	clean();
	inputValue(answer);

	if(op)
		inputValue(op);
	
}

