export function isName(value) {
    return /^[a-zA-Z\s]*$/.test(value);
  }
  export function isPhone(value) {
    return /^(?:\d{10}|\s*)$/.test(value);
  }
 export function isEmail(value){
  return /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,}$/.test(value);

 }