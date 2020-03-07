const input = document.querySelector("input");
const a = document.querySelectorAll("#numbers a");

let clickValue = "";
let result = "";
let condition;
for(let i = 0; i < a.length; i++ ) {
    a[i].addEventListener("click", function(e) {
      alert(1);
        //console.log(e.target.textContent);
        clickValue = e.target.textContent;
        condition = (input.value.includes("+") || input.value.includes("-") || input.value.includes("/") || input.value.includes("*"));
        if (clickValue === "=") {
            if (!condition) {return;}
            result = eval(input.value);
            input.value = result;

        } else if (clickValue === "AC") {
            input.value = "";
        } else if (clickValue === "C") {
            console.log(input.value);
            input.value = input.value.substr(0, input.value.length - 1)
        }else {
                if (["+", "-", "*", "/"].includes(input.value[input.value.length-1]) && ["+", "-", "*", "/"].includes(clickValue)) {
                
                    let b=input.value[input.value.length-1];
                    input.value=b+clickvalue;
                } else {
                    input.value += clickValue;
                }
        }
    })
};