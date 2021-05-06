// const productsJson = `[
//     {
//         "id": "1",
//         "title": "Adidas Cloudfoam Trainers",
//         "image": "sale-adidas-trainers.jpeg",
//         "price": "60,00"
//     },
//     {
//         "id": "2",
//         "title": "Reebok Workout Shorts",
//         "image": "sale-reebok-shorts.jpeg",
//         "price": "25,00"
//     },
//     {
//         "id": "3",
//         "title": "Puma Fitness Shoes in Grey",
//         "image": "sale-puma-shoes.jpeg",
//         "price": "60,00"
//     },
//     {
//         "id": "4",
//         "title": "Puma Essential Tank Top",
//         "image": "sale-puma-top.jpeg",
//         "price": "43,00"
//     },
//     {
//         "id": "5",
//         "title": "Nike Classic Polo T-Shirt",
//         "image": "sale-nike-t-short.jpeg",
//         "price": "23,00"
//     }
// ]`;

// function renderProducts(products) {
//     const productsContainer = document.querySelector(".sale-list");
//     let html = "";
//     for (const product of products) {
//         html += `<div class="sale-item">
//                         <img src="img/${product.image}" alt="${product.title}">
//                         <a href="#">${product.title}</a>
//                         <p class="price">${product.price}</p>
//                         <button type="button">Add to Cart</button>
//                     </div>`;
//     }
//     productsContainer.innerHTML = html;
// }

// renderProducts(JSON.parse(productsJson));
