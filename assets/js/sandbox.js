"use strict";

var main = document.querySelector("main");
var counter, formDataReset, formDataBill, billCount, stor, itemStatus, item, sum;

function localStorageTest(){
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

if(localStorageTest() === true){
  stor = localStorage;
  console.log("We are using localStorage");
}else{
  stor = sessionStorage;
  console.log("We are using sessionStorage");
}
console.log(stor);
if(!stor.getItem("formData")){
  stor.setItem("billingShippingCheck", "false");
}

if(!stor.getItem("formData")){
  stor.setItem("formData",
    JSON.stringify(
      {
        formSubmission : {
          shipping : {
            country : "",
            fullname: "",
            phonenumber : "",
            address1 : "",
            address2 : "",
            state : "",
            city : "",
            zip : ""
          },
          billing : {
            country : "",
            fullname: "",
            phonenumber : "",
            address1 : "",
            address2 : "",
            state : "",
            city : "",
            zip : ""
          },
          payment : {
            name : "",
            number : "",
            expiry : "",
            cvv : ""
          }
        },
        formInput : {
          shipping : {
            country : "",
            fullname: "",
            phonenumber : "",
            address1 : "",
            address2 : "",
            state : "",
            city : "",
            zip : ""
          },
          billing : {
            country : "",
            fullname: "",
            phonenumber : "",
            address1 : "",
            address2 : "",
            state : "",
            city : "",
            zip : ""
          },
          payment : {
            name : "",
            number : "",
            expiry : "",
            cvv : ""
          }
        },
        errorInstruction : {
          country : {
            0 : ["[a-zA-Z]", "Please fill out this field with characters."]
          },
          fullname : {
            0 : ["[a-zA-Z]", "Please fill out this field with characters."],
            1 : ["\\w \\w", "Please enter a second name for better indentification"]
          },
          phonenumber : {
            0 :  ["/+|[0-9]", "Please fill out this field with numbers."],
            1 : ["^(?:[+\\d][0-9]+)$", "Phone number must have integers or + for area code"]
          },
          address1 : {
            0 :  ["[a-zA-Z]", "Please fill out this field with characters."],
            1 : ["\\w \\w", "Please enter more information for better transportation"]
          },
          state : {
            0 :  ["[a-zA-Z]", "Please fill out this field with characters."]
          },
          city : {
            0 :  ["[a-zA-Z]", "Please fill out this field with characters."]
          },
          zip : {
            0 :  ["[0-9]", "Please fill out this field with numbers."],
            1 : ["^[0-9]{5}$", "Zip code can only be five digits long"]
          },
          name : {
            0 :   ["[a-zA-Z]", "Please fill out this field with characters."],
            1 : ["\\w \\w", "Please enter the second name and initial from card"]
          },
          number : {
            0 :  ["[0-9]", "Please fill out this field with numbers."],
            1 : ["^[0-9]+$", "Please input integers only for card number"]
          },
          expiry : {
            0 :  ["//|[0-9]", "Please fill out this field with date format."]
          },
          cvv : {
            0 :  ["[0-9]", "Please fill out this field with numbers."],
            1 : ["^[0-9]{3,4}$", "Please input an integer within range of 3 to 4 numbers"]
          }
        },
        itemData : {
          1 : {
            selected : "false",
            quantity: 0,
            price: 65.00,
            category: "nike"
          },
          2 : {
            selected : "false",
            quantity: 0,
            price: 85.00,
            category: "nike"
          },
          3 : {
            selected : "false",
            quantity: 0,
            price: 55.00,
            category: "nike"
          },
          4 : {
            selected : "false",
            quantity: 0,
            price: 25.00,
            category: "nike"
          },
          5 : {
            selected : "false",
            quantity: 0,
            price: 60.00,
            category: "nike"
          },
          6 : {
            selected : "false",
            quantity: 0,
            price: 115.00,
            category: "nike"
          },
          7 : {
            selected : "false",
            quantity: 0,
            price: 45.00,
            category: "nike"
          },
          8 : {
            selected : "false",
            quantity: 0,
            price: 60.00,
            category: "nike"
          },
          9 : {
            selected : "false",
            quantity: 0,
            price: 30.00,
            category: "nike"
          },
          10 : {
            selected : "false",
            quantity: 0,
            price: 50.00,
            category: "nike"
          },
          11 : {
            selected : "false",
            quantity: 0,
            price: 75.00,
            category: "nike"
          },
          12 : {
            selected : "false",
            quantity: 0,
            price: 55.00,
            category: "nike"
          },
          13 : {
            selected : "false",
            quantity: 0,
            price: 30.00,
            category: "adidas"
          },
          14 : {
            selected : "false",
            quantity: 0,
            price: 25.00,
            category: "adidas"
          },
          15 : {
            selected : "false",
            quantity: 0,
            price: 45.00,
            category: "adidas"
          },
          16 : {
            selected : "false",
            quantity: 0,
            price: 25.00,
            category: "adidas"
          },
          17 : {
            selected : "false",
            quantity: 0,
            price: 30.00,
            category: "adidas"
          },
          18 : {
            selected : "false",
            quantity: 0,
            price: 30.00,
            category: "adidas"
          },
          19 : {
            selected : "false",
            quantity: 0,
            price: 40.00,
            category: "adidas"
          },
          20 : {
            selected : "false",
            quantity: 0,
            price: 35.00,
            category: "adidas"
          },
          21 : {
            selected : "false",
            quantity: 0,
            price: 40.00,
            category: "adidas"
          },
          22 : {
            selected : "false",
            quantity: 0,
            price: 75.00,
            category: "adidas"
          },
          23 : {
            selected : "false",
            quantity: 0,
            price: 25.00,
            category: "adidas"
          },
          24 : {
            selected : "false",
            quantity: 0,
            price: 45.00,
            category: "adidas"
          }
        }
      }
    )
  );
}

function cartFunction(item) {
  var cart_selc;
  if (!stor.getItem("cart_selector").includes(item)){
    cart_selc = stor.getItem("cart_selector").split(",");
    cart_selc.push(item);
    stor.setItem("cart_selector", cart_selc);
  }
}

function makeP(id, dataId){
  var i, paragraphItems;
  var formData = JSON.parse(stor.getItem("formData"));

  // Add appropriate number of list
  for ( i = 0; i < Object.keys(formData.formSubmission[dataId]).length; i++) {
    document.getElementById(id).appendChild(document.createElement('p'));
  }

  paragraphItems = document.getElementById(id).getElementsByTagName('p');

  for ( i = 0; i < Object.keys(formData.formSubmission[dataId]).length; i++ ) {
    paragraphItems[i].innerHTML = Object.values(formData.formSubmission[dataId])[i];
  }
}

function inputValidator(input) {
  var a;
  var errorcheck = false;
  var formData = JSON.parse(stor.getItem("formData"));
  for( a = Object.keys(formData.errorInstruction[input.id]).length - 1; a >= 0; a--){
    if(!RegExp(formData.errorInstruction[input.id][a][0]).test(input.value)){
      input.setCustomValidity(formData.errorInstruction[input.id][a][1]);
      errorcheck = true;
    }
  }
  return errorcheck;
}

// Getting form fields data
function doForm() {
  var formData;
  var errorlog;
  var listNode;
  var i, b, errorcheck, validateStatus = true;
  formData = JSON.parse(stor.getItem("formData"));
  errorlog = document.querySelectorAll("form li:not(.notinput) input");
  listNode = document.querySelectorAll("form li:not(.notinput) p.error");
  b = 0;
  for ( i = 0; i < listNode.length; i++) {
    errorcheck = inputValidator(errorlog[b]);
    if (errorcheck){
      listNode[i].innerText = errorlog[b].validationMessage;
      event.target.parentNode.setAttribute("role", "alert");
      validateStatus = false;
    } else {
      listNode[i].innerText = "";
      event.target.parentNode.removeAttribute("role");
    }
    if(listNode[i].parentNode.tagName === "FIELDSET"){ // skip address2
      b++;
    }
    b++;
  }
  if(validateStatus) {
    if(document.querySelector("main").id === "shipping") {
      if(document.querySelector("#bill").checked) {
        formData.formSubmission.shipping = {
          country : document.forms[0].country.value,
          fullname : document.forms[0].fullname.value,
          phonenumber : document.forms[0].telephone.value,
          address1 : document.forms[0].address[0].value,
          address2 : document.forms[0].address[1].value,
          city : document.forms[0].city.value,
          state : document.forms[0].state.value,
          zip : document.forms[0].zip.value
        };
        formData.formInput.shipping = formData.formSubmission.shipping;
        formData.formSubmission.billing = formData.formSubmission.shipping;
        formData.formInput.billing = formData.formSubmission.shipping;
        location.assign("../payment");
      } else {
        formData.formSubmission.shipping = {
          country : document.forms[0].country.value,
          fullname : document.forms[0].fullname.value,
          phonenumber : document.forms[0].telephone.value,
          address1 : document.forms[0].address[0].value,
          address2 : document.forms[0].address[1].value,
          city : document.forms[0].city.value,
          state : document.forms[0].state.value,
          zip : document.forms[0].zip.value
        };
        formData.formInput.shipping = formData.formSubmission.shipping;
        location.assign("../billing");
      }
    } else if (document.querySelector("main").id === "billing") {
      formData.formSubmission.billing = {
        country : document.forms[0].country.value,
        fullname : document.forms[0].fullname.value,
        phonenumber : document.forms[0].telephone.value,
        address1 : document.forms[0].address[0].value,
        address2 : document.forms[0].address[1].value,
        city : document.forms[0].city.value,
        state : document.forms[0].state.value,
        zip : document.forms[0].zip.value
      };
      formData.formInput.billing = formData.formSubmission.billing;
      location.assign("../payment");
    } else {
      formData.formSubmission.payment = {
        name : document.forms[0].cardname.value,
        number : document.forms[0].cardnumber.value,
        expiry : document.forms[0].expirationdate.value,
        cvv : document.forms[0].cvv.value
      };
      formData.formInput.payment = formData.formSubmission.payment;
      location.assign("../cart");
    }
    stor.setItem("formData", JSON.stringify(formData));
  }
}

function storeUserInput(element, id) {
  var formData;
  if (element.tagName !== "INPUT") {
    return;
  }
  formData = JSON.parse(stor.getItem("formData"));
  formData.formInput[id][element.id] = element.value;
  stor.setItem("formData", JSON.stringify(formData));
}

function populate(){
  var formData = JSON.parse(stor.getItem("formData"));
  var mainId = document.querySelector("main").id;
  if(mainId === "shipping") {
    document.forms[0].country.value = formData.formInput[mainId].country;
    document.forms[0].fullname.value = formData.formInput[mainId].fullname;
    document.forms[0].telephone.value = formData.formInput[mainId].phonenumber;
    document.forms[0].address[0].value = formData.formInput[mainId].address1;
    document.forms[0].address[1].value = formData.formInput[mainId].address2;
    document.forms[0].city.value = formData.formInput[mainId].city;
    document.forms[0].state.value = formData.formInput[mainId].state;
    document.forms[0].zip.value = formData.formInput[mainId].zip;
  } else if(mainId === "billing"){// billing
    document.forms[0].country.value = formData.formInput[mainId].country;
    document.forms[0].fullname.value = formData.formInput[mainId].fullname;
    document.forms[0].telephone.value = formData.formInput[mainId].phonenumber;
    document.forms[0].address[0].value = formData.formInput[mainId].address1;
    document.forms[0].address[1].value = formData.formInput[mainId].address2;
    document.forms[0].city.value = formData.formInput[mainId].city;
    document.forms[0].state.value = formData.formInput[mainId].state;
    document.forms[0].zip.value = formData.formInput[mainId].zip;
  } else if(mainId === "payment"){ // payment
    document.forms[0].cardname.value = formData.formInput[mainId].name;
    document.forms[0].cardnumber.value = formData.formInput[mainId].number;
    document.forms[0].expirationdate.value = formData.formInput[mainId].expiry;
    document.forms[0].cvv.value = formData.formInput[mainId].cvv;
  }
}

// toggle nav pop up
function toggletransform(){
  document.querySelector(".hide:not(button)").classList.toggle("translate");
  document.querySelector("html").classList.toggle("overflow");
}

// reset nav pop up
function transform(){
  if(document.querySelector(".hide:not(button)").classList.contains("translate")){
    toggletransform();
  }
}

function changeEventFunction(event) {
  var errorcheck;
  storeUserInput(event.target, document.querySelector("main").id);
  if(!("notinput" in event.target.parentNode.classList) && event.target.type !== "checkbox"){
    errorcheck = inputValidator(event.target);
    if(errorcheck) {
      event.target.parentNode.getElementsByClassName("error")[0].innerText = event.target.validationMessage;
      event.target.parentNode.setAttribute("role", "alert");
    } else {
      event.target.parentNode.getElementsByClassName("error")[0].innerText = "";
      event.target.parentNode.removeAttribute("role", "alert");
    }
  }
}

function removeError(event) { // Remove the error if user input is valid
  var errorcheck;
  storeUserInput(event.target, document.querySelector("main").id);
  if(!("notinput" in event.target.parentNode.classList) && event.target.type !== "checkbox"){
    errorcheck = inputValidator(event.target);
    if(!errorcheck) {
      event.target.parentNode.getElementsByClassName("error")[0].innerText = "";
      event.target.parentNode.setAttribute("role", "alert");
    }
  }
}

function shippingCheck(event) {
  formDataBill = JSON.parse(stor.getItem("formData"));
  if(event.target.id === "billshipcheck"){
    if(event.target.checked && JSON.stringify(formDataBill.formSubmission.shipping) !== JSON.stringify(formDataBill.formSubmission.billing)){
      document.forms[0].country.value = formDataBill.formSubmission.shipping.country;
      document.forms[0].fullname.value = formDataBill.formSubmission.shipping.fullname;
      document.forms[0].telephone.value = formDataBill.formSubmission.shipping.phonenumber;
      document.forms[0].address[0].value = formDataBill.formSubmission.shipping.address1;
      document.forms[0].address[1].value = formDataBill.formSubmission.shipping.address2;
      document.forms[0].city.value = formDataBill.formSubmission.shipping.city;
      document.forms[0].state.value = formDataBill.formSubmission.shipping.state;
      document.forms[0].zip.value = formDataBill.formSubmission.shipping.zip;
      stor.setItem("billingShippingCheck", "true");
      doForm(1);
    } else if(event.target.checked){
      for ( billCount = 0; billCount < document.querySelectorAll("form ol li:not(.notinput)").length; billCount++) {
        document.querySelectorAll("form ol li:not(.notinput)")[billCount].classList.toggle("hideinp");
      }
      document.forms[0].country.value = formDataBill.formSubmission.shipping.country;
      document.forms[0].fullname.value = formDataBill.formSubmission.shipping.fullname;
      document.forms[0].telephone.value = formDataBill.formSubmission.shipping.phonenumber;
      document.forms[0].address[0].value = formDataBill.formSubmission.shipping.address1;
      document.forms[0].address[1].value = formDataBill.formSubmission.shipping.address2;
      document.forms[0].city.value = formDataBill.formSubmission.shipping.city;
      document.forms[0].state.value = formDataBill.formSubmission.shipping.state;
      document.forms[0].zip.value = formDataBill.formSubmission.shipping.zip;
      formDataBill.formInput.billing = formDataBill.formSubmission.shipping;
      stor.setItem("formData", JSON.stringify(formDataBill));
      stor.setItem("billingShippingCheck", "true");
    } else{
      for ( billCount = 0; billCount < document.querySelectorAll("form ol li:not(.notinput)").length; billCount++) {
        document.querySelectorAll("form ol li:not(.notinput)")[billCount].classList.toggle("hideinp");
      }
      stor.setItem("billingShippingCheck", "false");
    }
  }
}

document.querySelectorAll("button.hide")[0].addEventListener("click", function(){
  toggletransform();
});
document.querySelectorAll("button.hide")[1].addEventListener("click", function(){
  toggletransform();
});

populate();
transform();
if(!stor.getItem("cart_selector")){
  stor.setItem("cart_selector", []);
}

// I have been losing track of my javascript functions. I will slowly reorder the already made functions

// Sections

// Home
if(document.querySelector("main#home")) {
  var category = document.querySelector("#categories");
  var maxPrice = document.querySelector("#max-price");
  itemStatus = JSON.parse(stor.getItem("formData"));
  for(item = 0; item < Object.keys(itemStatus.itemData).length; item++){
    if(itemStatus.itemData[item + 1].selected === "true"){
      document.querySelectorAll("#home>#item-grid>li")[item].childNodes[9].classList.toggle("selected");
      document.querySelectorAll("#home>#item-grid>li")[item].childNodes[9].innerText = 'Remove from Cart';
    }
  }
  main.addEventListener('click', function(event) {
    if(event.target.parentElement === main && event.target.tagName === "BUTTON" ){
      event.target.classList.toggle("hiden");
      document.querySelector("main#home #filter").classList.toggle("translatex");
      document.querySelector("main#home #filter").classList.toggle("show");
    }
    if(event.target.parentElement.parentElement.id === "filter" && event.target.tagName === "BUTTON"){
      event.target.parentElement.parentElement.classList.toggle("show");
      event.target.parentElement.parentElement.classList.toggle("translatex");
      document.querySelector("#home button").classList.toggle("hiden");
    }
    if(event.target.parentElement.parentElement.id === "item-grid" && event.target.tagName === "BUTTON"){
      itemStatus = JSON.parse(stor.getItem("formData"));
      event.target.classList.toggle("selected");
      if(itemStatus.itemData[event.target.parentElement.dataset.id].selected === "false"){
        itemStatus.itemData[event.target.parentElement.dataset.id].selected = "true";
        itemStatus.itemData[event.target.parentElement.dataset.id].quantity = 1;
        event.target.innerText = 'Remove from Cart';
      } else {
        itemStatus.itemData[event.target.parentElement.dataset.id].selected = "false";
        itemStatus.itemData[event.target.parentElement.dataset.id].quantity = 0;
        event.target.innerText = 'Add to Cart';
      }
      stor.setItem("formData", JSON.stringify(itemStatus));
    }
    for (counter = 0; counter < document.querySelector("ol").childElementCount; counter++) {
      if ( event.target === document.querySelector("ol li:nth-of-type("+(counter+1)+") button")) {
        cartFunction(counter);
      }
    }
  });

var listOfProducts = document.querySelectorAll("#item-grid li");
category.addEventListener("change", function(){
  var type = category.value;
  
  for(var i = 1; i < Object.keys(itemStatus.itemData).length; i++){
    console.log(itemStatus.itemData[i])

    if(itemStatus.itemData[i].category !== type){
      listOfProducts[i - 1].style.display = "none";
    }
    else{
      listOfProducts[i - 1].style.display = "block";
    }
  }
});
maxPrice.addEventListener("change", function(){
  var price = maxPrice.value;
  
  for(var i = 1; i < Object.keys(itemStatus.itemData).length; i++){
    console.log(itemStatus.itemData[i])

    if(itemStatus.itemData[i].price >= price){
      listOfProducts[i - 1].style.display = "none";
    }
    else{
      listOfProducts[i - 1].style.display = "block";
    }
  }
});
}

// Shipping
if(document.querySelector("main#shipping")) {
  try{
    main.addEventListener('change', function(event){
      changeEventFunction(event);
    });
  } catch (e){
    main.addEventListener('blur', function(event){
      changeEventFunction(event);
    });
  }

  main.addEventListener('input', function(event){
    removeError(event);
  });

  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#shipping form button")) {
      doForm(0);
      event.preventDefault();
    }
  });
}

// Billing
if(document.querySelector("main#billing")) {
  if(stor.getItem("billingShippingCheck") === "true"){
    document.querySelector("#billshipcheck").checked = true;
    for ( billCount = 0; billCount < document.querySelectorAll("form ol li:not(.notinput)").length; billCount++) {
      document.querySelectorAll("form ol li:not(.notinput)")[billCount].classList.toggle("hideinp");
    }
  }
  main.addEventListener('click', function(event) {
    formDataBill = JSON.parse(stor.getItem("formData"));
    if (event.target === document.querySelector("#billing form button[type='submit']")) {
      doForm(1);
      event.preventDefault();
    }
  });
  try{
    main.addEventListener('change', function(event){
      changeEventFunction(event);
    });
    main.addEventListener('change', function(event){
      shippingCheck(event);
    });
  } catch (e){
    main.addEventListener('blur', function(event){
      changeEventFunction(event);
    });
    main.addEventListener('blur', function(event){
      shippingCheck(event);
    });
  }

  main.addEventListener('input', function(event){
    removeError(event);
  });
}

// Payment
if(document.querySelector("main#payment")) {
  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#payment form button")) {
      doForm(2);
      event.preventDefault();
    }
  });
  try{
    main.addEventListener('change', function(event){
      changeEventFunction(event);
    });
  } catch (e){
    main.addEventListener('blur', function(event){
      changeEventFunction(event);
    });
  }
  main.addEventListener('input', function(event){
    removeError(event);
  });
}

// Cart
if(document.querySelector("main#cart")) {
  formDataReset = JSON.parse(stor.getItem("formData"));
  if(formDataReset.formSubmission.shipping.country !== ""){
    formDataReset.formInput.shipping = formDataReset.formSubmission.shipping;
  }
  if(formDataReset.formSubmission.billing.country !== ""){
    formDataReset.formInput.billing = formDataReset.formSubmission.billing;
  }
  if(formDataReset.formSubmission.payment.name !== ""){
    formDataReset.formInput.payment = formDataReset.formSubmission.payment;
  }
  sum = 0;
  main.addEventListener('input', function(event){
    if(event.target.value === '1' && !event.target.classList.contains("onred")){
      event.target.parentElement.children["6"].classList.toggle("onred");
    }else if(event.target.classList.contains("onred")){
      event.target.parentElement.children["6"].classList.toggle("onred");
    }
  });

  main.addEventListener('change', function(event){
    if(event.target.type === "number"){
      formDataReset.itemData[event.target.parentElement.dataset.id].quantity = parseInt(event.target.value);
    }
    if(parseInt(event.target.value) <= 0 && event.target.type === "number"){
      event.target.parentElement.classList.toggle("remove");
      document.querySelectorAll("#order-summary>ul>li")[event.target.parentElement.dataset.id - 1].classList.toggle("remove");
      formDataReset.itemData[event.target.parentElement.dataset.id].selected = "false";
      formDataReset.itemData[event.target.parentElement.dataset.id].quantity = 0;
    }
    document.querySelectorAll("#order-summary>ul>li>span")[event.target.parentElement.dataset.id - 1].innerText = formDataReset.itemData[event.target.parentElement.dataset.id].quantity;
    sum = 0;
    for(item = 0; item < Object.keys(formDataReset.itemData).length; item++){
      sum += formDataReset.itemData[item + 1].quantity*formDataReset.itemData[item + 1].price;
    }
    document.querySelectorAll("#order-summary>span")[0].innerText = sum.toFixed(2);
    document.querySelectorAll("#order-summary>span")[1].innerText = (sum*0.0625).toFixed(2);
    document.querySelectorAll("#order-summary>span")[2].innerText = (sum*1.0625).toFixed(2);
    if(event.target.value === '1' && !event.target.classList.contains("onred")){
      event.target.parentElement.children["6"].classList.toggle("onred");
    }else if(event.target.classList.contains("onred")){
      event.target.parentElement.children["6"].classList.toggle("onred");
    }
    stor.setItem("formData", JSON.stringify(formDataReset));
  });

  main.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
      if(event.target === event.target.parentElement.children["4"]){
        event.target.parentElement.children["5"].value = parseInt(event.target.parentElement.children["5"].value) + 1;
        sum += formDataReset.itemData[event.target.parentElement.dataset.id].price;
        document.querySelectorAll("#order-summary>span")[0].innerText = sum.toFixed(2);
        document.querySelectorAll("#order-summary>span")[1].innerText = (sum*0.0625).toFixed(2);
        document.querySelectorAll("#order-summary>span")[2].innerText = (sum*1.0625).toFixed(2);
        document.querySelectorAll("#order-summary>ul>li>span")[event.target.parentElement.dataset.id - 1].innerText = event.target.parentElement.children["5"].value;
        formDataReset.itemData[event.target.parentElement.dataset.id].quantity = parseInt(event.target.parentElement.children["5"].value);
      } else if(event.target === event.target.parentElement.children["6"]){
        event.target.parentElement.children["5"].value = parseInt(event.target.parentElement.children["5"].value) - 1;
        sum -= formDataReset.itemData[event.target.parentElement.dataset.id].price;
        document.querySelectorAll("#order-summary>span")[0].innerText = sum.toFixed(2);
        document.querySelectorAll("#order-summary>span")[1].innerText = (sum*0.0625).toFixed(2);
        document.querySelectorAll("#order-summary>span")[2].innerText = (sum*1.0625).toFixed(2);
        document.querySelectorAll("#order-summary>ul>li>span")[event.target.parentElement.dataset.id - 1].innerText = event.target.parentElement.children["5"].value;
        formDataReset.itemData[event.target.parentElement.dataset.id].quantity = parseInt(event.target.parentElement.children["5"].value);
      }
      if(parseInt(event.target.parentElement.children["5"].value) <= 0){
        event.target.parentElement.classList.toggle("remove");
        document.querySelectorAll("#order-summary>ul>li")[event.target.parentElement.dataset.id - 1].classList.toggle("remove");
        formDataReset.itemData[event.target.parentElement.dataset.id].selected = "false";
      }
      if(event.target.parentElement.children["5"].value === '1' && !event.target.parentElement.children["6"].classList.contains("onred")){
        event.target.parentElement.children["6"].classList.toggle("onred");
      }else if(event.target.parentElement.children["6"].classList.contains("onred")){
        event.target.parentElement.children["6"].classList.toggle("onred");
      }
    }

    stor.setItem("formData", JSON.stringify(formDataReset));
  });
  for(item = 0; item < Object.keys(formDataReset.itemData).length; item++){
    sum += formDataReset.itemData[item + 1].quantity*formDataReset.itemData[item + 1].price;
    if(formDataReset.itemData[item + 1].selected === "true"){
      document.querySelectorAll("#shopping-cart>ul>li")[item].classList.toggle("remove");
      document.querySelectorAll("#order-summary>ul>li")[item].classList.toggle("remove");
    }
    document.querySelectorAll("#shopping-cart>ul>li>input")[item].value = formDataReset.itemData[item + 1].quantity;
    document.querySelectorAll("#order-summary>ul>li>span")[item].innerText = formDataReset.itemData[item + 1].quantity;
    if(document.querySelectorAll("#shopping-cart>ul>li>input")[item].value === '1' && !document.querySelectorAll("#shopping-cart>ul>li>input")[item].classList.contains("onred")){
      document.querySelectorAll("#shopping-cart>ul>li>button")[2*item + 1].classList.toggle("onred");
    }
  }
  document.querySelectorAll("#order-summary>span")[0].innerText = sum.toFixed(2);
  document.querySelectorAll("#order-summary>span")[1].innerText = (sum*0.0625).toFixed(2);
  document.querySelectorAll("#order-summary>span")[2].innerText = (sum*1.0625).toFixed(2);

  stor.setItem("formData", JSON.stringify(formDataReset));
  makeP("shipping-address", "shipping");
  makeP("billing-address", "billing");
  makeP("payment-info", "payment");
}
