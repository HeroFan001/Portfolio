let url = "https://raw.githubusercontent.com/HeroFan001/portfolioJson/refs/heads/main/portfolio.json"

getData(url, renderData)

function renderData(data){
    console.log(data)
    data.forEach(element => {
        document.querySelector(".munkak").innerHTML+=`
        </div>
         <div class="project">
        <img src="${element.photo_url}" alt="">
        <div class="projectDetails">
            <div class="projectTitle">${element.title}</div>
            <p>Témakörök:</p>
             <ul class="topics">${renderTopics(element.topics)}</ul>
            <div class="projectLinks">
                <a href="${element.repo_link}">Github link</a>
                <a href="${element.site_link}">Weboldal link</a>
            </div>
        </div>
         `
    });
}

function renderTopics(arr){
    console.log(arr)
    let liTags = ""
    arr.forEach(element=> {
        liTags+=`<li>${element}</li>`
    })
    console.log(liTags)
    return liTags
}