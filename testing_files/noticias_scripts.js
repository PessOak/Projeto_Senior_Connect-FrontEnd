let breakingImg = document.querySelector("#breakingImg");
let breakingNews_title = document.querySelector("#breakingNews .card-title");
let breakingNews_desc = document.querySelector("#breakingNews .card-text");
let topNews = document.getElementById("topNews");
let sportsNews = document.querySelector("#sportsNews .newsBox");
let businessNews = document.querySelector("#businessNews .newsBox");
let techNews = document.querySelector("#techNews .newsBox");

// fetching news data from website API

const apiKey = "fa8c2ed8a3ae47d38553a237f062de74"
const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    const result = response.articles.filter(article => article.urlToImage != null);
    return result;
}

// adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} class="card-img-top" alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    breakingNews_desc.innerHTML = `${data[0].description}`
}

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

fetchData("general", 15).then(add_topNews)

const add_sportsNews = (data) => {
    let html = ""
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="col col-md-4">
                    <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-title">Card title
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    sportsNews.innerHTML = html
}

fetchData("sports", 10).then(add_sportsNews)

const add_businessNews = (data) => {
    let html = ""
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="col col-md-4">
                    <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-title">Card title
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    businessNews.innerHTML = html
}

fetchData("business", 10).then(add_businessNews)

const add_techNews = (data) => {
    let html = ""
    data.forEach((element) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `<div class="col col-md-4">
                    <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
                    <div class="card-body">
                        <div class="card-title">Card title
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`
    })
    techNews.innerHTML = html
}

fetchData("technology", 10).then(add_techNews)