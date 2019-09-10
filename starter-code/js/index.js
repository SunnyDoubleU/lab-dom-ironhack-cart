
// /*
// function createRow(name, price){
//   var rowDiv = document.createElement("div")
//   rowDiv.classList.add("row")

//   rowDiv.innerHTML = `
//   <p> ${name} </p>
//   <p>$<span>${price}</span></p>
//   `

//   return rowDIv
// }
// //////////////
// function creatRow(name, price) {
//   var templateRow = document.getElementsByClassName('row')[0]
//   var newNode = templateRow.cloneNoed()
//   newNode.getElementsByClassName("price")[0].innerHTML = price
//   ...
//   return newNode
// }



// how do I know if the row match?
// compare the [i] of delete button is the same [i] in the row
function deleteItem(e) {
let delBut = e.currentTarget;
let delRow = delBut.closest(".align-row");
delRow.innerHTML = ""

}


//   let delRow = document.getElementsByClassName("align-row"); //define variable for the whole row
// let delBut = document.getElementsByClassName("btn-delete"); //define variable for the delete button 
//   // let body = document.getElementById("body");  
//   // let grandtot = document.getElementById("grandTotal");
//   let sub = document.getElementsByClassName("subtotal")
//   let closestRow = e.delBut.closest(".align-row")

//   counter = grandtot.innerHTML;
//   for (var i = 0; i < delBut.length; i++) {
//     if (delRow[i].contains(delBut[i]) == true ) {
//       counter -= sub[i].innerHTML;
//       body.removeChild(delRow[i]);
//     }
//   }
//   grandtot.innerHTML = counter;

// function removeSubtotal() {
//   counter -= sub.innerHTML;
//   grandtot.innerHTML = counter;

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }


function getTotalPrice() {
    let counter = 0;
    let grandtot = document.getElementById("grandTotal")
    let unitPrice = document.getElementsByClassName("price");
    let inputVal = document.getElementsByClassName('quan');
    let subTot = document.getElementsByClassName("subtotal");
    for( var i = 0; i < unitPrice.length; i++ ) {
      let sub = unitPrice[i].innerHTML * inputVal[i].value;
      subTot[i].innerHTML = sub;
      counter += sub;
    }
    grandtot.innerHTML = counter;
}

// function createQuantityInput(){

// }

function createDeleteButton(){
  let createDiv = document.createElement("div")
  let createButton = document.createElement("button");
  createButton.classList.add("btn-delete")
  createButton.onclick = deleteItem;

  createButton.innerHTML = "Delete"

  createDiv.appendChild(createButton);
  return createDiv;
}


function createQuantityNode(){
  let createDiv = document.createElement("div");
  createDiv.classList.add("quantity");

  let createLabel = document.createElement("label");
  createLabel.innerHTML = "QTY";

  let createInput = document.createElement("input");
  
  createInput.classList.add("quan");

  createInput.setAttribute("type", "text");
  createInput.setAttribute("name", "units");
  createInput.setAttribute("placeholder", "0");

  createDiv.appendChild(createLabel);
  createDiv.appendChild(createInput);

  return createDiv
}

// function createItemNode(dataType, itemData){


// }
// create div 
// add price class to div 
// definte create p
// definte create span
// add innerHTML (price) to span
// add span to p

  //   var templateRow = document.getElementsByClassName('row')[0]
  //   var newNode = templateRow.cloneNoed()
  //   newNode.getElementsByClassName("price")[0].innerHTML = price
  //   ...
  //   return newNode

function createPrice(price) {
  let createDiv = document.createElement("div");
  let createP = document.createElement("p");
  let createSpan = document.createElement("span")
  createSpan.classList.add("price");
  let idenInputPri = document.getElementById("inputPrice");

  createSpan.innerHTML = idenInputPri.value;
  createP.innerHTML = `$`;
  createP.appendChild(createSpan);
  createDiv.appendChild(createP);

  return createDiv;
}


function createProduct(name) {

  let createDiv = document.createElement("div");
  createDiv.classList.add("product");
  let createSpan = document.createElement("span");
  let idenInputPro = document.getElementById("inputProduct")

  createSpan.innerHTML = idenInputPro.value;
  createDiv.appendChild(createSpan);

  return createDiv;
}

function createSubTotal() {
  let createDiv = document.createElement("div");
  let createSpan = document.createElement("span");
  createSpan.classList.add("subtotal");

  createDiv.innerHTML = "$";
  createSpan.innerHTML = "0";
  createDiv.appendChild(createSpan);
  
  return createDiv;
}

// function createNewItemRow(name){

// }



function createNewItem(){
  let identifyAdd= document.getElementById("add");
  let identifyBody = document.getElementById("body");
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("align-row");
  
  rowDiv.appendChild(createProduct())
  rowDiv.appendChild(createPrice())
  rowDiv.appendChild(createQuantityNode())
  rowDiv.appendChild(createSubTotal())
  rowDiv.appendChild(createDeleteButton())

  
  identifyBody.insertBefore(rowDiv, identifyAdd);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};