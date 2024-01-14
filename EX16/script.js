// declaring an array
let num = [5, 1, 3, 7]

// showing it
console.log(num)

// jump line
console.log(``)

// showing another way
console.log(`The array is ${num}`)

// changing values
num[3] = 9

//showing it
console.log(`The array after changing a value is now ${num}`)

// adding a new value after the last position
num.push(7)

// showing it
console.log(`The array after adding a new index and value is ${num}`)

// deleting the last position
num.pop()

// showing it
console.log(`The array deleting the last index is ${num}`)

// showing array length
console.log(`The array length is ${num.length}`)

// organizing in ascending order
num.sort()

// showing values organized in ascending order
console.log(`The array in ascending order is ${num}`)

// showing all values without formatation
console.log(``)
console.log(`All values without formatation are:`)
for(i = 0 ; i < num.length ; i++) {
    console.log(`${num[i]}`)
}

// showing in the array form
console.log(``)
for (i = 0 ; i < num.length ; i ++) {
    console.log(`Array[${i}] = ${num[i]}`)
}

// showing another way
console.log(``)
console.log(`using for ( i in array) {}`)
for ( let pos in num) {
    console.log(`Array[${pos}] = ${num[pos]}`)
}

// looking for an specific value: 9
console.log(``)
console.log(`The value 9 is in the index [${num.indexOf(9)}]`)

// value not found: 0
console.log(``)
console.log(`If the value isn't found the return is [${num.indexOf(0)}]`)
