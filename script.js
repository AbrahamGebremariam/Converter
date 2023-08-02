// Decimal to binary and Binary to decimal converter
let dInput = document.getElementById("dInput");
let bInput = document.getElementById("bInput");
let dispMsg = document.getElementById("dispMsg");

dInput.addEventListener("input", ()=> {
    let dValue = parseInt(dInput.value);
    bInput.value = dValue.toString(2);
});
bInput.addEventListener("input", ()=> {
    let bValue = bInput.value;
    if(binValidate(bValue)) {
        dInput.value = parseInt(bValue,2);
        dispMsg.textContent = "";
    }
    else {
        dispMsg.textContent = "Please Enter a Valid binary digit";
    }
    function binValidate(num) {
        for(let i=0;i<num.length;i++) {
            if(num[i]!="0" && num[i]!="1") {
                return false;
            }
        }
        return true;
    }
});
