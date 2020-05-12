// starting javascript basics


// get the document tag 
function changeText(value) {
    document.getElementById('javascript-demo').textContent = value;

}

// get button 
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const button = function bannerButton(value) {

    document.getElementById('event-btn').addEventListener("click", function () {
        console.log(value);

    });
};
