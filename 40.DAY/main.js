//select all the times here to get the date
const timeCont = document.querySelector( '#time h3' );
const dateCont = document.querySelector( '#date h3' );

//get the object for the new Date using the Date constructor
const date = new Date();

// at the time I run the script
console.log( date ); //Mon Mar 28 2022 17:18:04 GMT+0300 (East Africa Time)

// locale 
const locale = navigator.language;

// options for formatting the date
const optionsDate = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // dateStyle: 'short'
};

// options for formatting the time of the clock
const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

// foratting the date
const dateNow = new Intl.DateTimeFormat( locale, optionsDate ).format( date );

// formatting of the time
const timeNow = new Intl.DateTimeFormat( locale, optionsTime ).format( date );


//manipulate the DOM with the current date value
dateCont.innerText = dateNow;

// insert the current time into the DOM
timeCont.innerText = timeNow;

//log to the console the value of data
console.log( dateNow );