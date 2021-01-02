
//  Gender Menu

const masculineBtn = document.querySelector("#MasculineButton");

const feminineBtn = document.querySelector("#FeminineButton");

const otherBtn = document.querySelector("#OtherButton")

// Hover animations for the buttons (change the background color on hover)

masculineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#577ada")
masculineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

feminineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#cf5151")
feminineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

otherBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#6d6d6d")
otherBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")