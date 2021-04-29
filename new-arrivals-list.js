class NewArrivalsList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector('.new-arrivals-list');
      this.productService = new ProductsService();
      this.sortDirection = 'ascending';
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());    
    }
    async renderProducts() {
      let productListDomString = '';
      const products = await this.productService.getProducts();
      [...products]
        .sort( (a, b) => this.sortDirection === 'ascending' 
                           ? a.price - b.price
                           : b.price - a.price)
        .forEach(product => {
            productListDomString += `<div class="new-arrivals-item">
                                            <a href="#"><img src="img/${product.image}" alt="${product.title}"></a>
                                            <a href="#">${product.title}</a>
                                            <p class="price">$${product.price}USD</p>
                                            <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                            data-bs-target="#productInfoModal" data-id="${product.id}">Add to Cart
                                          </button>
                                            <button type="button">Add to Cart</button>
                                    </div>
                                    `;
      });
      this.container.innerHTML = productListDomString;
    }
    async addEventListeners() {
      document
        .querySelectorAll('.product .btn-info')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductInfoClick(event)
          )
        );
      document
        .querySelectorAll(
          '.card.product button.buy, #productInfoModal button.buy'
        )
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
      document.querySelector('.sascort-').addEventListener('click', async () => {
          this.sortDirection = 'ascending';
          await this.renderProducts();
          this.addEventListeners();
      });
      document.querySelector('.sort-desc').addEventListener('click', async () => {
          this.sortDirection = 'descending';
          await this.renderProducts();
          this.addEventListeners();
      });
    }
    async handleProductInfoClick(event) {
      const button = event.target; // Button that triggered the modal
      const id = button.dataset.id; // Extract info from data-* attributes
      const product = await this.productService.getProductById(id);
      const modal = document.querySelector('#productInfoModal');
      const productImg = modal.querySelector('.modal-body .card-img-top');
      productImg.setAttribute('src', 'img/' + product.image);
      productImg.setAttribute('alt', product.title);
      modal.querySelector('.modal-body .card-title').innerText = product.title;
      modal.querySelector('.modal-body .card-text').innerText =
        product.description;
      const btnBuy = modal.querySelector('button.buy');
      btnBuy.innerText = `${product.price} - Buy`;
      btnBuy.dataset.id = id;
    }
    handleProductBuyClick(event) {
      const button = event.target;
      const id = button.dataset.id;
      this.cart.addProduct(id);
      window.showAlert('Product added to cart');
    }
  }
  