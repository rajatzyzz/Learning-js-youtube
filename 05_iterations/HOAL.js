// for of 

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num);
}

const greeting= "hello world";
for(const greet of greeting){
    //console.log(`Each char is ${greet}`)
}

//Maps : it stores unique value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

// console.log(map);

for (const [key,value] of map) {
    //console.log(key,':',value);
}

const myObject = {
    'game1' : "NFS",
    'game2' : " spiderman"
}

for (const [key,value] of myObject) {
    //console.log(key,':',value);
}

//object are not iteratable ussing for of

