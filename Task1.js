function QuantImpares(list){
    try{
        let result=0;
        list.forEach(function(n){ if(n % 2 == 1) result++ });
        return result;
    }catch{
        console.error('Valor inválido, \nEssa função trabalha apenas com lista numerica [1,2,4...]');
    } 
}

console.log(QuantImpares([1,2,1,3]))