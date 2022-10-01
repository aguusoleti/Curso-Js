function sumArray(array,num){
    if(!Array.isArray(array)) throw new TypeError('array')
    if(typeof num!=='number') throw new TypeError('number')
    for (let i = 0; i < array.length-1; i++) {

       for (let j = i+ 1; j < array.length; j++) {
        if(array[i]+array[j]=== num){
            return true
        }
       }
       return false
    }
}

module.exports={sumArray};
