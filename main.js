function calculate(inputValue){
    console.log("calling ");
    let expression = /\+|\-|\*|\//;
    let input = inputValue.split(expression);
    let a = parseInt(input[0]);
    let b = parseInt(input[1]);
    let operation = inputValue.match(expression);
    

    const obj = new Calculator();
    if(!operation || Number.isNaN(a) || Number.isNaN(b)){
        setResult("Unexpected Data");
    }
    else{
        obj.result = a;
        switch(operation[0]){
            case "+":
                obj.add(b);
                break;
            case "-":
                obj.subtract(b);
                break;
            case "*":
                obj.multiply(b);
                break;
            case "/":    
                obj.divison(b);
                break;
        }

        setResult(obj.result);
    }
    

    

}

function setResult(text){
    document.getElementById("resultdata").innerText=text;
}


function showVersion(){
    let calculator = new Calculator();
    calculator.version="9.0";
    // calculator.version.then((res)=>{
    //     document.getElementById("version").innerText=res;
    // })
    document.getElementById("version").innerText=calculator.version;
    
}

//my api url : https://mocki.io/v1/dd55eff4-32e6-43ab-85f9-aefc255cd3f0