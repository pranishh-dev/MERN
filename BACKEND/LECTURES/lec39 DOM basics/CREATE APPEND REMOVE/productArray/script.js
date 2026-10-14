let products = [
    {
        "imgURL": "https://picsum.photos/100",
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
        "imgURL": "https://picsum.photos/100",
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
        "imgURL": "https://picsum.photos/100",
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


//--------------------------------------------------------------
// cards add:
// not so ideall
/*div id="cards">
        <div class="card" id="card1">
            <h2>Iphone</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut quasi pariatur natus officiis enim vel molestias sint voluptatibus aperiam voluptatum odio architecto nisi dicta voluptates neque error fuga voluptatem id nesciunt inventore, adipisci accusamus atque. Porro neque, deleniti maxime, doloribus rerum ex asperiores dolorum fuga maiores quis pariatur veniam!</p>
        </div>
    </div>
    */

// let cards = document.createElement("div")
// let card = document.createElement("div")
// let h2 = document.createElement("h2")
// let p = document.createElement("p")

// h2.textContent = "Iphone"
// p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut quasi pariatur natus officiis enim vel molestias sint voluptatibus aperiam voluptatum odio architecto nisi dicta voluptates neque error fuga voluptatem id nesciunt inventore, adipisci accusamus atque. Porro neque, deleniti maxime, doloribus rerum ex asperiores dolorum fuga maiores quis pariatur veniam!"
// card.append(h2, p)
// cards.append(card)

// cards.setAttribute("id", "cards")
// card.setAttribute("class", "card")

// body.append(cards)


// ?same baat as above but with a loop for evth
let cards = document.createElement("div")
products.forEach(product => {
    let card = document.createElement("div")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    h2.textContent = product.name
    p.textContent = product.price
    card.append(h2, p)
    cards.append(card)

    cards.setAttribute("class", "cards")
    card.setAttribute("class", "card")

    body.append(cards)
})

//--------------------------------------------------------------
// ?ideal baat
let cards2 = document.createElement("div")
cards2.setAttribute("class", "cards")

products.forEach(product => {
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    card.innerHTML = ` 
    <img src="${product.imgURL}" alt="">
    <h2>${product.name}</h2>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    `

    cards2.append(card)
    body.append(cards2)
})