import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel } from '../../models/investment-input.model';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
// calculate = output<InvestmentInputModel>();
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      annualInvestment:  +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn()
    });
    // reset input fields (optional to do -- doesn't allow the user to see the data used for calculations....)
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredDuration.set(10);
    this.enteredExpectedReturn.set(5);
  }

}
