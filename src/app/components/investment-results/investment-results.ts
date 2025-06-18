import { CurrencyPipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  results = input<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[]>(); // uses signals
}
// function calculateInvestmentResults() {
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalInterest =
//       investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalInterest: totalInterest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }

//   return annualData;
// }
