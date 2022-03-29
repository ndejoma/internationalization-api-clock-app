//select elements  where to set the date and the time
const timeCont = document.querySelector( '#time > h3' );
const dateCont = document.querySelector( '#date > h3' );

//get the object for the new Date o using the Date constructor
const getDate = () => new Date();
// const date = new Date()

//get the locale from the navigator object
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
    hour12: false,
    timeZoneName: 'short'
};


//create the fuction to set cuurent the time in the DOM
const setTime = ( locale, date, options, targetElement ) => {

    // formatting of the time
    let timeNow = new Intl.DateTimeFormat( locale, options ).format( date );

    // insert the current time into the DOM
    targetElement.innerText = timeNow;
};

//create the fuction to set cuurent the time in the DOM
const setDate = ( locale, date, options, targetElement ) => {

    // foratting the date
    let dateNow = new Intl.DateTimeFormat( locale, optionsDate ).format( date );

    //manipulate the DOM with the current date value
    targetElement.innerText = dateNow;
};

// create a function to be run, which sets date and the time
const setTimeDate = () => {
    // calll the function to set the curennt date
    setTime( locale, getDate(), optionsTime, timeCont );

    // call the function to set the current date
    setDate( locale, getDate(), optionsDate, dateCont );
};

// call the function to set the date and the time
setTimeDate();


// use setInterval to call the updateTime function every 1 second or 1000ms in a callback
const startTicking = () => {
    setInterval( () => {
        setTimeDate();
    }, 1000 );
};


// call the function to start ticking
startTicking();