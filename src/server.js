const express = require("express");
const app = express();

app.use(express.static("src/public"));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: app,
    noCache: true
});

const products = [
    {
        id: 1,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239261-1000-1000/Tenis-adidas-Supertar-Branco.jpg?v=637408718607230000",
        title: "Tênis adidas Superstar",
        price: "479,00",
    },
    {
        id: 2,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239317-1000-1000/Tenis-Nike-Court-Vintage-Prem-Masculino-Branco.jpg?v=637408830393030000",
        title: "Tênis Nike Court Vintage Prem",
        price: "379,00",
    },
    {
        id: 3,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239242-1000-1000/Tenis-adidas-Ultraboost-20-Prm-Masculino-Multicolor.jpg?v=637407844432400000",
        title: "Tênis adidas Ultraboost 20 Prm",
        price: "899,00",
    },
    {
        id: 4,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239267-380-380/Tenis-Nike-Air-Force-1-07-Lv8-Masculino-Preto.jpg?v=637408722571600000",
        title: "Tênis Nike Air Force 1 07 LV8",
        price: "699,00",
    },
    {
        id: 5,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239181-380-380/Tenis-adidas-NMD-R1-Masculino-Multicolor.jpg?v=637407226736800000",
        title: "Tênis adidas NMD R1",
        price: "699,00",
    },
    {
        id: 6,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239280-380-380/Tenis-Nike-Air-Max-97-Masculino-Multicolor.jpg?v=637408729761670000",
        title: "Tênis Nike Air Max 97",
        price: "799,00",
    },
    {
        id: 7,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/239348-380-380/Tenis-Nike-Air-Max-95-Essential-Masculino-Branco.jpg?v=637411461895500000",
        title: "Tênis Nike Air Max 95 Essential",
        price: "749,00",
    },
    {
        id: 8,
        img: "https://authenticfeet.vteximg.com.br/arquivos/ids/238692-380-380/Tenis-adidas-ZX-2K-Boost-Masculino-Azul.jpg?v=637394227985770000",
        title: "Tênis adidas ZX 2K Boost",
        price: "479,00",
    },
]

app.get('/', (req, res) => {
        const productIndex = products.find(item => item.id == 1);
        console.log(productIndex);
    res.render("index.html", {product: products})
});

app.get('/register', (req, res) => {
    res.render("register.html")
});

app.get('/login', (req, res) => {
    res.render("login.html")
});

app.get('/cart', (req, res) => {
    res.render("cart.html")
});

app.get('/product', (req, res) => {
    res.render("product.html")
});

app.listen(3000, () => {
    console.log("Server is running ...")
})