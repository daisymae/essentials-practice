import { NgModule } from '@angular/core';
import { InvestmentResults } from './components/investment-results/investment-results';
import { UserInput } from './components/user-input/user-input';
import { Header } from './components/header/header';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './components/user-input/user-input-module';



@NgModule({
  declarations: [
    App,
    Header,
    InvestmentResults],
  imports: [
    BrowserModule,
    UserInputModule,
],
  bootstrap: [App]
})
export class AppModule { }
