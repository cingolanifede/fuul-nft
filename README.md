# fuul-nft

# Fuul Code Challenge

#### Fuul is helping one of their projects that runs an NFT marketplace which sells (only) 3 products:

```
Code         | Name                |  Price
-------------------------------------------------
APE          | Bored Apes          |   75 ETH
PUNK         | Crypto Punks        |   60 ETH
MEEBIT       | Meebits             |    4 ETH
```

They are offering the following discounts:

- The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on APE items.

- The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more PUNK items, the price per unit should be 50 ETH.

The NFT marketplace's checkout process allows for items to be scanned in any order, and should return the total amount to be paid. The interface for the checkout process looks like this (ruby):

```co = Checkout.new(pricing_rules)
co.scan("APE")
co.scan("APE")
co.scan("PUNK")
price = co.total
```

Using ruby, node, go or JAVA, implement a checkout process that fulfills the requirements.

```
Items: APE, PUNK, MEEBIT
Total: 139 ETH

Items: APE, PUNK, APE
Total: 135 ETH

Items: PUNK, PUNK, PUNK, APE, PUNK
Total: 275 ETH

Items: APE, PUNK, APE, APE, MEEBIT, PUNK, PUNK
Total: 304 ETH
```

#### The code have:

- Discount Rules can be added to allow more complex and scalable posibilities. You can define paramenter depending the code, discountPrice, etc.
- Product can be added to allow more complex and scalable posibilities. You can whatever product you can and associate it to a discount rule.

#### Disclaimer:
- The above is hardcoded, so to add new ones you will need to do it by and, pushing a new item in the arrays. TODO: create an interface to do it
- Inputs too. For testing and developing pourposes was did this way. TODO: create a better way, perhaps an api.

```
## To install all dependencies
* npm i  

## To run the code 
* npm start

##  Testing input should be:
* ["APE", "PUNK", "MEEBIT"];
* ["APE", "PUNK", "APE"];
* ["PUNK", "PUNK", "PUNK", "APE", "PUNK"];
* ["APE", "PUNK", "APE", "APE", "MEEBIT", "PUNK", "PUNK"];

## To run test
* npm test
```
