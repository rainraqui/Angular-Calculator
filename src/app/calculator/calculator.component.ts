import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display: string = "";

  // Define button rows as an array of arrays
  buttonRows: string[][] = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', 'C', '=', '/']
  ];

  onButtonClick(value: string) {
    if (value === 'C') {
      this.clearDisplay();
    } else if (value === '=') {
      this.calculateResult();
    } else {
      this.display += value;
    }
  }

  clearDisplay() {
    this.display = "";
  }

  calculateResult() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = "Error";
    }
  }
}
