const names = ["Paul","Michal", "Arek", "Matylda", "Magda","John","Suzy","Beata"]

//verifylength
console.log(names.length)

//access to arrays element
console.log(names[2]);
names.forEach(element => {
    console.log(element)
});

//modify element
names[3]="Gosia"
console.log(names);

//adding element
names.push("Monika");
console.log(names);

//Remove last element
names.pop();
console.log(names);

// remove first element
names.shift()
console.log(names);

//adding element to first place
names.unshift("Marian")
console.log(names);

//Remove a specific element from arrray
const indexElement = names.indexOf("Marian")
names.splice(indexElement, 1)
console.log(names)

//Convert array to string
const string = names.join(" => \t");
console.log(string);

//reverse array
console.log(names.reverse());

//sortowanie
console.log(names.sort());

//mapowanie elementow tablicy
names.map(name => {
    if(name.length>4)
    {console.log(name + " " + name.length)}
    else {
        console.log(name + " ma mniej niz 5 znakw");
    }
})

//concat arrays
const names2 = ["Piotr", "Iwona", "henryk", "Agata"]
const names3 = names.concat(names2)
console.log(names);
console.log(names2);
console.log(names3);