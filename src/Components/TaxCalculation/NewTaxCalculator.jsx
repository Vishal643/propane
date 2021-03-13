import React from 'react';
import styled from 'styled-components';
import { News } from '../BreakingNews/News';
import { BannerBusiness } from '../NavbarBusiness/BannerBusiness';
import { SubNav } from '../NavbarBusiness/SubNav';
import { CarouselContainer } from '../footerPage/Carousel';
import GridFooter from '../footerPage/GridFooter';
import { AdvertiseRight } from "../Advertisment/AdvertiseRight"
import { AdsRightBanner} from '../Advertisment/AdsRightBanner';


export const NewTaxCalculator = () => {
	const [income, setIncome] = React.useState('');
	const [taxNewValue, setTaxNewvalue] = React.useState('');
	const [taxOldValue, setTaxOldvalue] = React.useState('');

	// const [grosstax, setGrosstax] = React.useState("");
	const [deducitonValueC, setDeductionValueC] = React.useState('');
	const [deducitonValueD, setDeductionValueD] = React.useState('');
	const [deducitonValueE, setDeductionValueE] = React.useState('');

	const [displayState, setDisplayState] = React.useState(false);
	const [finalVal, setFinalVal] = React.useState('');

	React.useEffect(() => {
		document.title = 'Income Tax Calculator, Calcutate tax';
	}, []);
	const handleClick = () => {
		// console.log(income);
		newTaxCalc(income);
		oldTaxCalc(income);
		finalTax();
	};

	const finalTax = () => {
		if (taxOldValue > taxNewValue) {
			setDisplayState(true);
			setFinalVal(Number(taxOldValue) - Number(taxNewValue));
		} else {
			setDisplayState(false);
			setFinalVal(Number(taxNewValue) - Number(taxOldValue));
			console.log(finalVal);
		}
	};
	// const grosstax = income - stdDeduction;
	const stdDeduction = 50000;

	const handleChange = (e) => {
		const { value } = e.target;
		setIncome(value);
	};

	const newTaxCalc = (income) => {
		// console.log(income);
		var amount = income;
		// setGrosstax(income - stdDeduction)
		var tax = 0;
		var total = 0;

    if (amount < 250000) {
      tax = 0;
    } else if (amount > 250000 && amount <= 500000) {
      tax = (amount - 250000) * 0.5;
      // console.log(tax);
    } else if (amount > 500000 && amount <= 750000) {
      tax = 12500 + (amount - 500000) * 0.1;
      total = (tax * 4) / 100;
      // console.log(tax)
    } else if (amount > 750000 && amount <= 1000000) {
      tax = 37500 + (amount - 750000) * 0.15;
      total = (tax * 4) / 100;
      // console.log(total)
    } else if (amount > 1000000 && amount <= 1250000) {
      tax = 75000 + (amount - 1000000) * 0.2;
      total = (tax * 4) / 100;
      // console.log(tax)
    } else if (amount > 1250000 && amount <= 1500000) {
      tax = 125000 + (amount - 1250000) * 0.25;
      total = (tax * 4) / 100;
      // console.log(total)
    } else if (amount > 1500000) {
      tax = 187500 + (amount - 1500000) * 0.3;
      total = (tax * 4) / 100;
      // console.log(total, total);
    } else {
      tax = amount * 0.1;
    }
    tax = tax + total;
    var newtax = Number(tax.toFixed(2));
    setTaxNewvalue(newtax);
    setDeductionValueC(deducitonValueC);
    setDeductionValueD(deducitonValueD);
    setDeductionValueE(deducitonValueE);
    // return tax
  };

	const oldTaxCalc = (income) => {
		var amount = income;
		var Oldtax = 0;
		var oldtotal = 0;

    var exemption =
      Number(deducitonValueC) +
      Number(deducitonValueD) +
      Number(deducitonValueE);
    console.log(exemption);


    if (amount < 250000) {
      Oldtax = 0;

    }
     else if (amount > 250000 && amount <= 500000) {
      Oldtax = 12500 + (amount - 250000) * 0.5;
      oldtotal = Oldtax * 0.4;
      // console.log(Oldtax);
    } else if (amount > 500000 && amount <= 1000000) {
      Oldtax = 100000 +(amount - 500000) * 0.2;
      oldtotal = Oldtax * 0.4;
      // console.log(Oldtax);
    } else if (amount > 1000000) {
      Oldtax = (amount - 1000000) * 0.3;
      oldtotal = Oldtax * 0.4;
      // console.log(Oldtax);
    }

		Oldtax = Oldtax - oldtotal;
		// return Oldtax;

		var finalVal = Oldtax - Number(exemption);
		var newtax = Number(finalVal.toFixed(2));
		setTaxOldvalue(newtax);
		// return tax
	};

  return (
    <>
   <BannerBusiness banner='https://tpc.googlesyndication.com/simgad/16057958619342960337?' />
            <SubNav />
      <News />

      {/* <BannerBusiness /> 
      <NavbarBusiness/> */}
        <AdsRightBanner/>
  
      <Wrapper>
  
        <h1>INCOME TAX CALCULATOR</h1>
        <table style={{ margin: "auto" }}>
          <tr style={{ fontWeight: "bold" ,fontSize:"20px"}}>
            <td>Financial Year</td>
            <td> 2020 - 21 EXISTING TAX SLAB</td>
            <td> 2020 - 21 NEW TAX REGIME</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Gross Income</td>
            <td>
              <input
                type="text"
                name=""
                id=""
                value={income}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name=""
                id=""
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ fontSize: "13px" }}>
              INCLUDES : Salary, interest , income under the head house property{" "}
            </td>
            <td></td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}> Standard deduction</td>
            <td>
              <input type="text" name="" id="deduction" value={stdDeduction} />
            </td>
            <td>
              <input type="text" name="" id="" value={0} />
            </td>
          </tr>

					<tr>
						<td style={{ fontWeight: 'bold' }}> Gross taxable income</td>
						<td>
							<input type='text' name='' id='' value={income - stdDeduction} />
						</td>
						<td>
							<input type='text' name='' id='' value={income} />
						</td>
					</tr>

					<tr>
						<td style={{ fontWeight: 'bold' }}> HRA exemption</td>

						<td>
							<input type='text' name='' id='' placeholder='0' />
						</td>
						<td>
							<input type='text' name='' id='' value={0} />
						</td>
					</tr>

					<tr>
						<td style={{ fontWeight: 'bold' }}> Deduciton under section 80C</td>
						<td>
							<input
								type='text'
								name=''
								id=''
								value={deducitonValueC}
								onChange={(e) => setDeductionValueC(e.target.value)}
								placeholder='0'
							/>
						</td>
						<td>
							<input type='text' name='' id='' value={0} />
						</td>
					</tr>
					<tr>
						<td></td>
						<td style={{ fontSize: '13px' }}>
							INCLUDES: Life insurance, provident fund contribution, home loan
							principal repayment, children tuition fees Max deduction ₹1.5 Lakh
						</td>
						<td></td>
					</tr>

					<tr>
						<td style={{ fontWeight: 'bold' }}>Deduction under section 80D</td>
						<td>
							<input
								type='text'
								name=''
								id=''
								value={deducitonValueD}
								onChange={(e) => setDeductionValueD(e.target.value)}
								placeholder='0'
							/>
						</td>
						<td>
							<input type='text' name='' id='' value={0} />
						</td>
					</tr>
					<tr>
						<td></td>
						<td style={{ fontSize: '13px' }}>
							INCLUDES: health insurance Max deduction ₹25,000, senior citizen
							₹50,000
						</td>
						<td></td>
					</tr>

					<tr>
						<td style={{ fontWeight: 'bold' }}>Deduction under section 80E</td>
						<td>
							<input
								type='text'
								name=''
								id=''
								value={deducitonValueE}
								onChange={(e) => setDeductionValueE(e.target.value)}
								placeholder='0'
							/>
						</td>
						<td>
							<input type='text' name='' id='' value={0} />
						</td>
					</tr>

					<tr>
						<td> </td>{' '}
						<td style={{ fontSize: '13px' }}>
							Interest paid on education loan{' '}
						</td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td>
							<button onClick={handleClick}> Calculate Tax </button>
						</td>
						<td></td>
					</tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>
              {" "}
              <label>Old Tax Regime</label>
            </td>
            <td>
              {" "}
              <input type="text" id="Oldtax" value={taxOldValue} />
            </td>
            <td></td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>
              {" "}
              <label>New Tax Regime</label>{" "}
            </td>
            <td>
              {" "}
              <input type="text" id="tax" value={taxNewValue} />
            </td>
            <td></td>
          </tr>
        </table>
      
        {/* <AdvertiseRight /> */}
      </Wrapper>
      

      {displayState ? (
        <p style={{  color: "Teal", fontSize: "35px", textAlign: "center", marginTop:"50px",fontWeight:"bold" }}>
          {" "}
          You will now save {finalVal} if you opt for the new tax.{" "}
        </p>
      ) : (        <p style={{ color: "teal", fontSize: "35px", textAlign: "center", marginTop:"50px",fontWeight:"bold" }}>
          You will pay more tax than old tax. {finalVal}
        </p>
      )}

<img src="https://i.postimg.cc/ZqyGK87D/Capture.png" alt="incometax" style={{marginTop:"50px",marginLeft:"250px", width:"60%"  }}/>
<CarouselContainer />
			<GridFooter />
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin-left: 170px;
  /* border:1px solid; */
  font-size: 18px;
  margin-top:-450px;
  font-family:"Roboto, sans-serif"
  
  > div {
    margin-left: 40px;
  }
  table{
    border-collapse:collapse;
  }
  input {
    width: 300px;
    height: 30px;
    padding: 10px;
    font-size: 19px;
  }
  tr td {
    width: 300px;
    border-collapse:collapse;
    margin: 40px;
    padding: 20px;
    /* box-shadow:30px 40px 50px #f1f3ef; */
    color:black;
    background-color: #999898;
  }

  button {
    color: white;
    width: 320px;
    height: 50px;
    background-color: #5c0808;
    font-size: 25px;
    border: none;
  }
  button:focus {
    border: none;
    outline:none;
  }
  #income {
    margin-left: 130px;
  }
  h1 {
    text-align: center;
    color: #020294;
    margin-bottom:50px;
    font-size:40px;
    border-bottom:3px solid ;
  }
`;
