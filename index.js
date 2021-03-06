
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

const SideNumberRight = document.querySelector("#SideNumberRight");

const SideNumberInner = document.querySelector("#SideNumberInner");

const barText = document.querySelector("#BarText");

const StatisticYears = document.querySelector("#StatisticYears");

const StatisticMonths = document.querySelector("#StatisticMonths");

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
    updateSideBarLimitsText();
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

function updateSideBarLimitsText() {
    switch(selectedGender) {
        case "Male":
            SideNumberRight.innerText = "71"
            SideNumberInner.innerText = selectedAge;
            SideNumberInner.style.color = "#365CC1";
            break;

        case "Female":
            SideNumberRight.innerText = "76"
            SideNumberInner.innerText = selectedAge;
            SideNumberInner.style.color = "#C13636";
            break;

        case "Other":
            SideNumberRight.innerText = "73"
            SideNumberInner.innerText = selectedAge;
            SideNumberInner.style.color = "#6d6d6d";
            break;
    }
}

function updateResultsText() {
    StatisticYears.innerText = `You have Lived for ${ParseNumbers(selectedAge)} years.`;
    StatisticMonths.innerText = `You have been alive for ${ParseNumbers(selectedAge * 12)} months.`;
    StatisticWeeks.innerText = `You have Lived for ${ParseNumbers(Math.floor((selectedAge * 365) / 7))} weeks.`;
    StatisticDays.innerText = `You have been alive for ${ParseNumbers(selectedAge*365)} days.`;
    StatisticHours.innerText = `${ParseNumbers(selectedAge*365*24)} hours have passed by since you were born.`;
    StatisticMinutes.innerText = `You have Lived for ${ParseNumbers(selectedAge*365*24*60)} minutes.`
    StatisticSeconds.innerText = `You have been alive for ${ParseNumbers(selectedAge*365*24*60*60)} Seconds.`

    switch(selectedGender) {
        case "Male":
            StatisticYears.style.color = "#365CC1";
            StatisticWeeks.style.color = "#365CC1";
            StatisticHours.style.color = "#365CC1";
            StatisticSeconds.style.color = "#365CC1";
            break;

        case "Female":
            StatisticYears.style.color = "#C13636";
            StatisticWeeks.style.color = "#C13636";
            StatisticHours.style.color = "#C13636";
            StatisticSeconds.style.color = "#C13636";
            break;

        case "Other":
            StatisticYears.style.color = "#A6E4A1";
            StatisticWeeks.style.color = "#A6E4A1";
            StatisticHours.style.color = "#A6E4A1";
            StatisticSeconds.style.color = "#A6E4A1";
            break;
    }
}

// Utilities

function ParseNumbers(numbers) {
    let returnString = "";
    numbers = String(numbers).split("");

    let counter = 0;

    numbers.forEach(element => {
        if ((numbers.length - counter)%3 == 0) returnString += " ";
        returnString += element;

        
        counter ++;
    });

    return returnString;
}