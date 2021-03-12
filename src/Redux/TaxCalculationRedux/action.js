import { CALCULATE_TAX } from "./actionType"


export const CalculateNewTax = (payload) =>{
    return{ 
        type: CALCULATE_TAX,
        payload
    }
}

// export const calculate_tax =(params) =(dispatch)=> {
//     var total;
//     // var income = parseFloat($("income").value);
//     // $("tax").value = calcTaxes(income);
//     // $("Oldtax").value = calcOldTaxes(income);
//     // console.log(tax);
//     // console.log(Oldtax)

//     // function calcTaxes(amount) {
//       var total = 0;

//       if (amount < 250000) {
//         tax = 0;
//       } else if (amount > 250000 && amount <= 500000) {
//         tax = (amount - 250000) * 0.5;
//         console.log(tax);
//       } else if (amount > 500000 && amount <= 750000) {
//         tax = 12500 + (amount - 500000) * 0.1;
//         total = (tax * 4) / 100;
//         // console.log(tax)
//       } else if (amount > 750000 && amount <= 1000000) {
//         tax = 37500 + (amount - 750000) * 0.15;
//         total = (tax * 4) / 100;
//         // console.log(total)
//       } else if (amount > 1000000 && amount <= 1250000) {
//         tax = 75000 + (amount - 1000000) * 0.2;
//         total = (tax * 4) / 100;
//         // console.log(tax)
//       } else if (amount > 1250000 && amount <= 1500000) {
//         tax = 125000 + (amount - 1250000) * 0.25;
//         total = (tax * 4) / 100;
//         // console.log(total)
//       } else if (amount > 1500000) {
//         tax = 187500 + (amount - 1500000) * 0.3;
//         total = (tax * 4) / 100;
//         console.log(total, total);
//       } else {
//         tax = amount * 0.1;
//       }
//       tax = tax + total;
//       return tax;
  
//     }
