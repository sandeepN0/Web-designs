const url = 'https://restcountries.com/v2/all'

async function getAllCountries() {
    //await - it is used to wait untill api return promise(always use inside async)
    const response = await fetch(url)
    const data = await response.json()
     data.map(n => {
         document.getElementById('con').innerHTML += `<li>${n.name} : ${n.capital}</li>`

     })
    data.map(pop => {
        document.getElementById('list').innerHTML += `<li>${pop.name}  :  ${pop.population}</li>`
    })
}

const a =[
    {
        "name":"Harry Potter",
         "city":"London"
    },
    {
        "name":"Don Quixote",
        "city":"Madrid"
    },
    {
        "name":"Joan of Arc",
        "city":"Paris"
    },
    {
        "name":"Rosa Park",
        "city":"Alabama"
    },
    {
        "name":"John",
        "city":" Paris"
    }

    ]	
      
    //To print all the names in x
    a.map(names => {
        document.getElementById('namelist').innerHTML += `<ul> ${names.name} </ul>`
    })
    
    //To print usernames of city london
    a.map(city => {
        if(city.city == "London"){
            document.getElementById('filterlondon').innerHTML = `<p> ${city.name}</p>` 
        }  
    })


const freefakeapi1 = 'https://jsonplaceholder.typicode.com/posts'
const freefakeapi2 = 'https://fakestoreapi.com/products'
const freecats = 'https://api.thecatapi.com/v1/breeds'

async function freefakeapi(){
const fapi = await fetch(freefakeapi1)


const fapidata = await fapi.json();


//To get all the users with user id 1
let car = fapidata.filter(fapidata => fapidata.userId === 1);
//Insert all the objects as rows into a table using DOM
var table = document.getElementById('fapitable')
car.forEach(function(a){
        var row = `<tr>
                    <td>${a.userId}</td>
                    <td>${a.id}</td>
                    <td>${a.title}</td>
                    <td>${a.body}</td>
                    </tr>`
        table.innerHTML += row
    })

}
async function freefakestore(){
const fapi1 = await fetch(freefakeapi2)
const fapidata1 = await fapi1.json();
arrayfreefakeapi = []

fapidata1.forEach(function(fapidata1){
    if(fapidata1.price >= 100){
        document.getElementById('prices').innerHTML += `<li> Product Name:  ${fapidata1.title} :- &nbsp; Price: ${fapidata1.price} </li>`
    }
    arrayfreefakeapi.push(fapidata1.title)
})
document.getElementById('productnames').innerHTML += `<li> ${arrayfreefakeapi.sort()} </li><br>`  
}

async function fakeapicats(){
const frapi = await fetch(freecats)
const fapidata3 = await frapi.json();


arrayfreefakeapi2 = []
fapidata3.forEach(function(fapidata3){
    arrayfreefakeapi2.push(fapidata3.name)

   if(fapidata3.country_codes === "US"){
    document.getElementById('cats1').innerHTML += `<li> ${fapidata3.name} </li>`
}

   
   
})
document.getElementById('cats').innerHTML += `<li> ${arrayfreefakeapi2.reverse()} </li>`

} 
freefakestore();
getAllCountries();
freefakeapi();
fakeapicats();