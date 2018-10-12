import mysqldb_connection from '../utilities/mysqldb_connection';

class CategoryRepo{
    constructor(){};
    getAll(){
        let method="CategoryRepo/getAll()";
        console.log(method + " -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_category",(error,result)=>{
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
            mysqldb_connection.query("INSERT INTO tb_category(CategoryName,CategoryDes,CreateDate,UpdateDate,CreateUser,UpdateUser,enabled,CategoryImg,CategoryOrder) VALUES(?,?,?,?,?,?,?,?,?)",[_category.CategoryName,_category.CategoryDes,_category.CreateDate,_category.UpdateDate,_category.CreateUser,_category.UpdateUser,_category.enabled,_category.CategoryImg,_category.CategoryOrder],(error,result)=>{
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
            mysqldb_connection.query("DELETE FROM tb_category WHERE id=?",[_categoryID],(error,result)=>{
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

    getByUser(_userID){
        let method="CategoryRepo/getByUser()";
        console.log(method + " -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_category WHERE CreateUser=? ORDER BY CategoryOrder ASC",[_userID],(error,result)=>{
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

    getByID(_categoryID){
        let method="CategoryRepo/getByID()";
        console.log(method + " -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("SELECT * FROM tb_category WHERE id=?",[_categoryID],(error,result)=>{
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

    update(_category){
        const method="CategoryRepo/update()";
        console.log(method+" -->start");

        return new Promise((resolve,reject)=>{
            mysqldb_connection.query("UPDATE tb_category SET CategoryName=?,CategoryDes=?,CreateDate=?,UpdateDate=?,CreateUser=?,UpdateUser=?,enabled=?,CategoryImg=?,CategoryOrder=? WHERE id=?",[_category.CategoryName,_category.CategoryDes,_category.CreateDate,_category.UpdateDate,_category.CreateUser,_category.UpdateUser,_category.enabled,_category.CategoryImg,_category.CategoryOrder,_category.id],(error,result)=>{
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

module.exports=CategoryRepo;