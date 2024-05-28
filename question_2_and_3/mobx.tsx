import axios from 'axios';
import { makeObservable, observable, action, flow} from 'mobx';

class ProductsStore {
    products = [];
    cartItems = [];
    addresses = [];

    baseURL = 'https://example-api.com';

    constructor() {
        makeObservable(this, {
            products: observable,
            cartItems: observable,
            addresses: observable,
            fetchProducts: flow,
            fetchAddresses: flow,
            addToCart: action,
            removeFromCart: action
        });
    }

    fetchProducts() {
        axios.get(this.baseURL + '/products')
            .then((response) => {
                this.products = response.data;
            })
            .catch((error) => console.error('Error fetching products: ', error));
    }

    fetchAddresses() {
        axios.get(this.baseURL + '/addresses')
            .then((response) => {
                this.addresses = response.data;
            })
            .catch((error) => console.error('Error fetching addresses: ', error));
    }
    
    addToCart(product) {
        this.cartItems.push(product);
    }

    removeFromCart(productId) {
        const index = this.cartItems.findIndex(item => item.id === productId);
        this.cartItems.splice(index, 1);
    }
}

export default new ProductsStore();