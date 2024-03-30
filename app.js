//-----------------------{Instructions}---------------//
// ---All elements will be inside of the div "middleSectionContainer"---
// 1. create function for the onclick property of the button from "midFormForm"
// 2. create midActionSection top div --> then create either "midActionQuiz" OR "midActionHelper" div, depending on which example user choose from midFormForm
// 3A. {div.midActionQuiz}, create:
//      3A1: {h4.midQuizTitle} --> 
//      3A2: {form.midQuizForm} -->
//          3A3: {fieldset} -->
//              3A4: {legend} -->
//              3A5: {4 inputs; 4 labels}
//              3A6: button with an .addeventlistener
// 
// 3B. {div.midActionHelper} -->
//      3B1: {h4.midHelperTitle} -->
//      3B2: {form.midHelperForm} -->
//          3B3: {fieldset} -->
//              3B4: {legend} -->
//              3B5: {4 labels; 4 inputs}
//              3B6: button with an .addeventlistener
//


// --1. Button from html, will activate when clicked and user has chosen an example
const generateTheQuizOrHelper = () => {
    //--2. checks if quizGame or organizationHelper radio button is selected.  Sets it to true if selected, false if not.
    let quizRadio = document.getElementById('quizGame').checked;
    let helperRadio = document.querySelector('#organizationHelper').checked
    console.log(quizRadio);
    console.log(helperRadio);
    //---2 continued. Each form will have it's own function, and called upon based on which part of the if statement is called
    if (quizRadio === true) {
        console.log(`quizGame is selected`);
        generateQuiz();

    } else if (helperRadio === true) {
        console.log(`organizationHelper is selected`);
        generateHelper();

    } else {
        console.log(`Neither are selected`);
    }
}

//-- 3A. Function to create midActionQuiz. 
const generateQuiz = () => {

}

//-- 3B. Function to create midActionHelper
const generateHelper = () => {

}