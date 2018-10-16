import CategoryRepo from '../repositories/CategoryRepo';
import ProductRepo from '../repositories/ProductRepo';

/** */
var categoryRepo=new CategoryRepo();
var productRepo=new ProductRepo();

class CategoryService{
    constructor(){};
    async getAll(){
        const method="CategoryService/getAll()";
        console.log(method+" -->start");

        try {
          let result= await categoryRepo.getAll();
          console.log(method+" -->success");
          return result;  
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);
        }
    };

    async insert(_category){
        let method="CategoryService/insert";
        console.log(method+ " -->start");
        
        try {
            let result=await categoryRepo.insert(_category);
            console.log(method+" -->success");
            return result;
        } catch (error) {
            console.log(method+" -->fail");
            return error;
        }
    };

    async delete(_categoryID){
        const method="CategoryService/delete()";
        console.log(method+" -->start");

        try {
          let result= await categoryRepo.delete(_categoryID);
          console.log(method+" -->success");
          return result;  
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);
        }
    }; 

    async getByUser(_userID){
        const method="CategoryService/getByUser()";
        console.log(method+" -->start");

        try {
          let result= await categoryRepo.getByUser(_userID);
          console.log(method+" -->success");
          return result;  
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);
        }
    };

   async getByID(_categoryID){
        const method="CategoryService/getByID()";
        console.log(method+" -->start");

        try {
          let result= await categoryRepo.getByID(_categoryID);
          console.log(method+" -->success");
          return result;  
        } catch (error) {
            console.log(method+" -->fail");
            return new Error(error);
        }
    };

    async update(_category){
        let method="CategoryService/update";
        console.log(method+ " -->start");
        
        try {
            let result=await categoryRepo.update(_category);
            console.log(method+" -->success");
            return result;
        } catch (error) {
            console.log(method+" -->fail");
            return error;
        }
    };

    async inventory(_userID){
        const method="CategoryService/inventory()";
        console.log(method+" -->start");

        var catetoryList=[];
        try {
          var categories= await categoryRepo.getByUser(_userID);
          var products=await productRepo.getBySellerID(_userID);

          for(var category of categories){
            var Qty=0;
            var Subtotal=0;

            for(var product of products){
                if(category.id==product.categoryID){
                    Qty=Qty+product.quantity;        
                    Subtotal=Subtotal+(product.quantity*product.cost_price);
                }
            }
            catetoryList.push([category.id,category.CategoryName,category.CategoryImg,Qty,Subtotal]);
          }
          console.log(method+" -->success");
          return catetoryList;  
        } catch (error) {
            console.log(method+" -->fail"+error);
            return new Error(error);
        }
    }
        
}

module.exports=CategoryService;