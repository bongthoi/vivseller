import namespace_config from '../../config/namespace_config.json';

class Product{
    constructor(id,name,description,image,unit,cost_price,sell_price,sellerID,quantity,categoryID,createDate,priority,enabled){
        this.$class=namespace_config.namespace+".Product";
        this.id=id;
        this.name=name;
        this.description=description;
        this.image=image;
        this.unit=unit;
        this.cost_price=cost_price;
        this.sell_price=sell_price;
        this.quantity=quantity
        this.sellerID=sellerID;
        this.categoryID=categoryID;
        this.createDate=createDate;
        this.priority=priority;
        this.enabled=enabled;
    };
}

module.exports=Product;