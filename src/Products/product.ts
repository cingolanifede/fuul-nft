import { NFT } from "../Nft/nft";

/**
 * Products class.
 * Creates new product with the specific token
 *
 */
export class Products {
  private code: string;
  private name: string;
  private price: number;
  private unit: string;
  public products: NFT[] = [];

  constructor() {
    this.products = [];
    this.code = "";
    this.name = "";
    this.price = 0;
    this.unit = "";
  }

  newProduct(code: string, name: string, price: number, unit = "ETH") {
    const p = new NFT(code, name, price, unit);
    this.products.push(p);
    return p;
  }
  get allProducts() {
    return this.products;
  }

  productByCode(code: string) {
    return this.products.find((p) => p.myCode === code);
  }

  productByName(name: string) {
    return this.products.find((p) => p.myName === name);
  }

  removeBycode(code: string) {
    const ix = this.products.findIndex((p) => p.myCode === code);
    return this.products.splice(ix, 1);
  }

  // This could include summary stats like average score, etc. For simplicy, just the count for now
  get numberOfProducts() {
    return this.products.length;
  }
}
