const btn=document.getElementsByClassName("enter");
const result=document.getElementsByClassName("data");

const url="https://www.breakingbadapi.com/api/quote/random";

btn[0].addEventListener("click",async function (){


   result[0].innerHTML="loading...";
    try{
        let res= await fetch(url);
        let objet=await res.json();
        //console.log(objet)
        result[0].innerHTML=`
        <h2>Author name:<span>${objet[0].author}<span></h2>
        <h3>Quote:<span>${objet[0].quote}</span></h3>
        <h4>series:<span>${objet[0].series}</span></h4>
        `
    }catch (error){
        console.log(error);
        
    }
});