const pick = document.getElementById("pick");
const info = document.getElementById("info");
const sheet = document.getElementById("sheet");
const tick = new Audio("tap.wav");
const win=new Audio("win.mp3");
const prizes = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

pick.addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("wonbox");
  }
  info.textContent = "winning number is...";
  //   setTimeout(function () {
  //     let num2 = Math.random() * 50;
  //     // console.log(Math.floor(num1))
  //     let num1 = Math.floor(num2)+1;
  //     info.textContent = `${num1}  ${prizes[num1 - 1]}`;
  //     document.getElementById(num1).classList.add("wonbox");
  //   }, 5000);
  let counter = 0;
  const intervalid = setInterval(function () {
    tick.pause()
    tick.currentTime=0
    tick.play();
    counter++;
    const num1 = Math.floor(Math.random() * 50) + 1;
    for (let i = 1; i < 50; i++) {
      document.getElementById(i).classList.remove("highlightbox");
    }
    document.getElementById(num1).classList.add("highlightbox");
    if (counter === 5) {
      let num2 = Math.random() * 50;
      // console.log(Math.floor(num1))
      let num3 = Math.floor(num2) + 1;
      info.textContent = `${num3}  ${prizes[num3 - 1]}`;
      document.getElementById(num1).classList.remove("highlightbox");
      document.getElementById(num3).classList.add("wonbox");
      tick.pause();
      win.pause();
      win.currentTime=0
      win.play();

      clearInterval(intervalid);
    }
  }, 1000);
});
prizes.forEach(function (item, index) {
  let div = `<div class="box" id="${index + 1}">${index + 1}. ${item}</div>`;
  sheet.insertAdjacentHTML("beforeend", div);
});
