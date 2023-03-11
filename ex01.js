// Create a variable named myNumber <- 5, don't want this to change
const myNumber = 5

// Ques 2
const obj = {
    layer1: {
        layer2: {
            layer3: {
                arr: [1, 5, false, {name: "Rahul"}]
            }
        }
    }
}
console.log(obj.layer1.layer2.layer3.arr[3].name)
console.log(obj["layer1"]["layer2"]["layer3"]["arr"][3]["name"])