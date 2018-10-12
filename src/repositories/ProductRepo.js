import mysqldb_connection from '../utilities/mysqldb_connection';

class ProductRepo {
    constructor() { };
    getAll() { };
    getByID(_productID) { 
        const method="ProductRepo/getByID()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_product  WHERE id=?",[_productID],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+ "-->success");
                    return resolve(result);
                };
            });
        });
    };
    
    getByCategoryID(_categoryID) { };
    getBySellerID(_sellerID) { 
        let method="ProductRepo/getBySellerID()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_product WHERE sellerID=?",[_sellerID],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }   
            });
        });
    };

    getBySellerIDandCategoryID(_sellerID,_categoryID){
        let method="ProductRepo/getBySellerIDandCategoryID()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_product WHERE sellerID=? AND categoryID=?",[_sellerID,_categoryID],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }   
            });
        });
    };

    insert(_product) {
        const method="ProductRepo/insert()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("INSERT INTO tb_product(name,description,image,unit,cost_price,sell_price,sellerID,quantity,categoryID,createDate,priority,enabled) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[_product.name,_product.description,_product.image,_product.unit,_product.cost_price,_product.sell_price,_product.sellerID,_product.quantity,_product.categoryID,_product.createDate,_product.priority,_product.enabled],(error,result)=>{
                if(error){
                    console.log(method+ " -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
     };

    update(_product) { 
        const method="ProductRepo/update()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("UPDATE tb_product SET name=?,description=?,image=?,unit=?,cost_price=?,sell_price=?,sellerID=?,quantity=?,categoryID=?,createDate=?,priority=?,enabled=? WHERE id=?",[_product.name,_product.description,_product.image,_product.unit,_product.cost_price,_product.sell_price,_product.sellerID,_product.quantity,_product.categoryID,_product.createDate,_product.priority,_product.enabled,_product.id],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
    };

    delete(_productID) {
        const method="ProductRepo/delete()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("DELETE FROM tb_product WHERE id=?",[_productID],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(new Error(error));
                }else{
                    console.log(method+" -->success");
                    return resolve(result);
                }
            });
        });
    };
}

module.exports = ProductRepo;