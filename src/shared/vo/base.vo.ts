export class BaseVO<T> {
  public matchPattern: RegExp; 
  private value: T;

  public health(value: string): boolean {
    return this.matchPattern.test(value);
  }

  public unwrap(): T {
    return this.value;
  }

  public set(v: T): void {
    this.value = v;
  }
}