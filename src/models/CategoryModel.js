import namespace_config from '../../config/namespace_config.json';

class Category{
    constructor(id,CategoryName,CategoryDes,CreateDate,UpdateDate,CreateUser,UpdateUser,enabled,CategoryImg,CategoryOrder){
        this.$class=namespace_config.namespace+".Category";
        this.id=id;
        this.CategoryName=CategoryName;
        this.CategoryDes=CategoryDes;
        this.CreateDate=CreateDate;
        this.UpdateDate=UpdateDate;
        this.CreateUser=CreateUser;
        this.UpdateUser=UpdateUser
        this.enabled=enabled;
        this.CategoryImg=CategoryImg;
        this.CategoryOrder=CategoryOrder;
    }
}

module.exports=Category;