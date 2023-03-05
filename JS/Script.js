
var allProducts = document.querySelectorAll(".products-content .products-items .products-item ")

var btn = document.querySelector("#btn1")

var content = document.querySelector("#content")

var content2 = document.querySelector("#content2")

var nodeMap = document.querySelector(".product-img img").attributes

console.log(nodeMap)

var totalPrice = 0

allProducts.forEach(function (item){     

    item.onclick = function(){

        // console.log(item)

        content.innerHTML += item.textContent  +   "/" 


         totalPrice += +(item.getAttribute("price"))

      


console.log(totalPrice)











 

        if (content.innerHTML != "" ){
            btn.style.display = "block"
            btn.style.color = "red"
            btn.style.fontSize= "18px"
            btn.style.fontWeight= "bold"
            btn.style.backgroundColor = "yellow"
            btn.style.width = "200px"
            btn.style.height = "50px"


            content.style.display = "block"
            content.style.color = "red"
            content.style.fontSize= "20px"
            content.style.fontWeight= "bold"
            content.style.width = "auto"

        }
    }
})


btn.onclick = function () {

    content2.innerHTML = totalPrice

    content2.style.display = "block"
    content2.style.color = "red"
    content2.style.fontSize= "18px"
    content2.style.fontWeight= "bold"
    content2.style.backgroundColor = "yellow"
    content2.style.width = "200px"
    content2.style.height = "50px"
    content2.style.textAlign= "center"   

    content2.style.margin= "auto"   
    content2.style.padding= "12px"

   }

