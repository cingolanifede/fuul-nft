/**
 *
 * @param {code} token code
 * @param {ruleName} a name for the rule
 * @param {discountPrice} the discount price
 * @param {threshold} param for breakpoint
 * @param {enable} if it is enabled or not
 *
 * This class defines the discount rules that can be applied to the summary operation.
 */
export interface IRule {
  id: string;
  code: string;
  ruleName: string;
  discountPrice: number;
  threshold: number;
  enable: boolean;
}
export class DiscountRules {
  public code: string;
  public ruleName: string;
  public discountPrice: number;
  public threshold: number;
  public enable: boolean;
  public rules: IRule[] = [];

  constructor() {
    this.rules = [];
    this.code = "";
    this.ruleName = "";
    this.discountPrice = 0;
    this.threshold = 0;
    this.enable = true;
  }

  newRule(
    code: string,
    ruleName: string,
    discountPrice: number,
    threshold: number,
    enable: boolean
  ) {
    this.rules.push({
      id: (Math.random() + 1).toString(36).substring(7),
      code,
      ruleName,
      discountPrice,
      threshold,
      enable,
    });
  }

  get allRules() {
    return this.rules;
  }

  ruleByCode(code: string) {
    return this.rules.filter((r) => r.code === code && r.enable);
  }

  removeById(id: string) {
    const ix = this.rules.findIndex((r) => r.id === id);
    return this.rules.splice(ix, 1);
  }

  checkForDiscount(code: string) {
    const rule = this.ruleByCode(code);
    return rule && rule.length > 0 ? rule[0] : null;
  }
}
