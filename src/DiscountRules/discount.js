"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRules = void 0;
class DiscountRules {
    constructor() {
        this.rules = [];
        this.rules = [];
        this.code = "";
        this.ruleName = "";
        this.discountPrice = 0;
        this.threshold = 0;
        this.enable = true;
    }
    newRule(code, ruleName, discountPrice, threshold, enable) {
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
    ruleByCode(code) {
        return this.rules.filter((r) => r.code === code && r.enable);
    }
    removeById(id) {
        const ix = this.rules.findIndex((r) => r.id === id);
        return this.rules.splice(ix, 1);
    }
    checkForDiscount(code) {
        const rule = this.ruleByCode(code);
        return rule && rule.length > 0 ? rule[0] : null;
    }
}
exports.DiscountRules = DiscountRules;
