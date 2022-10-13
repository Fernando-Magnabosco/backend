function digitVerifier(CNPJ, values, position)
{
    let total = 0;
    for (let i = 0; i < values.length; i++)
        total += values[i] * CNPJ[i];


    return ( total % 11 < 2 ? 0 : 11 - total % 11 ) == parseInt(CNPJ.charAt(position))

}



module.exports = 
    function isValidCNPJ(CNPJ) {

        CNPJ = CNPJ.replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '');

        if (CNPJ.length != 14)
            return false;


        if (!digitVerifier(CNPJ, [5,4,3,2,9,8,7,6,5,4,3,2], 12)) return false;
        if (!digitVerifier(CNPJ, [6,5,4,3,2,9,8,7,6,5,4,3,2], 13)) return false;

        return true;


    }
