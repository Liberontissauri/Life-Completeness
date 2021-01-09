
//  Elements

const masculineBtn = document.querySelector("#MasculineButton");

const feminineBtn = document.querySelector("#FeminineButton");

const otherBtn = document.querySelector("#OtherButton");

const firstScreenTitle = document.querySelector("#FirstScreenTitle");

const firstScreen = document.querySelector("#FirstScreen");

const secondScreen = document.querySelector("#SecondScreen");

const secondScreenTitle = document.querySelector("#SecondScreenTitle");

const ageInputField = document.querySelector("#AgeInput");

const sumbitAgeButton = document.querySelector("#SubmitAgeButton");

const thirdScreen = document.querySelector("#ThirdScreen");

const innerProgressBarAge = document.querySelector("#InnerProgressBarAge");

const barText = document.querySelector("#BarText");

const StatisticYears = document.querySelector("#StatisticYears");

const StatisticWeeks = document.querySelector("#StatisticWeeks");

const StatisticDays = document.querySelector("#StatisticDays");

const StatisticHours = document.querySelector("#StatisticHours");

const StatisticMinutes = document.querySelector("#StatisticMinutes");

const StatisticSeconds = document.querySelector("#StatisticSeconds");



// Gender Menu

// Hover animations for the buttons (change the background color on hover)

masculineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#577ada")
masculineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

feminineBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#cf5151")
feminineBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

otherBtn.addEventListener("mouseover", () => document.body.style.backgroundColor = "#6d6d6d")
otherBtn.addEventListener("mouseout", () => document.body.style.backgroundColor = "#A6E4A1")

//Hover animation for the Title (go upwards on hover)

firstScreenTitle.addEventListener("mouseover", () => firstScreenTitle.style.fontSize = "37pt");
firstScreenTitle.addEventListener("mouseout", () => firstScreenTitle.style.fontSize = "35pt");

// Gender Button Click

let selectedGender; // "Male" / "Female" / "Other"

masculineBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    selectedGender = "Male";
    document.body.style.backgroundColor = "#A6E4A1";
    secondScreen.style.display = "flex";
})

feminineBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    selectedGender = "Female";
    document.body.style.backgroundColor = "#A6E4A1";
    secondScreen.style.display = "flex";
})

otherBtn.addEventListener("click", () => {
    firstScreen.style.display = "none";
    selectedGender = "Other";
    document.body.style.backgroundColor = "#A6E4A1";
    secondScreen.style.display = "flex";
})

// Age Menu

//Hover animation for the Title (go upwards on hover)

secondScreenTitle.addEventListener("mouseover", () => secondScreenTitle.style.fontSize = "37pt");
secondScreenTitle.addEventListener("mouseout", () => secondScreenTitle.style.fontSize = "35pt");

// Ok Button Click

let selectedAge;

sumbitAgeButton.addEventListener("click", () => {
    if (ageInputField.value == "") return alert("There are non numeric characters in the field.")
    selectedAge = ageInputField.value;
    secondScreen.style.display = "none";
    thirdScreen.style.display = "flex";
    document.body.style.backgroundColor = "#f0f0f0";

    updateResults()
})

// Results Menu

function updateResults() {
    updateResultsInnerProgressBarAge();
    updateResultsText();
}

function updateResultsInnerProgressBarAge () {
    switch(selectedGender) {
        case "Male":
            innerProgressBarAge.style.backgroundColor = "#365CC1";
            innerProgressBarAge.style.width = Math.floor((selectedAge/70.8)*100) + "%";
            barText.innerText = `Congratulations, you have already lived ${Math.floor((selectedAge/70.8)*100)}% of your life!`
            break;

        case "Female":
            innerProgressBarAge.style.backgroundColor = "#C13636";
            innerProgressBarAge.style.width = Math.floor((selectedAge/75.6)*100) + "%";
            barText.innerText = `Congratulations, you have already lived ${Math.floor((selectedAge/75.6)*100)}% of your life!`
            break;

        case "Other":
            innerProgressBarAge.style.backgroundColor = "#6d6d6d";
            innerProgressBarAge.style.width = Math.floor((selectedAge/73.2)*100) + "%";
            barText.innerText = `Congratulations, you have already lived ${Math.floor((selectedAge/73.2)*100)}% of your life!`
            break;
    }
}

function updateResultsText() {
    StatisticYears.innerText = `You have Lived for ${selectedAge} years.`;
    StatisticWeeks.innerText = `You have Lived for ${selectedAge * 7} weeks.`;
    StatisticDays.innerText = `You have been alive for ${selectedAge*365} days.`;
    StatisticHours.innerText = `${selectedAge*365*24} hours have passed by since you were born.`;
    StatisticMinutes.innerText = `You have Lived for ${selectedAge*365*24*60} minutes.`
    StatisticSeconds.innerText = `You have been alive for ${selectedAge*365*24*60*60} Seconds.`

    switch(selectedGender) {
        case "Male":
            StatisticYears.style.color = "#365CC1";
            StatisticDays.style.color = "#365CC1";
            StatisticMinutes.style.color = "#365CC1";
            break;

        case "Female":
            StatisticYears.style.color = "#C13636";
            StatisticDays.style.color = "#C13636";
            StatisticMinutes.style.color = "#C13636";
            break;

        case "Other":
            StatisticYears.style.color = "#A6E4A1";
            StatisticDays.style.color = "#A6E4A1";
            StatisticMinutes.style.color = "#A6E4A1";
            break;
    }
}