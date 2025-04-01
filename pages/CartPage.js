exports.CartPage = class CartPage{

    constructor(page){
        this.page = page;
        this.noOfProducts = '//*[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductsInCart(productName){
        const productsList = await this.page.$$(this.noOfProducts);
        for(const product of productsList){
            console.log(await product.textContent());
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }
}