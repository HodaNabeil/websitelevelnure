 let slidersImges = Array.from (document.querySelectorAll(".silder_container img"));

let  sliderCount = slidersImges.length;

let indicators =document.querySelector(".indicators");

let currentIndex = 1;
// Handle Click on Previous and Next Buttons

let PreviousButton =document.querySelector(".prev");

let nextButton = document.querySelector(".next");

PreviousButton.onclick =prevSlider;
nextButton.onclick= nextSlider;

// Create The Main UL Element and pagintion

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

paginationElement.className="indicators_Elment";

let paginationCreatedul= document.querySelector(".indicators_Elment");


for(let i =1 ; i<=sliderCount ; i++){
    let paginationItems = document.createElement("li");
    paginationItems.setAttribute("data-index",i)
    paginationItems.appendChild(document.createTextNode((i)));
    paginationElement.appendChild(paginationItems);

}
indicators.appendChild(paginationElement);

let paginationCreatedulArry = Array.from(document.querySelectorAll(".indicators_Elment li"));

for(let i = 0 ; i<paginationCreatedulArry.length ; i++) {
    paginationCreatedulArry[i].onclick = function () {
        currentIndex = parseInt((this.getAttribute("data-index")));   
        thecheck();
    };
}

thecheck()
//function theCheck imges 
function  thecheck() {
    removall()
    slidersImges[currentIndex - 1].classList.add("active");
    document.querySelector(".indicators_Elment").children[ currentIndex -1 ].classList.add("active");
    //check previousButton
    if(currentIndex == 1) {
        PreviousButton.classList.add("disabled");
    }else{
        PreviousButton.classList.remove("disabled");
    }
    //checkl nextButton
    if(currentIndex == sliderCount) {
        nextButton.classList.add("disabled");
    }else{
        nextButton.classList.remove("disabled");
    }

}

function removall() {

    slidersImges.forEach((img)=> {
        img.classList.remove('active')
    });
    paginationCreatedulArry.forEach((li) => {
        li.classList.remove("active")
    });

};

function prevSlider() {
    if(PreviousButton.classList.contains("disabled")){
        return false
    }else{
        currentIndex--;
        thecheck()
    }

};
function nextSlider() {
    if(nextButton.classList.contains("disabled")){
        return false
    }else{
        currentIndex++;
        thecheck()
    }
};

