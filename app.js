const keys = document.querySelectorAll('.btn');
const input1 = document.getElementById('firstnumber');
const input2 = document.getElementById('secondnumber');
const signs = document.querySelectorAll('.sign');
const operator = document.getElementById('operator');
// const checksigns = ["+", "-", "*", "/", "%", "="];

// console.log(keys);
keys.forEach((key)=>{
  // console.log(key);

key.addEventListener('click',()=>{
// console.log(typeof +key.innerText);
    let num = key.innerText;
    
    if (operator.innerText !== ''){
      input2.value += num;

    }else{
      input1.value += num;
    }
  })
});


signs.forEach((sign)=>{
  sign.addEventListener('click',()=>{
    
     if (input1.value !== ""){
      operator.innerText = sign.innerText;
    }
  });
});


function AC(){
  input1.value= "";
  input2.value= "";
  result.value= "";
  operator.innerText= "";
}

function DEL(){
  if (operator.innerText !== ""){
    input2.value = input2.value.slice(0,input2.value.length-1);
  }else{
    input1.value = input1.value.slice(0,input1.value.length-1);

  }
}

// function sign(sign){
//       // console.log('hay');
//       document.getElementById('tempsign').value = sign;

    // }

    // const dec = document.getElementById('decimal').innerText;
    // console.log(dec);
    const result = document.getElementById('result');

function calculate(){
      // console.log('hay');

      // const num1 = Number(document.getElementById('firstnumber').value);
      // const num2 = Number(document.getElementById('secondnumber').value);

      let num1 = Number(input1.value);
      let num2 = Number(input2.value);

      // console.log(num1,num2);
      // console.log(typeof num1,typeof num2);

      // let getsign = document.getElementById('operator').value;

      let getsign = operator.innerText;
      console.log(getsign);

      let cal;
      switch(getsign){
        case "+":
        cal = num1 + num2;
        break;
        case "-":
        cal = num1 - num2;
        break;
        case "x":
        cal = num1 * num2;
        break;
        case "÷":
        cal = num1 / num2;
        break;
        case "%":
        cal = num1 % num2;
        break;
        default:
        window.alert("No Sign");
      }

      ;

      // result = `= ${cal}`;

      document.getElementById('result').value = `= ${cal}`;

      if(toString(result.innerText.includes("."))){
        document.getElementById('result').value = `= ${cal.toFixed(4)}`;
      }
        // document.getElementById('result').value = `= ${cal}`;
      
      // document.getElementById('result').value = `= ${cal.toFixed(4)}`; 

      // document.getElementById('result').value = `= ${cal.toFixed(4)}`;
    }
    
