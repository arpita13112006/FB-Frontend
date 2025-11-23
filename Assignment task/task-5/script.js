const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Book: JavaScript Guide", category: "books" },
    { name: "Book: HTML & CSS", category: "books" },
    { name: "Shoes", category: "clothing" },
    { name: "Smartwatch", category: "electronics" }
];

const list = document.getElementById("productList");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".filter-btn");

// Show products on UI
function showProducts(items) {
    list.innerHTML = "";
    items.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} (${p.category})`;
        list.appendChild(li);
    });
}

// Initial display
showProducts(products);

// Category filter
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        if (category === "all") {
            showProducts(products);
        } else {
            const filtered = products.filter(item => item.category === category);
            showProducts(filtered);
        }
    });
});

// Search filter
search.addEventListener("input", function () {
    const text = this.value.toLowerCase();

    const filtered = products.filter(item =>
        item.name.toLowerCase().includes(text)
    );

    showProducts(filtered);
});

