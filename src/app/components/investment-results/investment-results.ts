import { CurrencyPipe } from "@angular/common";
import { Component, computed } from "@angular/core";
import { InvestmentService } from "../../services/investment.service";

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService){}

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // optional way using computed function
  // computed, read-only
  results = computed(() => this.investmentService.resultsData());

  // another way to have read-only from a signal:
  // results = this.investmentService.resultsData.asReadonly();

}
