let products = {
    data: [
        {
            productName: "Iphone 11",
            category: "Single",
            price: "350",
            image: "./img/iphone11.png",
        },
        {
            productName: "Iphone 12",
            category: "Single",
            price: "450",
            image: "./img/iphone12-1.png",
        },
        {
            productName: "Iphone 12 Pro",
            category: "Pro",
            price: "480",
            image: "./img/iphone12.png",
        },
        {
            productName: "Iphone 13",
            category: "Single",
            price: "350",
            image: "./img/iphone13-1.png",
        },
        {
            productName: "Iphone 13 Pro",
            category: "Pro",
            price: "390",
            image: "./img/iphone13.png",
        },
        {
            productName: "Iphone 13 Pro Max",
            category: "ProMax",
            price: "400",
            image: "./img/iphone13p.png",
        },
        {
            productName: "Iphone 14",
            category: "Single",
            price: "350",
            image: "./img/iphone14.png",
        },
        {
            productName: "Iphone 15",
            category: "Single",
            price: "350",
            image: "./img/iphone15.png",
        },
    ]
}

for(let i of products.data){
    //create card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add("card", i.category, "hide")
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //image
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //products name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container)
    
    document.getElementById("products").appendChild(card)

}

function filterProducts(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value")
    buttons.forEach((button) => {
        // check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else {
            button.classList.remove("active")
        }
        
    })

    //select all cards
    let cards = document.querySelectorAll(".card")
    //loop through all cards 
    cards.forEach((card) => {
        //display  all cards on "all" button click
        if(value == "all"){
            card.classList.remove("hide")
        }
        else{
            if(card.classList.contains(value)) {
                //displays element based on category
                card.classList.remove("hide")
            } else{
                card.classList.add("hide")
            }
        }
    })
}

// Search
const search = document.getElementById("search")

search.addEventListener("click", () => {
    let search_input = document.getElementById("search-input").value;
    let productNames = document.querySelectorAll(".product-name")
    let cards = document.querySelectorAll(".card")

    productNames.forEach((productName, index) => {
        if(productName.innerText.includes(search_input.toUpperCase())){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    })
})

// Initially display all products
window.onload = () => (
    filterProducts('all')
)