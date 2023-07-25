const bulbSection = document.querySelector(".bulb-section-container");
const regSection = document.querySelector(".reg-section");
const submitBtn = document.querySelector(".submit_btn");
const bulbSwitch = document.querySelector(".bulb");
const bulbOn = document.querySelector(".bulb-on");
const bulbOff = document.querySelector(".bulb-off");
const custName = document.querySelector("#name");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const header = document.querySelector(".header");

const list = JSON.parse(localStorage.getItem("bulb")) || [];

let flag = "ON";

function storeDataToDb(data) {
  localStorage.setItem("bulb", JSON.stringify(data));
}

function getDetails() {
  if (custName.value !== "" && date.value !== "" && email.value !== "") {
    bulbSection.classList.remove("hidden");
    regSection.classList.add("hidden");
    const details = {
      name: custName.value.trim(),
      date: date.value.trim(),
      email: email.value.trim(),
      city: city.value.trim(),
      country: country.value.trim(),
    };
    list.push(details);
    storeDataToDb(list);
    header.innerHTML += list[list.length - 1].name;
  } else alert("Empty task");
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getDetails();
});

bulbSwitch.addEventListener("click", () => {
  if (flag === "ON") flag = "OFF";
  else flag = "ON";
  document.getElementById("btn").innerHTML = flag;
  bulbOff.classList.toggle("hidden");
  bulbOn.classList.toggle("hidden");
});
