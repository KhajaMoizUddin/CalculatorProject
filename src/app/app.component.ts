import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorProject';
  equalTo: string ='=';
 operator: string =''; 
 height: 20;
 width: 100;
 firstNumber: number;
 secondNumber: number;
 ResultValue: number;

 Addition() {
   this.operator = '+';
   this.ResultValue = +this.firstNumber + +this.secondNumber;
 }

 Subtraction() {
   this.operator = '-';
   this.ResultValue = this.firstNumber - this.secondNumber;
 }

 Multiply() {
   this.operator = 'x';
   this.ResultValue = this.firstNumber * this.secondNumber;
 }

 Percentage() {
   this.operator = '%';
   this.ResultValue = (this.firstNumber * this.secondNumber) / 100;
 }

 DivideBy() {
   this.operator = '/';
   this.ResultValue = this.firstNumber / this.secondNumber;
 }

 Clear() {
   this.operator = '';
   this.firstNumber, this.secondNumber, this.ResultValue;
 }

}
