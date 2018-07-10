var klossAngeles = ["Kaylen", "Crystal", "Alyssa", "Ilana", "Jenny", "Gianna", "Agatha", "Veronica", "Haley", "Amelie", "Vivian", "Allison", "April", "Dominique", "Tasha"]

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function makePairs(myArray) {
    myArray = myArray.shuffle()
    if (myArray.length % 2 === 0) {
        while (myArray.length > 0) {
            var statement = `${myArray.pop()} and ${myArray.pop()}`
            console.log(statement)
        }
    } else {
       while (myArray.length > 3) {
            var statement = `${myArray.pop()} and ${myArray.pop()}`
            console.log(statement)
        }
        if (myArray.length === 3) {
            var statement = `${myArray.pop()}, ${myArray.pop()}, and ${myArray.pop()}`
            console.log(statement)
        }
    }
}

makePairs(klossAngeles)