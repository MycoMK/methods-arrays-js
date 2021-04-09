
console.log('connected');

const names =['Mark','Ronny','Will','Terry','Henry','Elvies','Emilly','Alexsandra'];
const  age = [45,56,80,14,34,16,20,25]

const items = [
    {name: 'bike',  price: 100},
    {name: 'Tv',  price: 200},
    {name: 'Album',  price: 10},
    {name: 'Book',  price: 5},
    {name: 'Phone',  price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25},
    
]

document.getElementById('app').innerHTML = ('js project creating an app');
app.style.background = 'pink'
app.style.padding = '25px'


 

// less than $100 filterMethod

const products = items.filter(function(item){
    return item.price <= 100
})
 console.log(products)

//  mapMethod

const itemNames = items.map(function(item){
    return item.name
})
console.log(itemNames)

// findMethod

const itemsFound = items.find(function(item){
    return  item.name === 'Phone'
})
console.log(itemsFound)

// froEach

listItems = items.forEach(function(found){
console.log(found.name)
console.log(found.price)
})

//  someFunction

const nonExpensiveItems = items.some(function(notExpensive){
    return notExpensive.price <=0
})
console.log(nonExpensiveItems)


// everyMethod
const checkItems = items.every(function(allItems){
    return allItems.price <=1000
})
console.log(checkItems)


// reduceMethod adding all the prices together

const total = items.reduce(function(currentTotal, items){
return items.price + currentTotal
}, 0)

console.log(total)

// includesMethod

const people = age.includes(16)
console.log(people)



