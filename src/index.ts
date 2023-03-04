import { DiscountRules, IRule } from "./DiscountRules/discount";
import { NFT } from "./Nft/nft";
import { Products } from "./Products/product";

export class Launcher {
  private nft: Products;
  private rules: DiscountRules;

  public constructor() {
    this.nft = new Products();
    this.rules = new DiscountRules();
  }
  public seedApp() {
    //We create the products and the discount rules
    const products = [
      { code: "APE", name: "Bored Apes", price: 75, unit: "ETH" },
      { code: "PUNK", name: "Crypto Punks", price: 60, unit: "ETH" },
      { code: "MEEBIT", name: "Meebits", price: 4, unit: "ETH" },
    ];
    const productRules = [
      {
        code: "APE",
        name: "2x1",
        discountPrice: 75,
        threshold: 0,
        enable: true,
      },
      {
        code: "PUNK",
        name: "bulk",
        discountPrice: 50,
        threshold: 3,
        enable: true,
      },
    ];

    products.forEach((p: any) =>
      this.nft.newProduct(p.code, p.name, p.price, p.unit)
    );
    productRules.forEach((r: any) =>
      this.rules.newRule(r.code, r.name, r.discountPrice, r.threshold, r.enable)
    );
  }

  /**
   *
   * @param {discount rule} discount
   * @param {amunt of token to buy} qty
   * This function checks and apply the discount depending on the rule. Should be unique ruleName to identify it
   * return total amount for each rule applied!
   */
  public applyDiscount(
    currentProduct: NFT,
    discountRule: IRule,
    amountToBuy: number
  ) {
    const { code, ruleName, discountPrice, threshold } = discountRule;
    if (ruleName === "2x1") {
      if (code === "APE") {
        const roundUp = Math.trunc(amountToBuy / 2);
        const firstPart =
          roundUp === 0 ? 1 : amountToBuy % 2 === 0 ? roundUp : roundUp + 1;
        return firstPart * discountPrice;
      }
    }

    if (ruleName === "bulk") {
      if (code === "PUNK") {
        return threshold && amountToBuy >= threshold
          ? amountToBuy * discountPrice
          : amountToBuy * currentProduct.myPrice;
      }
    }
    return null;
  }

  public processData(inputs: any) {
    if (inputs.length === 0) return 0;
    const groupByCategory: { [key: string]: number } = inputs.reduce(
      (group: any, product: any) => {
        group[product] = (Number(group[product]) || 0) + 1;
        return group;
      },
      {}
    );

    let subTotal = 0;

    for (const key in groupByCategory) {
      try {
        if (Object.hasOwnProperty.call(groupByCategory, key)) {
          const currentProduct = this.nft.productByCode(key);
          if (!currentProduct) continue;
          const amountToBuy = groupByCategory[key];
          const discountRule = this.rules.checkForDiscount(
            currentProduct.myCode
          );
          if (discountRule) {
            const productSubTotal = this.applyDiscount(
              currentProduct,
              discountRule,
              amountToBuy as number
            );
            if (!productSubTotal) continue;
            subTotal += productSubTotal;
          } else {
            subTotal += amountToBuy! * currentProduct.myPrice;
          }
        }
      } catch (err: any) {
        console.log("err==> ", err.message);
      }
    }
    return subTotal;
  }
}

const inputs: string[] = ["APE", "PUNK", "MEEBIT"];
// const inputs: string[] = ["APE", "PUNK", "APE"];
// const inputs: string[] = ["PUNK", "PUNK", "PUNK", "APE", "PUNK"];
// const inputs: string[] = ["APE", "PUNK", "APE", "APE", "MEEBIT", "PUNK", "PUNK"];
// const inputs: string[] = [];

const app = new Launcher();
app.seedApp();
console.log("Total:", app.processData(inputs));
// console.log("arguments: " + process.argv.slice(2));
