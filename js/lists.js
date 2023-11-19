Object.keys(localStorage).forEach((key) => {
    if (key.toString().length === 13) {
        let orderList = document.getElementById("all-list");

        let details = localStorage.getItem(key).toString().split(",");
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let ordered = document.createElement("div");
        ordered.classList.add("ordered");
        ordered.append(key);
        wrapper.append(ordered);

        let price = document.createElement("div");
        price.classList.add("price");
        price.append(details[0]);
        wrapper.append(price);

        let orderedTime = document.createElement("div");
        orderedTime.classList.add("ordered-time");
        orderedTime.append(details[1]);
        wrapper.append(orderedTime);

        orderList.append(wrapper);
    }
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
