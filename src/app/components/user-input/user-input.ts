import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel } from '../../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
calculate = output<InvestmentInputModel>();
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 5;
  enteredDuration = 10;
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment:  +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn} );
  }

}
