'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var suma =0;
num = num.toString().split("").reverse().join("")
for (let item in num) {
  if (num[item] !=0 ) {
suma +=Math.pow(2,item);
}
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
let result = [];
do {
  if (num%2==0){
    num /=2;
    result.unshift(0);
  }else{
    result.unshift(1);
    num=Math.floor(num/2);
  }
  
} while (num>=1);
return result.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}