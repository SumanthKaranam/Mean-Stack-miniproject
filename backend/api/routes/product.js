const ProductList = require("../../models/productList");
const Cart = require("../../models/cart");

module.exports = function (router) {
  //ProductList
  router.get("/getProductList", function (req, res) {
    ProductList.find({}, (err, products) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!products) {
          res.json({ success: false, message: "No Product items found" });
        } else {
          res.json(products);
        }
      }
    });
  });
  router.get("/getCartList", function (req, res) {
    Cart.find({}, (err, products) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!products) {
          res.json({ success: false, message: "No Product items found" });
        } else {
          res.json(products);
          console.log(products)
        }
      }
    });
  });
  //for Individual product
  router.get("/getProduct/:id", function (req, res) {
    ProductList.findById((req.params.id), (err, product) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!product) {
          res.json({ success: false, message: "No Product items found" });
        } else {
          res.json(product);
        }
      }
    });
  });
  //cart
  router.post("/addToCart", function (req, res) {
    Cart.find({}, (err, products) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!products) {
          res.json({ success: false, message: "No Product items found" });
        } else {
          let allproducts=products
          let result=allproducts.find(value=>value.id==req.body.id)
         if (result!=undefined){
          for(let i=0;i<allproducts.length;i++){
            if(allproducts[i].id==req.body.id){
              let id=req.body.id
              allproducts[i].quantity=allproducts[i].quantity+req.body.quantity
              let changequantity=allproducts[i].quantity
              allproducts[i].totalprice=allproducts[i].quantity*req.body.price
              let changetotalprice=allproducts[i].totalprice
              Cart.updateMany({id},{quantity:changequantity,totalprice:changetotalprice}).exec()
            }
          }
         } else {
          let productItems = new Cart(req.body);
          productItems.save(function (err, productItems) {
            if (err) {
              return res.status(400).json(err);
            }
            res.status(200).json(productItems);
          });
         }
        }
      }
    });
  });
};
