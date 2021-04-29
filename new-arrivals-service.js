class ArrivalsService {
    constructor() {
        if (!ArrivalsService._instance) ArrivalsService._instance = this;
        return ArrivalsService._instance;
    }
    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('new-arrivals.json')).json();
        }
        return this.products;
    }
    async getProductById(id) {
        const products = await this.getProducts();
        return products.find( product => product.id === id );
    }
}
