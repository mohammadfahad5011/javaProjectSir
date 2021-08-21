//Primary Cost
let bestPrice = document.querySelector("#best-price");
let extraMemoryCost = document.querySelector("#memory-cost");
let extrastorageCost = document.querySelector("#storage-cost");
let deliveryCharge = document.querySelector("#delivery-cost");
let totalPriceX = document.querySelector("#total");
let coponTotal = document.querySelector("#coponTotal");
let inputCopon = document.querySelector("#input-copon");
let applyBtn = document.querySelector("#apply");

const promoCode = "stevekaku";

let bestPriceX = 1500;
let priceOf16 = 180;

let priceOfstorage512 = 100;
let priceOfstorage1T = 180;

let PricePrime = 20;

//memory
let memory8 = document.querySelector("#m1-btn");
let memory16 = document.querySelector("#m2-btn");

memory8.addEventListener("click", function () {
  extraMemoryCost.textContent = 0;
  total();
});

memory16.addEventListener("click", function () {
  extraMemoryCost.textContent = priceOf16;
  total();
});

//storage

let storage256 = document.querySelector("#storage1-btn");
let storage512 = document.querySelector("#storage2-btn");
let storage1T = document.querySelector("#storage3-btn");

storage256.addEventListener("click", function () {
  extrastorageCost.textContent = 0;
  total();
});

storage512.addEventListener("click", function () {
  extrastorageCost.textContent = priceOfstorage512;
  total();
});

storage1T.addEventListener("click", function () {
  extrastorageCost.textContent = priceOfstorage1T;
  total();
});

//delivery

let free = document.querySelector("#free");
let prime = document.querySelector("#prime");

free.addEventListener("click", function () {
  deliveryCharge.textContent = 0;
  total();
});

prime.addEventListener("click", function () {
  deliveryCharge.textContent = PricePrime;
  total();
});

//Total function

function total() {
  let extraMemoryCost1 = parseInt(extraMemoryCost.textContent);
  let extrastorageCost1 = parseInt(extrastorageCost.textContent);
  let deliveryCharge1 = parseInt(deliveryCharge.textContent);

  let sum = bestPriceX + extraMemoryCost1 + extrastorageCost1 + deliveryCharge1;
  totalPriceX.textContent = sum;
  coponTotal.textContent = sum;
}

//promo-code
applyBtn.addEventListener("click", function () {
  inputPromoCode = inputCopon.value;
  if (promoCode == inputPromoCode) {
    let Y = coponTotal.textContent;
    let X = Y - Y * 0.2;
    coponTotal.textContent = X;
  }
  inputCopon.value = "";
});
