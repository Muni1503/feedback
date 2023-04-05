 const btnEl=document.getElementById("btn");
 const jokeEl=document.getElementById("Joke");
 const apikey="vY92krC9CvW13G4LBrlYriA5bVI75zh8X3UtemAu";

 const options= {
    method: "GET",
    headers:{
        "X-Api-Key": apikey,
    },
 };

 const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
 async function getJoke(){
   try
   {
     jokeEl.innerText="updating..";
    btnEl.disabled=true;
    btnEl.innerText="loading..";
    const response = await fetch(apiURL,options);
    const data= await response.json();
    jokeEl.innerText=data[0].joke;
    btnEl.disabled=false ;
    btnEl.innerText="Tell Me a Joke";
 }catch(error){
    jokeEl.innerText="an error occured.please try again later";
    btnEl.disabled=false ;
    btnEl.innerText="Tell Me a Joke";
    console.log(error);
 }
}
 btnEl.addEventListener("click",getJoke);