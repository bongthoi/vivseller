import ProductRepo from '../repositories/ProductRepo';

/** */
var productRepo = new ProductRepo();

class ProductService {
    constructor() { };
    getAll() { };
    async getByID(_productID) {
        const method = "ProductService/getByID()";
        console.log(method + " -->start");

        try {
            let result = await productRepo.getByID(_productID);
            console.log(method + " -->success");
            return result[0];
        } catch (error) {
            console.log(method + " -->fail");
            return new Error(error);
        }
    };
    getByCategoryID(_categoryID) { };

    async getBySellerID(_sellerID) {
        const method = "ProductRepo/getBySellerID()";
        console.log(method + " -->start");

        try {
            let result = await productRepo.getBySellerID(_sellerID);
            console.log(method + " -->success");
            return result;
        } catch (error) {
            console.log(method + " -->fail");
            return new Error(error);
        }
    };

    async getBySellerIDandCategoryID(_sellerID, _categoryID) {
        const method = "ProductRepo/getBySellerIDandCategoryID()";
        console.log(method + " -->start");

        if (_categoryID == 0) {
            try {
                let result = await productRepo.getBySellerID(_sellerID);
                console.log(method + " -->success");
                return result;
            } catch (error) {
                console.log(method + " -->fail");
                return new Error(error);
            }
        } else {
            try {
                let result = await productRepo.getBySellerIDandCategoryID(_sellerID, _categoryID);
                console.log(method + " -->success");
                return result;
            } catch (error) {
                console.log(method + " -->fail");
                return new Error(error);
            }
        }


    };

    async insert(_product) {
        const method = "ProductService/insert()";
        console.log(method + " -->start");

        try {
            let result = await productRepo.insert(_product);
            console.log(method + " -->success");
            return result;
        } catch (error) {
            console.log(method + " -->fail");
            return new Error(error);
        }
    };
    async update(_product) {
        const method = "ProductService/update()";
        console.log(method + " -->start");
        try {
            let result = await productRepo.update(_product);
            console.log(method + " -->success");
            return result;
        } catch (error) {
            console.log(method + " -->fail");
            return new Error(error);
        }
    };

    async delete(_productID) {
        const method = "ProductService/delete()";
        console.log(method + " -->start");

        try {
            console.log(method + " -->success");
            let result = await productRepo.delete(_productID);
            return result;
        } catch (error) {
            console.log(method + " -->fail");
            return new Error(error);
        }
    };
}

module.exports = ProductService;