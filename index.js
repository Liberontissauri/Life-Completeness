
//  Elements

const masculineBtn = document.querySelector("#MasculineButton");

const feminineBtn = document.querySelector("#FeminineButton");

const otherBtn = document.querySelector("#OtherButton");

const FirstScreenTitle = document.querySelector("#FirstScreenTitle");

const FirstScreen = document.querySelector("#FirstScreen");

const SecondScreen = document.querySelector("#SecondScreen");

// Gender Menu

// Hover animations for the buttons (change the background color on hover)

masculineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#577ada")
masculineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

feminineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#cf5151")
feminineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

otherBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#6d6d6d")
otherBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

//Hover animation for the Title (go upwards on hover)

FirstScreenTitle.addEventListener("mouseover", () => FirstScreenTitle.style.fontSize = "37pt");
FirstScreenTitle.addEventListener("mouseout", () => FirstScreenTitle.style.fontSize = "35pt");

// Gender Button Click

let selectedGender; // "Male" / "Female" / "Other"

masculineBtn.addEventListener("click", () => {
    FirstScreen.style.display = "none";
    selectedGender = "Male";
    document.body.style.backgroundColor = "#A6E4A1";
    SecondScreen.style.display = "flex";
})

feminineBtn.addEventListener("click", () => {
    FirstScreen.style.display = "none";
    selectedGender = "Female";
    document.body.style.backgroundColor = "#A6E4A1";
    SecondScreen.style.display = "flex";
})

otherBtn.addEventListener("click", () => {
    FirstScreen.style.display = "none";
    selectedGender = "Other";
    document.body.style.backgroundColor = "#A6E4A1";
    SecondScreen.style.display = "flex";
})

// Age Menu

//Hover animation for the Title (go upwards on hover)

SecondScreenTitle.addEventListener("mouseover", () => SecondScreenTitle.style.fontSize = "37pt");
SecondScreenTitle.addEventListener("mouseout", () => SecondScreenTitle.style.fontSize = "35pt");