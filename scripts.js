//Variables
const form = document.querySelector(".form");
const formTweets = document.querySelector("#tweet");
const formButton = document.querySelector(".form__button");
const tweetsList = document.querySelector(".tweets__list");
const ErrorAlert = document.querySelector(".alert");
let tweets = [];

//Event Listeners
formButton.addEventListener("click", validator);


//Funtions
function validator() {
    if(formTweets.value === ""){
        ErrorAlert.classList.remove("d-none");
        setTimeout(() => {
            ErrorAlert.classList.add("d-none");
        }, 5000);
    } else{
        getTweets();
    }
}
function getTweets() {
    let tweetObj = {
        value: formTweets.value,
        id: Date.now()
    }
    tweets = [...tweets, tweetObj];
    form.reset();
    formTweets.focus();
    addHtml(tweetObj);
    removeContent()
}
function addHtml(tweetObj) {
    let newTweet = document.createElement("li");
    newTweet.classList.add("new__item");
    newTweet.setAttribute("id", tweetObj.id);
    newTweet.innerHTML =  `${tweetObj.value}<span class="item__img"></span>`;
    tweetsList.appendChild(newTweet);
}
function removeContent(element) {
    let hola = document.querySelectorAll(".item__img").forEach((item) =>{
        item.addEventListener("click", (e) =>{
            let nene = parseInt(e.target.parentElement.getAttribute("id"));
            e.target.parentElement.remove();    
            return tweets = tweets.filter(tweet => tweet.id !== nene);
        })
    })
}
