/**
 * Converte em json o nome do parametro e o valor
 * @param {string} c Nome do parametro
 * @param {*} v Valor do parametro
 */
function ToJsonParamValue(c = '',v){
    return '{"'+c+'": ' + (typeof(v) === 'string'? '"'+v+'"}': v+'}'); 
}

console.log(ToJsonParamValue('age', '28'));
console.log(ToJsonParamValue('age', 28));