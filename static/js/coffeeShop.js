"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html()); //increments price 
  total += price;

  cartTotal.html(total.toFixed(2)); //two decimal places
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee'); 
  incrementCartTotal(1.50); // Adds 1.50 to amount sold
});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length); //Adds coffee sold to cart
  
  resetCart(); // Empties cart 
});

