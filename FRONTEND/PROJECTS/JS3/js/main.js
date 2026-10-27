API = "https://dummyjson.com/products?limit=0"
CATEGORIES_API = "https://dummyjson.com/products/Categories"

const productsContainer = document.querySelector("#products-container")
const categoryFilters = document.querySelector("#category-filters")

async function fetchProducts(API) {
    try {
        const res = await fetch(API)
        const data = await res.json()
        // console.log(data);
        renderProducts(data.products)
        // console.log(data.categories);
    }
    catch (error) {
        console.log(error);
    }
}

/*{
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": "Essence",
    "sku": "BEA-ESS-ESS-001",
    "weight": 4,
    "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
    },
    "warrantyInformation": "1 week warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 48,
    "meta": {
        "createdAt": "2025-10-09T14:47:01.588Z",
        "updatedAt": "2026-05-23T11:27:41.868Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
} */


function renderProducts(products) {
    productsContainer.innerHTML = ""
    products.forEach(p => {

        const article = document.createElement("article")
        article.className = "bg-white border border-slate-200 rounded-lg p-4 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition"
        article.innerHTML =
            ` 
        <div class="h-48 w-full flex items-center justify-center p-3 mb-4 bg-white">
        <img src="${p.thumbnail}"
              alt="${p.title}" class="max-h-full max-w-full object-contain" loading="lazy">
              </div>
              <div class="flex-grow flex flex-col">
              <span class="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
              ${p.category}
              </span>
              <h2 class="font-semibold text-slate-900 text-sm mb-2 line-clamp-2" title="${p.title}">
              ${p.title}
            </h2>
            <div class="mt-auto pt-2">
            <span class="text-lg font-bold text-slate-900">
             रु${(p.price * 152.54).toFixed(2)}
              </span>
              </div>
              <a href="product-details.html"
              class="mt-4 block w-full text-center bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2 px-4 rounded transition">
              View Details
            </a>
          </div>
    `
        productsContainer.append(article)
    })
}

async function fetchCategories() {
    const res = await fetch(CATEGORIES_API)
    const categories = await res.json()

    renderCategories(categories)
}

function renderCategories(categories) {
    const categoryList = ["All", ...categories]
    categoryList.forEach(c => {
        
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "px-4 py-1.5 rounded-md text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition"

        btn.textContent = (categoryList.indexOf(c) == 0) ? c : c.name;

        categoryFilters.append(btn)
    })
}

function updateCategory() {
    categoryFilters.addEventListener("click", (e) => {
        e.stopPropagation()
        // if (e.target )

        /*<button type="button" class="px-4 py-1.5 rounded-md text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-100 transition">Womens Dresses</button>*/

        let button = e.target.closest("button")
        if (!button) return
        console.log(button);
        console.log(button.textContent);
        button.classList.remove("text-slate-700")
        button.classList.remove("bg-white")
        button.classList.remove("hover:bg-slate-100")
        button.classList.add("text-white")
        button.classList.add("bg-green-500")
    })
}
updateCategory()
fetchProducts(API)
fetchCategories()