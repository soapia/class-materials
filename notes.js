// let's define some veriables son:
var myAge = 17 // this is a variable that can be changed
const myBirthdate = '09/21' // this is a variable that cannot be changed

// concatenation is pretty straight forward:
var meme = 'I love' + 'this song'

// interpolation is a wee bit more complicated,, you have to use the ` ` quotes above the tab key:
"I am ${myAge} years old" // ya so this won'd cut it
'I am ${myAge} years old' // neither will this
`I am ${myAge} years old` // BINGOOOO

// string methods are Quite different from ruby,, worlds biggest frowny face:
meme.toUpperCase() // will change string to all caps
meme.toLowerCase() // will change it to all lowercase

// this specific method trips me tf UP. you don't have to split strings for them to be interpreted as an array:
meme[0] // will return the first letter of the string
meme.charAt(0) // will do the same, hence the char at

// mathwise, its pretty typical except that there's a sole number class
// order of operations exists, yada yada yadaaaaa
// but incrementing by 1 is ++ instead of += 1
myAge++ // would add one after returning it again
++myAge // would add one before
// this is the same with -- and subtracting incrementally

// that's only for 1 though...... for every other number / operation its the same as ruby:
myAge += 10
myAge /= 10
myAge *= 10
myAge %= 10 // i mean i don't see how this last one coud be useful but whatevs
myAge **= 10 

// if u don't define ur variable first though, it'll return NaN, or not a number, kinda like undefined
Number.isInteger(8) // will return t or f based on its truth
Number.isFinite(Infinity)
Number.isNaN(myAge)

// converting data types is always a fun time
Number.parseInt('7', 10) // first argument is the number to b converted, second is the base system
Number.parseFloat('3.14') // same as above without the base

// math methods are lit too
Math.ceil(0.5) // round up
Math.floor(0.5) // round down
Math.round(0.5) // round like a h00man
Math.max(1, 2, 3, 4, 5) // find le max
Math.min(1, 2, 3, 4, 5) // find le min
Math.random() // rando btw 0 and 1
Math.floor(Math.random() * 10) + 1

// and you can return stuff IN FUNCTION like you return instead of puts in ruby
return "hey what's up hello"

// let's format some if statements:
if (myAge == 2) {
    console.log('omg i`m two') 
    myAge++
} else if (myAge == 17) {
console.log('omg i`m 17') 
myAge++
} else {
    myAge++
}

// arrays are kinda the same as ruby......
const myFriends = ["may","natalie","paige"]
myFriends.length // will return the length
myFriends.push("hana") // will add name to the end 
myFriends.unshift("hannah") // will add name to the beginning
myFriends.pop() // will remove the last name
myFriends.shift() // will remove the first
myFriends[1] // will return the second item

 // hashes are called objects. yuck.
const celebCrushes = {
    sofia: "Zac Efron",
    hana: "Shawn Mendes"
}

celebCrushes.sofia // will return zac
celebCrushes['sofia'] // same thing

// DOM DOM DOM, DOMDOMDOM, DOMDOMDOM
document.querySelector('h1') // will return first h1 in the doc
document.querySelectorAll('p') // will return all p's in the doc
document.getElementById('myId') // will return elements with that id
let element = document.getElementById('myId')
element.children[0] // will return the first child element within the id
element.innerHTML // this will access the actual text,, you can edit this too!!

// event listeners!! 
const main = document.querySelector('#main')
 main.addEventListener('click', function(event) { // will do this thing when clicked
  alert('I was clicked!') // an alert!
})
// other common events are change, 'keydown', 'keyup', 'load', 'mouseover', 'mouseout'
const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  console.log(e.which) // .which tells us which key was clicked
})
