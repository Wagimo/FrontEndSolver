export const NumberToMoney = (amount:any, simbol = '$', decimalCount = 2, decimal = ',', thousands = '.') => {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount), 10).toString();
    const j = (i.length > 3) ? i.length % 3 : 0;

    var result = simbol + negativeSign + (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ?
            decimal + Math.abs(amount - parseFloat( i )).toFixed(decimalCount).slice(2) : '');

    console.log(result);
    return result;
};


export const FormatearCantidad = (cantidad:number) => {
    return Number(cantidad).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};
