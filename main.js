let url = "https://raw.githubusercontent.com/HeroFan001/portfolioJson/refs/heads/main/portfolio.json"

getData(url, renderData)

function renderData(data){
    console.log(data)
    data.forEach(element => {
        document.querySelector(".munkak").innerHTML+=`
        <div class="projects">
            <div class="kep1">
                <img src="${element.photo_url}" alt="" class="project_img">
            </div>
         <div class="temak">
                <h1 class="title">${element.title}</h1>
                <ul class="topics">${renderTopics(element.topics)}</ul>
                <p class="repo_link">${element.repo_link}</p>
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