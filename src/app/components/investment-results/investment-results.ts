import { Component, computed } from "@angular/core";
import { InvestmentService } from "../../services/investment.service";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
  standalone: false
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
