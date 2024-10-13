var button=document.getElementById("addpopup")
var popupoverley=document.querySelector(".popupoverley")
var popupbox=document.querySelector(".popupbox")
button.addEventListener("click",function()
    {
        popupoverley.style.display="block"
        popupbox.style.display="block"

    }
)
var cancelbutton=document.getElementById("cancelbook")
cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverley.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdiscrp=document.getElementById("bookdiscrp")
addbook.addEventListener("click",function(event){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h3>${bookauthor.value}</h3>
    <p>${bookdiscrp.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     event.preventDefault()
    popupoverley.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event)
{
    event.target.parentElement.remove()
}