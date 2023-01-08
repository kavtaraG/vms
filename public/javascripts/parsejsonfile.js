
fetch('/store.json')
.then((res) => res.json())
.then((products) => {
    let placeholder = document.getElementById('.product-data');
    let out = '';
    for(let product of products){
        out += `

            <tr>
                <td>${products.brand}</td>
                <td>${products.purpose}</td>
                <td>>${products.origin}</td>
                <td>${products.in_stock}</td>
                <td><${products.price}/td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;

})

module.exports = price;