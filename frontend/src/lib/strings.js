const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol'
  });
  
  export function stringToNumber(currencyStr) {
    return currencyStr?.replace(/\D/g,'')
  }
  
  export function toPercentage(num) {
    return num == '' ? '' : '' + num + ' %'
  }
  
  export function toCurrency(string) {
    return isNaN(string) ? string : formatter.format(string);
  }

const formatterLocal = new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

export function formatDate (dateString){
  return formatterLocal.format(new Date(dateString))
};