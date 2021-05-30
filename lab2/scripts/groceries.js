var products = [
    {
          name: "Milk",
          lactose: false,
          nut: true,
      organic: false,
      none: true,
          price: 2.99
      },
      {
          name: "Organic Apple",
          lactose: true,
          nut: true,
      organic: true,
      none: true,
          price: 3.99
      },
      {
          name: "Organic Banana",
          lactose: true,
          nut: true,
      organic: true,
      none: true,
          price: 3.99
      },
      {
          name: "Vegetables",
          lactose: true,
          nut: true,
      organic: false,
      none: true,
          price: 4.99
      },
      {
          name: "Juice",
          lactose: true,
          nut: true,
      organic: false,
      none: true,
          price: 5.99
      },
    {
          name: "Bread",
          lactose: true,
          nut: true,
      organic: false,
      none: true,
          price: 5.99
      },
    {
          name: "Almond Milk",
          lactose: false,
          nut: false,
      organic: false,
      none: true,
          price: 5.99
      },
    {
          name: "Organic Vegetables",
          lactose: true,
          nut: true,
      organic: true,
      none: true,
          price: 7.99
      },
      {
          name: "Organic Nuts",
          lactose: true,
          nut: false,
      organic: true,
      none: true,
          price: 9.99
      },
    {
          name: "Mixed Nuts",
          lactose: true,
          nut: false,
      organic: false,
      none: true,
          price: 9.99
      },
    {
          name: "Salmon",
          lactose: true,
          nut: true,
      organic: false,
      none: true,
          price: 19.99
      }
  ];
      
  
  
  // given restrictions provided, make a reduced list of products
  // prices should be included in this list, as well as a sort based on price
  
  function restrictListProducts(prods, s1, s2, s3, s4) {
      let product_names = [];
  
      for (let i=0; i<prods.length; i+=1) {
          if (!(s1 && !prods[i].lactose) && !(s2 && !prods[i].nut) && !(s3 && !prods[i].organic) && !(s4 && !prods[i].none)){
        product_names.push(prods[i].name + " - $" + prods[i].price);
      }
  
    }
      return product_names;
  }
  
  // Calculate the total price of items, with received parameter being a list of products
  function getTotalPrice(chosenProducts) {
      totalPrice = 0;
    for (let j=0; j<chosenProducts.length; j+= 1){
      for (let i=0; i<products.length; i+=1) {
          if (chosenProducts[j] == (products[i].name + " - $" + products[i].price) ){
              totalPrice += products[i].price;
          }
      }
    }
  
      
      return totalPrice;
  }