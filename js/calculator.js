
var decimalBtn = document.querySelector("#calc-decimal");
var clearBtn = document.querySelector("#calc-clear"); 
var backspaceBtn = document.querySelector("#calc-backspace");
var displayValElement = document.querySelector("#display-val");

var calcNumBtns = document.querySelectorAll(".calc-btn-num");
var calcOperatorBtn = document.querySelectorAll(".calc-btn-operator");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];
var evalStringArray2 = [];
var answer = 0;



function add(a, b){
	num1 = parseFloat(a);
	num2 = parseFloat(b);
	return num1 + num2;
}

function subtract(a, b){
	num1 = parseFloat(a);
	num2 = parseFloat(b);
	return num1 - num2;
}

function divide(a, b){
	num1 = parseFloat(a);
	num2 = parseFloat(b);
	result = num1/num2;
	if(num2===0){
		result = "Syntax Error!!"
	}
	return result;
}

function multiply(a, b){
	num1 = parseFloat(a);
	num2 = parseFloat(b);
	return num1*num2;
}


function updateDisplayVal(clickOnNum){
	if(displayVal==="0"){
		displayVal = "";
		var btnText = clickOnNum.target.textContent;
		displayVal += btnText;
		displayValElement.textContent = displayVal;
	}else{

		var btnText = clickOnNum.target.textContent;
		displayVal += btnText;
		displayValElement.textContent = displayVal;
	}
	
};

function performOperation(clickOperator){
	var operator = clickOperator.target.textContent;
	switch (operator) {
		case "+":
			pendingVal = displayVal;
			displayVal = operator;
			displayValElement.textContent = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("+");
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="+"){
				displayVal = add(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="-"){
				displayVal = subtract(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="x"){
				displayVal = multiply(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="÷"){
				displayVal = divide(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			displayVal = ""; 
			break;

		case "-":
			pendingVal = displayVal;
			displayVal = operator;
			displayValElement.textContent = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("-");
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="+"){
				displayVal = add(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="-"){
				displayVal = subtract(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="x"){
				displayVal = multiply(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="÷"){
				displayVal = divide(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			displayVal = "";
			break;

		case "x":
			pendingVal = displayVal;
			displayVal = operator;
			displayValElement.textContent = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("x");
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="+"){
				displayVal = add(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="-"){
				displayVal = subtract(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="x"){
				displayVal = multiply(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="÷"){
				displayVal = divide(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			displayVal = ""; 
			break;

		case "÷":
			pendingVal = displayVal;
			displayVal = operator;
			displayValElement.textContent = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("÷");
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="+"){
				displayVal = add(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="-"){
				displayVal = subtract(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="x"){
				displayVal = multiply(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			if(evalStringArray[3]!==undefined && evalStringArray[1]==="÷"){
				displayVal = divide(evalStringArray[0],evalStringArray[2]);
				displayValElement.textContent = displayVal;
				evalStringArray = [];
				evalStringArray.push(displayVal);
				evalStringArray.push(clickOperator.target.textContent);
			}
			displayVal = "";
			break;

		case "=":
			evalStringArray.push(displayVal);
			console.log(evalStringArray)
			console.log(evalStringArray[0]+" and "+ evalStringArray[2])

			if(evalStringArray[1]==="+"){
				displayVal =0;

				displayVal = add(evalStringArray[0], evalStringArray[2]);
				console.log("display val "+displayVal)
			};
			if(evalStringArray[1]==="-"){
				displayVal = subtract(evalStringArray[0], evalStringArray[2]);
			};
			if(evalStringArray[1]==="÷"){
				displayVal = divide(evalStringArray[0], evalStringArray[2]);
			};
			if(evalStringArray[1]==="x"){
				displayVal = multiply(evalStringArray[0], evalStringArray[2]);
			};
			
			displayValElement.textContent = displayVal;
			console.log(displayVal)
			console.log(typeof(displayVal))

			evalStringArray = [];
			break;
		default:
			break;
	}
};

calcNumBtns.forEach(number => number.addEventListener("click", updateDisplayVal));

calcOperatorBtn.forEach(operator => operator.addEventListener("click", performOperation));

clearBtn.addEventListener("click", (e) =>{
	displayVal="0";
	displayValElement.textContent = displayVal;
})

backspaceBtn.addEventListener("click", (e)=>{
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
	if(displayVal === ""){
		displayVal = "0"
	}
	displayValElement.textContent = displayVal;
})

decimalBtn.addEventListener("click", (e)=>{
	if(!displayVal.includes(".")){
		let decimalPoint = e.target.textContent;
		displayVal += decimalPoint;
		displayValElement.textContent = displayVal;
	}
	
})

