
const wishlist = [];

const heart = document.querySelector(".heart");

heart.addEventListener("click", function () {
  const card = heart.parentElement.parentElement;

  const title = card.querySelector(".cardTitle").innerText;
  const text = card.querySelector(".cardText").innerText;
  const price = card.querySelector(".cardPrice").innerText;
  const img = card.querySelector("img").src;

  const product = { title, text, price, img };

  console.log("Navigate üsulu:", product);
  wishlist.push(product);
  console.log("Wishlist:", wishlist);
});

heart.addEventListener("dblclick", function () {
  const card = heart.closest(".card");

  const product = {
    title: card.querySelector(".cardTitle").innerText,
    text: card.querySelector(".cardText").innerText,
    price: card.querySelector(".cardPrice").innerText,
    img: card.querySelector("img").src,
  };

  console.log("Closest üsulu:", product);
  wishlist.push(product);
  console.log("Wishlist:", wishlist);
});
