import { Component } from "@angular/core";
import { Calculator } from "../app/calculator";
import { Result } from "../app/result";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  calculator = new Calculator();
  result: Result;

  onAdd(a: number, b: number) {
    this.result = this.calculator.add(a, b);
    this.calculator.saveResult(this.result);
  }

  onSubtract(a: number, b: number) {
    this.result = this.calculator.subtract(a, b);
    this.calculator.saveResult(this.result);
  }

  onMultiply(a: number, b: number) {
    this.result = this.calculator.multiply(a, b);
    this.calculator.saveResult(this.result);
  }

  onDivide(a: number, b: number) {
    this.result = this.calculator.divide(a, b);
    this.calculator.saveResult(this.result);
  }

  getResults(): Result[] {
    return this.calculator.getResults();
  }

  clearResults() {
    this.calculator.clearResults();
  }
}
