let breakingImg = document.querySelector("#breakingImg");
let breakingNews_title = document.querySelector("#breakingNews .card-title");
let breakingNews_desc = document.querySelector("#breakingNews .card-text");
let topNews = document.getElementById("topNews");
let sportsNews = document.querySelector("#sportsNews .newsBox");
let businessNews = document.querySelector("#businessNews .newsBox");
let techNews = document.querySelector("#techNews .newsBox");
let items = document.querySelectorAll('.carousel .carousel-item')

// fetching news data from website API

const apiKey = "fa8c2ed8a3ae47d38553a237f062de74"
const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    //const data = await fetch("../code_js/noticias.json");
    const data = await fetch(url);
    const response = await data.json();
    //const result = response[category].articles.filter(article => article.urlToImage != null);
    const result = response.articles.filter(article => article.urlToImage != null);
    return result;
}

// adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} class="card-img-top" alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h3>${data[0].title}</h3></a>`
    breakingNews_desc.innerHTML = `${data[0].description}`
}

// fetchData("general1", 5).then(add_breakingNews)
fetchData("general", 5).then(add_breakingNews)


const add_topNews = (data) => {
    let html = ""
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="card">
                    <img src=${element.urlToImage} class="card-img-top" alt="image">
                    <div class="card-body">
                        <div class="card-title"></div>
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        <p class="card-text"></p>
                    </div>
                </div>`
    })
    topNews.innerHTML = html
}

// fetchData("general2", 15).then(add_topNews)
fetchData("general", 15).then(add_topNews)

//NEW CODE

items.forEach((el) => {
    const minPerSlide = 10
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const add_sportsNews = (data) => {
    console.log(JSON.stringify(data));
    let html = ""
    var sport = 1;
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        if (sport <= 4) {
            html += `<div class="carousel-item active">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
                sport++;
        }
        else {
            html += `<div class="carousel-item">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
                sport++;
        }
    })
    sportsNews.innerHTML = html
}

fetchData("sports", 10).then(add_sportsNews)


const add_businessNews = (data) => {
    let html = ""
    var business = 1;
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        if (business = 1) {
            html += `<div class="carousel-item active">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
            business++;
        }
        else {
            html += `<div class="carousel-item">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
            business++;
        }
    })
    businessNews.innerHTML = html
}

fetchData("business", 10).then(add_businessNews)


const add_techNews = (data) => {
    let html = ""
    var tech = 1;
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        if (tech = 1) {
            html += `<div class="carousel-item active">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
                tech++;
        }
        else {
            html += `<div class="carousel-item">
            <div class="col-md-3">
                 <div class="card">
            <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">
                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
            </div>
        </div>
        </div>`
                tech++;
        }
    })
    techNews.innerHTML = html
}

fetchData("technology", 10).then(add_techNews)