const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
  });
  
  export function stringToNumber(currencyStr) {
    return currencyStr?.replace(/\D/g,'')
  }
  
  export function toPercentage(num) {
    return num == '' ? '' : '' + num + ' %'
  }
  
  export function toCurrency(string) {
    return isNaN(string) ? string : '$' + formatter.format(string);
  }
  
  export function formatAccountNumber(numStr) {
    return numStr.replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
  }
  
  export function formatPhoneNumber(numStr) {
    return numStr.replace(/\D/g, '').replace(/\B(?=((\d{4})|(\d{7}))(?!\d))/g, ' ')
  }