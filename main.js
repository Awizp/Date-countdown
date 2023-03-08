// get variables from html,
let body = document.body
let div = document.createElement("div")
let input = document.querySelector("input[name='endDate']")
let clock = document.querySelector(".clock")

// assign global variables to manipulate,
clock.style.margin = "1rem"
let previousState = clock.innerHTML
let interval
let timeStop

// getting value from the local storage,
const savedValue = localStorage.getItem("countdown") || false;
if (savedValue) {
    setCounter(savedValue)
    let inputValue = new Date(savedValue)
    input.valueAsDate = inputValue
}

// change the input value when we change,
input.addEventListener("change", (e) => {
    e.preventDefault()
    // set back the previous values when call back the function (update the DOM),
    clearInterval(interval)
    clock.innerHTML = previousState

    let temp = new Date(input.value)
    localStorage.setItem("countdown", temp)
    setCounter(temp)
    timeStop = false
})

// add the function to set the counter
function setCounter(el) {
    function updateInterval() {
        // set the timeStop value by total milli seconds got from timeLeft function,
        timeLeft = timeCalc(el)
        if (timeLeft.total <= 0) {
            timeStop = false
        }
        else {
            timeStop = true
        }
        //loop through the properties in that timeLeft object getting from timeLeft function,
        for (let props in timeLeft) {
            let el = document.querySelector("." + props)
            if (el) {
                el.innerHTML = `${timeLeft[props]}`
            }
        }
    }
    updateInterval()
    // if timestop is true than setInterval runs continuesly till comes to 0(after the function ran this will run),
    if (timeStop) {
        interval = setInterval(updateInterval, 1000)
    }
    else if (!timeStop) {
        clearInterval(interval)
        clock.innerHTML = "Update date higher than current one"
    }
}

// function for time calculation
function timeCalc(e) {
    let currentDate = new Date();
    let counterParse = Date.parse(e) - Date.parse(currentDate)

    // 1000 milli seconds for 1 second, so calc for how many seconds in that milli seconds,
    let seconds = Math.floor((counterParse / 1000) % 60)
    let minutes = Math.floor((counterParse / (1000 * 60)) % 60)
    let hours = Math.floor((counterParse / (1000 * 60 * 60)) % 24)
    let days = Math.floor(counterParse / (1000 * 60 * 60 * 24))

    // return back the object to timeLeft variable,
    return {
        "total": counterParse,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
    }
}
