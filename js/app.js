let layerBtns = document.querySelectorAll(".layer-btns .btn");
let burgerWrapper = document.querySelector(".burger");
let topBread = document.querySelector(".bread.top");
let bottomBread = document.querySelector(".bread.bottom");
let total = document.querySelector(".total");
let orderBtn = document.querySelector(".order-btn");

let ingredients = {
    cheese: 2,
    meat: 5,
    onion: 1,
    tomato: 1,
    bacon: 1,
    letuce: 1,
};

layerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let layer = btn.getAttribute("data-layer");
        let price = ingredients[layer];
        let imageURL = "/burger-layers/" + layer + ".svg";
        let image = document.createElement("img");
        image.setAttribute("src", imageURL);
        image.classList.add(layer);
        burgerWrapper.insertBefore(image, topBread);
        total.innerText = +total.innerText + price;

        image.addEventListener("click", () => {
            image.remove();
            total.innerText -= price;
        });
    });
});

orderBtn.addEventListener("click", () => {
    if (+total.innerText < 8) return;
    let order = Math.floor(Math.random() * 26 + 10);
    let date = new Date();
    let orderNum = date.getTime();
    localStorage.setItem(orderNum, total.innerHTML + "$, " + date);
    alert(
        "Buyurtmangiz qabul qilindi, narxi $" +
            total.innerText +
            " . Sizning navbat raqamingiz " +
            order +
            ". Bizni tanlaganingizdan xursandmiz :)"
    );

    burgerWrapper.innerHTML = "";
    burgerWrapper.append(bottomBread);
    burgerWrapper.append(topBread);

    total.innerHTML = 2;
});

let modeBtn = document.querySelector(".modeBtn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (localStorage.getItem("mode") === "dark") {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
});

let mode = localStorage.getItem("mode");
if (mode === "dark") {
    document.body.classList.add("dark");
}
