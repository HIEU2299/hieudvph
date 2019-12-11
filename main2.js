const array = [
  {
    "id": "81",
    "name": "dat",
    "price": "920.00",
    "image": "http://lorempixel.com/640/480/technics",
    "description": "Regional Creative Producer"
  },
  {
    "id": "82",
    "name": "new product",
    "price": "526.00",
    "image": "http://lorempixel.com/640/480/abstract",
    "description": "Central Usability Agent"
  },
  {
    "id": "83",
    "name": "tesst",
    "price": "594.00",
    "image": "http://lorempixel.com/640/480/sports",
    "description": "Corporate Program Technician"
  },
  {
    "id": "84",
    "name": "Theem",
    "price": "14.00",
    "image": "http://lorempixel.com/640/480/people",
    "description": "Dynamic Data Designer"
  },
  {
    "id": "85",
    "name": "Gorgeous Wooden Shirt",
    "price": "874.00",
    "image": "http://lorempixel.com/640/480/food",
    "description": "Senior Operations Designer"
  },
  {
    "id": "86",
    "name": "Gorgeous Concrete Soap",
    "price": "652.00",
    "image": "http://lorempixel.com/640/480/technics",
    "description": "International Assurance Analyst"
  },
  {
    "id": "87",
    "name": "Awesome Cotton Bacon",
    "price": "810.00",
    "image": "http://lorempixel.com/640/480/food",
    "description": "National Factors Assistant"
  },
  {
    "id": "88",
    "name": "Sleek Concrete Table",
    "price": "333.00",
    "image": "http://lorempixel.com/640/480/animals",
    "description": "Internal Accounts Facilitator"
  },
  {
    "id": "89",
    "name": "Refined Plastic Bacon",
    "price": "723.00",
    "image": "http://lorempixel.com/640/480/sports",
    "description": "Corporate Interactions Orchestrator"
  },
  {
    "id": "90",
    "name": "Handcrafted Concrete Fish",
    "price": "709.00",
    "image": "http://lorempixel.com/640/480/city",
    "description": "Internal Intranet Technician"
  },
  {
    "id": "91",
    "name": "Awesome Cotton Fish",
    "price": "978.00",
    "image": "http://lorempixel.com/640/480/technics",
    "description": "Senior Factors Technician"
  },
  {
    "id": "92",
    "name": "Unbranded Soft Chips",
    "price": "215.00",
    "image": "http://lorempixel.com/640/480/food",
    "description": "Central Solutions Officer"
  },
  {
    "id": "93",
    "name": "Fantastic Plastic Tuna",
    "price": "186.00",
    "image": "http://lorempixel.com/640/480/technics",
    "description": "Dynamic Mobility Strategist"
  },
  {
    "id": "94",
    "name": "Small Frozen Shirt",
    "price": "253.00",
    "image": "http://lorempixel.com/640/480/people",
    "description": "National Assurance Administrator"
  },
  {
    "id": "95",
    "name": "Intelligent Soft Shirt",
    "price": "67.00",
    "image": "http://lorempixel.com/640/480/animals",
    "description": "International Branding Strategist"
  },
  {
    "id": "96",
    "name": "Fantastic Steel Bike",
    "price": "985.00",
    "image": "http://lorempixel.com/640/480/transport",
    "description": "Senior Metrics Analyst"
  },
  {
    "id": "97",
    "name": "Gorgeous Fresh Chicken",
    "price": "903.00",
    "image": "http://lorempixel.com/640/480/fashion",
    "description": "Human Usability Engineer"
  },
  {
    "id": "98",
    "name": "Incredible Wooden Cheese",
    "price": "604.00",
    "image": "http://lorempixel.com/640/480/business",
    "description": "Global Factors Liaison"
  },
  {
    "id": "99",
    "name": "Fantastic Soft Towels",
    "price": "623.00",
    "image": "http://lorempixel.com/640/480/fashion",
    "description": "Future Markets Liaison"
  },
  {
    "id": "100",
    "name": "Ergonomic Fresh Gloves",
    "price": "409.00",
    "image": "http://lorempixel.com/640/480/city",
    "description": "National Assurance Specialist"
  }]

const product = document.querySelector('#products');
if (product) {
  product.innerHTML = array.map(product => {
    return `
            <div class="product">
              <img width="200px" height="200px" src="${product.image}" alt="">
              <h4><a data-id="${product.id}" class="product_link">${product.name}</a><h4>
            </div>
          `
  }).join('')
}
let productlink = document.querySelectorAll('.product_link');
for (let i = 0; i < productlink.length; i++) {
  productlink[i].addEventListener("click", function () {
    localStorage.setItem('id', this.dataset.id);
    // gán thông tin id vào
    window.location.href = "index3.html";
  })
}
function show() {
  const y = localStorage.getItem('id');
  const x = array.find(item => item.id == y);
  document.querySelector(".id").innerHTML = `<h4>ID: ${x.id}</h4>`
  document.querySelector(".name").innerHTML = `<h4>Name: ${x.name}</h4>`
  document.querySelector(".price").innerHTML = `<h4>Price: ${x.price}</h4>`
  document.querySelector(".image").innerHTML = `<h4>Image: ${x.image}</h4>`
  document.querySelector(".description").innerHTML = `<h4>Description: ${x.description}</h4>`
  document.querySelector(".anh").setAttribute('src', x.image);
}
show();