let btn=document.getElementById("btn");
btn.addEventListener("click",() =>{
    fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) =>{
console.log(data);
    })
})