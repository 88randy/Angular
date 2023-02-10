import { Result } from "../app/result";

export class Calculator {
  private results: Result[] = [];

  add(a: number, b: number): Result {
    const result = a + b;
    return { result: result, operation: `${a} + ${b} = ${result}` };
  }

  subtract(a: number, b: number): Result {
    const result = a - b;
    return { result: result, operation: `${a} - ${b} = ${result}` };
  }

  multiply(a: number, b: number): Result {
    const result = a * b;
    return { result: result, operation: `${a} x ${b} = ${result}` };
  }

  divide(a: number, b: number): Result {
    let result = 0;
    if (b === 0) {
      return { result: result, operation: "No se puede dividir entre 0" };
    }
    result = a / b;
    return { result: result, operation: `${a} / ${b} = ${result}` };
  }

  saveResult(result: Result) {
    this.results.push(result);
  }

  getResults(): Result[] {
    return this.results;
  }

  clearResults() {
    this.results = [];
  }
}
