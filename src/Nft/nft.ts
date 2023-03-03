/**
 * Token class
 * We define here particular properties for the tokens
 */
export class NFT {
  private code: string;
  private name: string;
  private price: number;
  private unit: string;

  constructor(code: string, name: string, price: number, unit = "ETH") {
    this.code = code;
    this.name = name;
    this.price = price;
    this.unit = unit;
  }
  get myCode() {
    return this.code;
  }
  get myName() {
    return this.name;
  }
  get myPrice() {
    return this.price;
  }
  get myUnit() {
    return this.unit;
  }

  set myCode(code) {
    this.code = code;
  }
  set myName(name) {
    this.name = name;
  }
  set myPrice(price) {
    this.price = price;
  }
  set myUnit(unit) {
    this.unit = unit;
  }
}
