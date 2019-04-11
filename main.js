
    var coffee = ["...","Американо", "Латте", "Раф кофе", "Флэт вайт", "Эспрессо"]
    var size = ["...","180мл", "250мл", "340мл", "500мл"]
    var topic = ["...","Бананновый", "Ореховый", "Шоколадный", "Белый шоколад", "Халва", "Дыня", "Кокос", "Голубая лагуна"]
    var sweets = ["...","маршмеллоу", "кокосовая стружка", "шоколадная крошка", "Сникерс нуга", "m&m's"]


for(coffeeValue of coffee){
    let opt1 = document.createElement("option")
    sCoffee.appendChild(opt1)
    opt1.innerHTML = coffeeValue
}

for(sizeValue of size){
    let opt2 = document.createElement("option")
    sSize.appendChild(opt2)
    opt2.innerHTML = sizeValue
}

for(topicValue of topic){
    let opt3 = document.createElement("option")
    sTopic.appendChild(opt3)
    opt3.innerHTML = topicValue
}

for(sweetsValue of sweets){
    let opt4 = document.createElement("option")
    sSweets.appendChild(opt4)
    opt4.innerHTML = sweetsValue
}

var button = document.getElementById("btn")
var result  = document.getElementById("clientOrder")
var price = document.getElementById("clientOrder2")

button.onclick = function(){
        result.innerHTML = "Вы заказали" + `\n` + "кофе:" + sCoffee.value + " " + "размера:" + sSize.value + " " + "топинг:" + sTopic.value + " "  + "добавка:" + sSweets.value

}





