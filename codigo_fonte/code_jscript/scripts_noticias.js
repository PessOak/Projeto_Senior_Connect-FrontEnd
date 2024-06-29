let breakingImg = document.querySelector("#breakingImg");
let breakingNews_title = document.querySelector("#breakingNews .card-title");
let breakingNews_desc = document.querySelector("#breakingNews .card-text");
let topNews = document.getElementById("topNews");
let sportsNews = document.querySelector("#sportsNews");
let businessNews = document.querySelector("#businessNews");
let techNews = document.querySelector("#techNews");

// fetching news data from website API

const apiKey = "fa8c2ed8a3ae47d38553a237f062de74"
const fetchData = async (category, pageSize) => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize + 10}&apiKey=${apiKey}`
    const data = await fetch("../code_js/noticias.json");
    // const data = await fetch(url);
    const response = await data.json();
    console.log(JSON.stringify(response));
    const result = response[category].articles.filter(article => article.urlToImage != null);
    // const result = response.articles.filter(article => article.urlToImage != null);
    return result.slice(0, pageSize);
}

// adding breaking news

const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} class="card-img-top" alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h3>${data[0].title}</h3></a>`
    breakingNews_desc.innerHTML = `${data[0].description}`
}

fetchData("general", 3).then(add_breakingNews)

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

fetchData("general", 8).then(add_topNews)

// const add_sportsNews = (data) => {
//     let html = ""
//     const perSlide = 3;
//     html += `
//                 <div class="carousel-item active">
//                     <div class="row">
//                         <!-- API here (${index}) -->
//             `

//     data.forEach((element, index) => {
//         if (element.title, length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `
//                     <div class="col-md-4 mb-3">
//                         <div class="card text-center">
//                             <img class="card-img" src="${element.urlToImage}" alt="">
//                             <div class="card-body">
//                                 <div class="card-title">
//                                     <a href=${element.url} target="_blank"><p>${title}</p></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 `

//         if ((index + 1) % perSlide === 0) { // (index) + 1 === 3 || index + 1 === 6 || index + 1 === 9
//             html += `
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <div class="row">
//                     <!-- API here (${index}) -->
//         `
//         }
//     });

//     html += `
//                 </div>
//             </div>
//             `;

//     sportsNews.innerHTML = html;
// }

fetchData("sports", 12).then(data => add_carousel(sportsNews, data));
fetchData("business", 12).then(data => add_carousel(businessNews, data));
fetchData("science", 12).then(data => add_carousel(techNews, data));


// const add_businessNews = (data) => {
//     let html = ""
//     data.forEach((element) => {
//         if (element.title, length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="col col-md-4">
//                     <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
//                     <div class="card-body">
//                         <div class="card-title">Card title
//                             <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     businessNews.innerHTML = html
// }

// fetchData("business", 10).then(add_businessNews)

// const add_techNews = (data) => {
//     let html = ""
//     data.forEach((element) => {
//         if (element.title, length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="col col-md-4">
//                     <img src=${element.urlToImage} class="img-fluid card-img-top" alt="...">
//                     <div class="card-body">
//                         <div class="card-title">Card title
//                             <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     techNews.innerHTML = html
// }

// fetchData("technology", 10).then(add_techNews)

const add_carousel = (parent, data) => {
    let html = ""
    const perSlide = 3;
    html += `
                <div class="carousel-item active">
                    <div class="row">
                        <!-- API here -->
            `

    data.forEach((element, index) => {
        if (element.title, length < 100) {
            title = element.title
        }
        else {
            title = element.title.slice(0, 100) + "..."
        }

        html += `
                    <div class="col-md-4 mb-3">
                        <div class="card text-center">
                            <img class="card-img" src="${element.urlToImage}" alt="">
                            <div class="card-body">
                                <div class="card-title">
                                    <a href=${element.url} target="_blank"><p>${title}</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                `

        if ((index + 1) % perSlide === 0 && (index + 1) < data.length) { // (index) + 1 === 3 || index + 1 === 6 || index + 1 === 9
            html += `
                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <!-- API here -->
        `
        }
    });

    html += `
                </div>
            </div>
            `;

    parent.innerHTML = html;
}
