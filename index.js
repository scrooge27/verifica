const express = require("express");
const app = new express;

const fetch = require('node-fetch');

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const port=8080;


app.post("/comments", (req,res)=>{
let d= req.body.domain
fetch(`https://jsonplaceholder.typicode.com/posts/${req.body.id}/comments`)
  .then(response => response.json())
  .then(data =>{
  const l=[]
  let c=0
    data.forEach(j=>{
    l[c]=j.email;
    c+=1 })
  res.send(
ciao = {
a : isin(l,d),
b : isnotin(l,d)
} )
  })
  .catch(err => console.error(err));
 

});

const isin= (a,n) =>{
let counter=0;
for (i = 0; i < a.length; i++) {
if(a[i].search(n)!==-1){
counter++
}
}
return counter;

}


const isnotin= (a,n) =>{
let counter=0;
for (i = 0; i < a.length; i++) {
if(a[i].search(n)===-1){
counter++
}
}
return counter;

}

app.listen(port, () => console.log(`App listening to port ${port}`));