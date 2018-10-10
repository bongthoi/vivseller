import connection from '../utilities/mysqldb_connection';

class CategoryRepo{
    constructor(){};
    getAll(){
        let method="CategoryRepo/getAll()";
        console.log(method + " -->start");

        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM tb_category",(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(error+"");
                }else{
                    console.log(method+ " -->success");
                    return resolve(result);
                }
            });
        });
    };
    
    insert(_category){
        const method="CategoryRepo/insert()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            connection.query("INSERT INTO tb_category(CategoryName,CategoryDes,CreateDate,UpdateDate,CreateUser,UpdateUser,enabled,CategoryImg,CategoryOrder) VALUES(?,?,?,?,?,?,?,?,?)",[_category.CategoryName,_category.CategoryDes,_category.CreateDate,_category.UpdateDate,_category.CreateUser,_category.UpdateUser,_category.enabled,_category.CategoryImg,_category.CategoryOrder],(error,result)=>{
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

    delete(_categoryID){
        let method="CategoryRepo/delete()";
        console.log(method + " -->start");

        return new Promise((resolve,reject)=>{
            connection.query("DELETE FROM tb_category WHERE id=?",[_categoryID],(error,result)=>{
                if(error){
                    console.log(method+" -->fail");
                    return reject(error+"");
                }else{
                    console.log(method+ " -->success");
                    return resolve(result);
                }
            });
        });
    };
    getByID(_categoryID){};
    update(_category){};
    

}

module.exports=CategoryRepo;