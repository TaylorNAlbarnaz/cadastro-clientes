export function format(value, pattern) {
    let i = 0;
    const v = value.toString();

    if (value == '' || value == null) {
        return value;
    }

    return pattern.replace(/#/g, _ => v[i++]);
}

export function unformat(value) {
    if (value == '' || value == null) {
        return value;
    }
    
    return value.replace(/\D/g, "");
}

export function cpf(cpf){
    cpf = cpf.replace(/\D/g, '');
    if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9,10].forEach(function(j){
        var soma = 0, r;
        cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
            soma += parseInt(e) * ((j+2)-(i+1));
        });
        r = soma % 11;
        r = (r <2)?0:11-r;
        if(r != cpf.substring(j, j+1)) result = false;
    });
    return result;
}