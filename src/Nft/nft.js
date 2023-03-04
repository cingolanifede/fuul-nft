"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
/**
 * Token class
 * We define here particular properties for the tokens
 */
class NFT {
    constructor(code, name, price, unit = "ETH") {
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
exports.NFT = NFT;
