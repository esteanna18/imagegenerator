//accessKey variable

const accessKey ="2eiVPxaxYBACkqDNY0tYOFtd-cY6ewYvBezh7NN1H_w";


//Variable bank
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

//code to fetch images from unsplash

let keyword="";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    //reset search
    if(page === 1){
        searchResult.innerHTML
    }

    //function to display images
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    
    showMoreBtn.style.display = "block";
}

//submit function to load searched for when clicking the button

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})