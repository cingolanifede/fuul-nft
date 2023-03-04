"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const nft_1 = require("../Nft/nft");
/**
 * Products class.
 * Creates new product with the specific token
 *
 */
class Products {
    constructor() {
        this.products = [];
        this.products = [];
        this.code = "";
        this.name = "";
        this.price = 0;
        this.unit = "";
    }
    newProduct(code, name, price, unit = "ETH") {
        const p = new nft_1.NFT(code, name, price, unit);
        this.products.push(p);
        return p;
    }
    get allProducts() {
        return this.products;
    }
    productByCode(code) {
        return this.products.find((p) => p.myCode === code);
    }
    productByName(name) {
        return this.products.find((p) => p.myName === name);
    }
    removeBycode(code) {
        const ix = this.products.findIndex((p) => p.myCode === code);
        return this.products.splice(ix, 1);
    }
    // This could include summary stats like average score, etc. For simplicy, just the count for now
    get numberOfProducts() {
        return this.products.length;
    }
}
exports.Products = Products;
