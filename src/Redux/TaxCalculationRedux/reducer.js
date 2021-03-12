import { CALCULATE_TAX } from "./actionType"


const initstate = {
    tax :0
}

export const Taxreducer =(state  = initstate ,{type ,payload}) =>{

    switch(type)
    {
        case CALCULATE_TAX :{
            return {
                ...state,
                tax : payload
            }
        }

          default :{
            return state;
          }
      }
}


// export const  calculate_tax  = (amount)=(dispatch) =>{
//     var total = 0;
//     dispatch(CalculateNewTax())
// {
//     if (amount < 250000) tax = 0;
//      else if (amount > 250000 && amount <= 500000) tax = (amount - 250000) * 0.5;
//      else if (amount > 500000 && amount <= 750000) 
//       tax = 12500 + (amount - 500000) * 0.1;
//       total = (tax * 4) / 100;
     
//      if (amount > 750000 && amount <= 1000000) 
//       tax = 37500 + (amount - 750000) * 0.15;
//       total = (tax * 4) / 100;
     
//      if (amount > 1000000 && amount <= 1250000) 
//       tax = 75000 + (amount - 1000000) * 0.2;
//       total = (tax * 4) / 100;
//       // console.log(tax)
//      if (amount > 1250000 && amount <= 1500000) 
//       tax = 125000 + (amount - 1250000) * 0.25;
//       total = (tax * 4) / 100;
  
//       if (amount > 1500000)   tax = 187500 + (amount - 1500000) * 0.3; total = (tax * 4) / 100;
      
    
//       else(tax = amount * 0.1)
// }
//     tax = tax + total;
//     return tax;    

//   }



//  export const calcOldTaxes = (amount) =(dispatch)=>{

//     var oldtotal = 0;

//     if (amount < 250000) {
//       Oldtax = 0;
//     }
//      else if (amount > 250000 && amount <= 500000) {
//       Oldtax = (amount - 250000) * 0.5;
//       // console.log(Oldtax);
//     }
//     else if (amount > 500000 && amount <= 1000000) {
//       Oldtax = 63000+ ((amount - 500000) * 0.20)
//       oldtotal = Oldtax * 0.4
//       // console.log(Oldtax);
//     }

//     else if (amount >  1000000) {
//       Oldtax = 75000 +  ((amount - 1000000) * 0.30)
//       oldtotal = Oldtax * 0.4
//       // console.log(Oldtax);
//     }
    
     
//     Oldtax =  Oldtax - oldtotal
//     return Oldtax;     
//   }
