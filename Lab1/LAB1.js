var products = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, 
	{
	name : "test2",
	price : 30,
	inventory : 80
}
	{
	name : "test3",
	price : 15,
	inventory : 10
}];

class ProductLineItem {
	constructor(product) {
		this.name = product.name;
		this.quantity = 1;
		this.price = product.price * this.quantity;
	}
	
	getName(){
		return this.name;
	}
	getQuantity(){
		return this.quantity;
	}
	getPrice(){
		return this.price;
	}
    setQuantity(quantity){
        this.price /= this.quantity;
        this.quantity = quantity;
        this.price *= this.quantity;
    }
}

var basket = (function(){
	var Basket = [];
    
	return {
		addProduct : function(productID){
            var exists = false;
            
            Basket.forEach(function(item, i, Basket){
                exists = (item.getName() == products[productID].name) ? true : false;            
            });
            if(exists) alert("Product already in basket");
            else Basket[Basket.length] = new ProductLineItem(products[productID]);
		},
		removeProduct : function(productID){
			Basket.forEach(function(item, i, Basket){
                if(item.getName() == products[productID].name) Basket.splice(i, 1);
            })
		},
		updateProductQuantity : function(productID, quantity) {
			Basket.forEach(function(item, i, Basket){
                if(item.getName() == products[productID].name) {
                    item.setQuantity(quantity);
				}
			})
		},
		getTotalPrice : function(){
			var TotalPrice = 0;
            
				Basket.forEach(function(item, i, Basket){
					TotalPrice += item.getPrice();
				})
            return TotalPrice;
		}
	}
})();