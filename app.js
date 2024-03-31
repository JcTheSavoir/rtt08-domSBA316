//-----------------------{Instructions}---------------//
// ---All elements will be inside of the div "middleSectionContainer"---
/*
1. create function for the onclick property of the button from "midFormForm"
2A. create midActionSection top div -->
2B. check if quizGame or organization Helper radio button is selected --> create either "midActionQuiz" OR "midActionHelper" div, depending on which example user choose from midFormForm
3A. {div.midActionQuiz}, create:
     3A1: {h4.midQuizTitle} --> 
     3A2: {form.midQuizForm} -->
         3A3: {fieldset} -->
             3A4: {legend} -->
             3A5: {4 inputs; 4 labels}
             3A6: button with an .addeventlistener

3B. {div.midActionHelper} -->
     3B1: {h4.midHelperTitle} -->
     3B2: {form.midHelperForm} -->
         3B3: {fieldset} -->
             3B4: {legend} -->
             3B5: {4 labels; 4 inputs}
             3B6: button with an .addeventlistener

*/


// --1. Button from html, will activate when clicked and user has chosen an example
const generateTheQuizOrHelper = () => {
    // 2A. check if div.midActionSection is already created.  If it is, do not create.
    checkForActionSection();
    //--2B. checks if quizGame or organizationHelper radio button is selected.  --> creates which one is selected
    checkFormSelected();
};
// midActionSection will be created inside of the middleSectionContainer
let midContainer = document.querySelector(`.middleSectionContainer`);
// forms will be created inside the midActionSection
// let middleAction = document.querySelector('.midActionSection');


// 2A {function} check if div.midActionSection is already created.  If it is, do not create.
const checkForActionSection = () => { //--------after else add "return"
    //sets midAction to the value of the div with class midActionSection
    const midAction = document.querySelector('.midActionSection');
    console.log(midAction);
    // checks if midAction === null (Happens if there is no div with class midActionSection).  If so, it will create the div, otherwise it will do nothing.
    if (midAction === null) {
        // sets divAction to be a div element
        let divAction = document.createElement('div');
        // sets the class of divAction
        divAction.setAttribute('class', 'midActionSection');
        console.log(`midActionSection is not created`);
        // appends divAction to the bottom of .middleSectionContainer
        midContainer.append(divAction)
        // return true
    } else {
        console.log(`midActionSection is already created`);
        // return false
    }
};

//-- 2B {function} check which form is selected
const checkFormSelected = () => {
    // checks if quizGame or organizationHelper radio button is selected.  Sets it to true if selected, false if not.
    let quizRadio = document.getElementById('quizGame').checked;
    let helperRadio = document.querySelector('#organizationHelper').checked
    console.log(quizRadio);
    console.log(helperRadio);
    //Each form will have it's own function, and called upon based on which part of the if statement is called
    if (quizRadio === true) {
        console.log(`quizGame is selected`);
        //--3A. create midActionQuiz
        generateQuiz();
        
    } else if (helperRadio === true) {
        console.log(`organizationHelper is selected`);
        //-- 3B. create midActionHelper
        generateHelper();
        
    } else {
        console.log(`Neither are selected`);
    }
};

//-- 3A {function} create midActionQuiz. 
const generateQuiz = () => {
/*3A. {div.midActionQuiz}, create:
     3A1: {h4.midQuizTitle} --> 
     3A2: {form.midQuizForm} -->
         3A3: {fieldset} -->
             3A4: {legend} -->
             3A5: {4 inputs; 4 labels}
             3A6: button with an .addeventlistener */
//----- workaround for "midActionSection" not being referenced outside of it's function
let middleAction = document.querySelector('.midActionSection')


    //----- sets element and attribute for midActionQuiz
    let actionQuiz = document.createElement('div')
    actionQuiz.setAttribute('class', 'midActionQuiz')

    //----- sets element,attribute, and innerHTML for .midQuizTitle
    let quizTitle = document.createElement('h4');
    quizTitle.setAttribute('class', 'midQuizTitle');
    quizTitle.innerHTML = `Which Bleach Character are you?!`;

//-------Work on how to have this work when midActionSection is not already in html
    //------{APPEND section} 
    middleAction.append(actionQuiz);
    actionQuiz.append(quizTitle);

}

//-- 3B {function} to create midActionHelper
const generateHelper = () => {
/* 3B. {div.midActionHelper} -->
     3B1: {h4.midHelperTitle} -->
     3B2: {form.midHelperForm} -->
         3B3: {fieldset} -->
             3B4: {legend} -->
             3B5: {4 labels; 4 inputs}
             3B6: button with an .addeventlistener */
//----- workaround for "midActionSection" not being referenced outside of it's function
let middleAction = document.querySelector('.midActionSection')


    //----- sets element and attribute for midActionHelper
    let actionHelper = document.createElement('div')
    actionHelper.setAttribute('class', 'midActionHelper')

    //----- sets element,attribute, and innerHTML for .midHelperTitle
    let helperTitle = document.createElement('h4');
    helperTitle.setAttribute('class', 'midHelperTitle');
    helperTitle.innerHTML = `What chores do you need to prioritize?`;     
    
    //------{APPEND section} 
    middleAction.append(actionHelper);
    actionHelper.append(helperTitle);        
}