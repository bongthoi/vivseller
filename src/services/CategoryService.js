import CategoryRepo from '../repositories/CategoryRepo';

/** */
var categoryRepo=new CategoryRepo();

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
    getByID(_categoryID){};
    update(_category){};
        
}

module.exports=CategoryService;