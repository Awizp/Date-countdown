# Date countdown App
* Using vanilla Js only to built the app to countdown the upcoming date as Days : Hours : Minutes : Seconds format

1. Took the input value as date from document
2. Change the date value to GMT zone to get the exact date and time for that zone area
3. Using Date.parse() method to calculate the time in ms
4. Used timeCalc() function to calculate the difference between Input Date and Current Date
5. Updated the values in <span> tag using DOM Manipulation
6. Used localStorage.setItem() method to set the initial value of input value in local storage
7. Then added localStorage.getItem() method (if available) to get the local storage value and update in DOM

# Check the site
https://awizp.github.io/Date-countdown/
