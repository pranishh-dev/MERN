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


let body = document.querySelector("body")
let cards = document.querySelector(".cards")



products.forEach(product => {
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    card.innerHTML = ` 
    <img src="${product.imgURL}" alt="">
    <h2>${product.name}</h2>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    `


    let btnRM = document.createElement("button")
    btnRM.textContent = "Remove from Cart"

     let addToCartbtn = document.createElement("button")
    addToCartbtn.textContent = "Add to Cart"

    card.append(btnRM)
    card.append(addToCartbtn)
    cards.append(card)
    body.append(cards)

    //not ideal as we dont add eventlistener to all of the orduct bro usppose there are 10^n products where n>10

    // btnRM.addEventListener("click",(e)=>{
    //     console.log("HI");
    //     console.log(e.target);
    //     // cards.removeChild(card)
    //     card.remove()
    //     console.log(product.name);
    // })


})

//event delegation - aafno kaam aruh lai dine child ko kaam parent lai sampidine

// Event delegation is a JavaScript pattern that attaches a single event listener to a parent element to manage events for multiple child elements

cards.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.target);
    console.log(e.target.tagName);

    //-----------------------
    // for single btn thats remove from cart

    // if (e.target.tagName == "BUTTON") {
    //     e.target.parentElement.remove()
    // }
    //-----------------------

    //-----------------------
    //ideal when multiple buttons

    // if (e.target.textContent === "Remove from Cart" && e.target.tagName == "BUTTON") {
    //     e.target.parentElement.remove()
    // }
    //-----------------------

    //-----------------------
    //ideal when btn isnt direct child of card
    if (e.target.textContent === "Remove from Cart" && e.target.tagName == "BUTTON") {
        e.target.closest(".card").remove()
    }
    // It searches upward from the clicked element and returns the nearest ancestor that matches .card (including the element itself if it matches).
    //-----------------------


})