'use strict';
// Backstop
describe('Form behaviour test', function() {

  it('Shipping does not submit', function(browser){
    browser
      .url('http://localhost:3000/shipping')
      .click('li.notinput button[type="submit"]')
      .assert.textContains('li:nth-of-type(1) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(2) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(3) p.error', 'Please fill out this field with numbers.')
      .assert.textContains('li:nth-of-type(4) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(5) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(6) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(7) p.error', 'Please fill out this field with numbers.');
  });

  it('Shipping special error logs', function(browser){
    browser
      .url('http://localhost:3000/shipping')
      .click('li input#fullname')
      .updateValue('li input#fullname', 'Tomiwa')
      .click('li input#phonenumber')
      .updateValue('li input#phonenumber', '!235654')
      .click('li input#address1')
      .updateValue('li input#address1', 'Kacek')
      .click('li input#zip')
      .updateValue('li input#zip', '123')
      .click("li input#address2")
      .assert.textContains('li input#fullname ~ p.error', 'Please enter a second name for better indentification')
      .assert.textContains('li input#phonenumber ~ p.error', 'Phone number must have integers or + for area code')
      .assert.textContains('li input#address1 ~ p.error', 'Please enter more information for better transportation')
      .assert.textContains('li input#zip ~ p.error', 'Zip code can only be five digits long');
  });

  it('Billing does not submit', function(browser){
    browser
      .url('http://localhost:3000/billing')
      .click('li.notinput button[type="submit"]')
      .assert.textContains('li:nth-of-type(2) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(3) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(4) p.error', 'Please fill out this field with numbers.')
      .assert.textContains('li:nth-of-type(5) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(6) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(7) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(8) p.error', 'Please fill out this field with numbers.');
  });

  it('Billing special error logs', function(browser){
    browser
      .url('http://localhost:3000/billing')
      .click('li input#fullname')
      .updateValue('li input#fullname', 'Tomiwa')
      .click('li input#phonenumber')
      .updateValue('li input#phonenumber', '!235654')
      .click('li input#address1')
      .updateValue('li input#address1', 'Kacek')
      .click('li input#zip')
      .updateValue('li input#zip', '123')
      .click("li input#address2")
      .assert.textContains('li input#fullname ~ p.error', 'Please enter a second name for better indentification')
      .assert.textContains('li input#phonenumber ~ p.error', 'Phone number must have integers or + for area code')
      .assert.textContains('li input#address1 ~ p.error', 'Please enter more information for better transportation')
      .assert.textContains('li input#zip ~ p.error', 'Zip code can only be five digits long');
  });

  it('Payment does not submit', function(browser){
    browser
      .url('http://localhost:3000/payment')
      .click('li.notinput button[type="submit"]')
      .assert.textContains('li:nth-of-type(1) p.error', 'Please fill out this field with characters.')
      .assert.textContains('li:nth-of-type(2) p.error', 'Please fill out this field with numbers.')
      .assert.textContains('li:nth-of-type(3) p.error', 'Please fill out this field with date format.')
      .assert.textContains('li:nth-of-type(4) p.error', 'Please fill out this field with numbers.');
  });

  it('Payment special error logs', function(browser){
    browser
      .url('http://localhost:3000/payment')
      .click('li input#name')
      .updateValue('li input#name', 'Tomiwa')
      .click('li input#number')
      .updateValue('li input#number', '+12')
      .click('li input#cvv')
      .updateValue('li input#cvv', '12')
      .click("li input#number")
      .click('li button[type="submit"]')
      .assert.textContains('li input#name ~ p.error', 'Please enter the second name and initial from card')
      .assert.textContains('li input#number ~ p.error', 'Please input integers only for card number')
      .assert.textContains('li input#cvv ~ p.error', 'Please input an integer within range of 3 to 4 numbers');
  });

});
