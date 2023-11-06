import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  display: string = '';
  isDarkMode: boolean = false; // Default to light mode

  // Define button rows as an array of arrays
  buttonRows: string[][] = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', 'C', '=', '/'],
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
    this.display = '';
  }

  calculateResult() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }

  isOperator(button: string): boolean {
    // Define logic to identify operator buttons
    return ['+', '-', '*', '/'].includes(button);
  }

  isEquals(button: string): boolean {
    // Define logic to identify the equals button
    return button === '=';
  }

  isClear(button: string): boolean {
    // Define logic to identify the clear button
    return button === 'C';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
