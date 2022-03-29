"use strict";

// Add default styles to show which input is not valid
var products = [
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""},
  {name:"Wristwatch",
    description:"Mobile wrist watch that tells time.",
    image_url:"image_url",
    price:""}
];
// Default selector in the event every object in array is needed e.g home page
var default_selector = [1, 2, 3, 4, 5, 6, 7, 8];
var main = document.querySelector("main");
var counte, formDataReset, formDataBill, billCount;

if(!sessionStorage.getItem("formData")){
  sessionStorage.setItem("billingShippingCheck", "false");
}

if(!sessionStorage.getItem("formData")){
  sessionStorage.setItem("formData",
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
        }
      }
    )
  );
}

function makeOL(object, id, selected){
  var i;
  var listItems;

  // Add appropriate number of list
  for ( i = 0; i < selected.length; i++) {
    document.getElementById(id).appendChild(document.createElement('li'));
  }

  listItems = document.getElementById(id).getElementsByTagName('li');
  for ( i in selected ) {
    listItems[i].appendChild(document.createElement('img'));
    listItems[i].querySelector('img').src = object[i].image_url;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p').className = "name";
    listItems[i].querySelector('p').innerHTML = object[i].name;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name)').className = "description";
    listItems[i].querySelector('p:not(.name)').innerHTML = object[i].description;
    listItems[i].appendChild(document.createElement('p'));
    listItems[i].querySelector('p:not(.name, .description)').className = "price";
    listItems[i].querySelector('p:not(.name, .description)').innerHTML = object[i].price;
    listItems[i].appendChild(document.createElement('button'));
    listItems[i].querySelector('button').className = "cart";
    listItems[i].querySelector('button').innerHTML = "Add cart";
  }
}

function cartFunction(item) {
  var cart_selc;
  if (!sessionStorage.getItem("cart_selector").includes(item)){
    cart_selc = sessionStorage.getItem("cart_selector").split(",");
    cart_selc.push(item);
    sessionStorage.setItem("cart_selector", cart_selc);
  }
}

function makeP(id, dataId){
  var i, paragraphItems;
  var formData = JSON.parse(sessionStorage.getItem("formData"));

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
  var formData = JSON.parse(sessionStorage.getItem("formData"));
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
  formData = JSON.parse(sessionStorage.getItem("formData"));
  errorlog = document.querySelectorAll("form li:not(.notinput) input");
  listNode = document.querySelectorAll("form li:not(.notinput) p.error");
  b = 0;
  for ( i = 0; i < listNode.length; i++) {
    errorcheck = inputValidator(errorlog[b]);
    if (errorcheck){
      listNode[i].innerText = errorlog[b].validationMessage;
      event.target.setAttribute("role", "alert");
      validateStatus = false;
    } else {
      listNode[i].innerText = "";
      event.target.removeAttribute("role");
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
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }
}

function storeUserInput(element, id) {
  var formData;
  if (element.tagName !== "INPUT") {
    return;
  }
  formData = JSON.parse(sessionStorage.getItem("formData"));
  formData.formInput[id][element.id] = element.value;
  sessionStorage.setItem("formData", JSON.stringify(formData));
}

function populate(){
  var formData = JSON.parse(sessionStorage.getItem("formData"));
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
      event.target.setAttribute("role", "alert");
    } else {
      event.target.parentNode.getElementsByClassName("error")[0].innerText = "";
      event.target.removeAttribute("role", "alert");
    }
  }
}

function shippingCheck(event) {
  formDataBill = JSON.parse(sessionStorage.getItem("formData"));
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
      sessionStorage.setItem("billingShippingCheck", "true");
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
      sessionStorage.setItem("formData", JSON.stringify(formDataBill));
      sessionStorage.setItem("billingShippingCheck", "true");
    } else{
      for ( billCount = 0; billCount < document.querySelectorAll("form ol li:not(.notinput)").length; billCount++) {
        document.querySelectorAll("form ol li:not(.notinput)")[billCount].classList.toggle("hideinp");
      }
      sessionStorage.setItem("billingShippingCheck", "false");
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
if(!sessionStorage.getItem("cart_selector")){
  sessionStorage.setItem("cart_selector", []);
}

// I have been losing track of my javascript functions. I will slowly reorder the already made functions

// Sections

// Home
if(document.querySelector("main#home")) {
  makeOL(products, 'product-list', default_selector);
  main.addEventListener('click', function(event) {
    for (counte = 0; counte < document.querySelector("ol").childElementCount; counte++) {
      if ( event.target === document.querySelector("ol li:nth-of-type("+(counte+1)+") button")) {
        cartFunction(counte);
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

  main.addEventListener('click', function(event) {
    if (event.target === document.querySelector("#shipping form button")) {
      doForm(0);
      event.preventDefault();
    }
  });
}

// Billing
if(document.querySelector("main#billing")) {
  if(sessionStorage.getItem("billingShippingCheck") === "true"){
    document.querySelector("#billshipcheck").checked = true;
    for ( billCount = 0; billCount < document.querySelectorAll("form ol li:not(.notinput)").length; billCount++) {
      document.querySelectorAll("form ol li:not(.notinput)")[billCount].classList.toggle("hideinp");
    }
  }
  main.addEventListener('click', function(event) {
    formDataBill = JSON.parse(sessionStorage.getItem("formData"));
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
}

// Cart
if(document.querySelector("main#cart")) {
  formDataReset = JSON.parse(sessionStorage.getItem("formData"));
  if(formDataReset.formSubmission.shipping.country !== ""){
    formDataReset.formInput.shipping = formDataReset.formSubmission.shipping;
  }
  if(formDataReset.formSubmission.billing.country !== ""){
    formDataReset.formInput.billing = formDataReset.formSubmission.billing;
  }
  if(formDataReset.formSubmission.payment.name !== ""){
    formDataReset.formInput.payment = formDataReset.formSubmission.payment;
  }
  sessionStorage.setItem("formData", JSON.stringify(formDataReset));
  makeP("shipping-address", "shipping");
  makeP("billing-address", "billing");
  makeP("payment-info", "payment");
}
