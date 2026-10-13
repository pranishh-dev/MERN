let products = [
    {
        "id": "p001",
        "name": "Wireless Ergonomic Mouse",
        "sku": "MS-WRLS-01",
        "category": "Electronics",
        "price": 49.99,
        "currency": "USD",
        "inStock": true,
        "inventoryQuantity": 120,
        "tags": ["office", "accessories", "wireless"],
        "ratings": {
            "average": 4.6,
            "reviewCount": 85
        }
    },
    {
        "id": "p002",
        "name": "Mechanical Gaming Keyboard",
        "sku": "KB-MECH-02",
        "category": "Electronics",
        "price": 89.99,
        "currency": "USD",
        "inStock": true,
        "inventoryQuantity": 45,
        "tags": ["gaming", "peripherals", "rgb"],
        "ratings": {
            "average": 4.8,
            "reviewCount": 312
        }
    },
    {
        "id": "p003",
        "name": "Ultra-Wide 27-inch Monitor",
        "sku": "MN-27UW-03",
        "category": "Electronics",
        "price": 249.99,
        "currency": "USD",
        "inStock": false,
        "inventoryQuantity": 0,
        "tags": ["display", "office", "gaming"],
        "ratings": {
            "average": 4.3,
            "reviewCount": 54
        }
    }
]
let productList = document.createElement("div")
products.forEach(product => {
    let productDetail = document.createElement("p")
    productDetail.textContent = `${product.name} - ${product.price}`

    productList.append(productDetail)
})

let body = document.querySelector("body")
body.append(productList)