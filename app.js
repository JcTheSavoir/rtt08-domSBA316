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
4. Use the parent-child-sibling relationship to navigate beween elements at least once

5. Modify the HTML of one element in response to user interaction using innerHTML
*/

// --1. Button from html, will activate when clicked and user has chosen an example
const generateTheQuizOrHelper = () => {
    // 2A. check if div.midActionSection is already created.  If it is, do not create.
    checkForActionSection();
    //--2B. checks if quizGame or organizationHelper radio button is selected.  --> creates which one is selected
    checkFormSelected();
};
// 4. midActionSection will be created inside of the middleSectionContainer
    // This next line calls for the middleSectionContainer by referencing the
    // --> next sibling of div.mainSectionContainer
let midContainer = document.querySelector('.mainSectionContainer').nextElementSibling;
console.log(midContainer);
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

    //-----  sets element,attribute, and innerHTML for .midQuizForm
    let quizForm = document.createElement('form')
    quizForm.setAttribute('class', 'midQuizForm')
    
    //-----  sets element,attribute, and innerHTML for .quizField
    let qField = document.createElement('fieldset');
    qField.setAttribute('class', 'quizField');

    //-----  sets element,attribute, and innerHTML for legend tag
    let leg = document.createElement('legend');
    leg.innerHTML = 'Who is your favorite Character';

    //-----  sets element,attribute, and innerHTML for #ichigoQuiz
    let ichigoQ = document.createElement('input')
    ichigoQ.setAttribute('id', 'ichigoQuiz');
    ichigoQ.setAttribute('type', 'radio');
    ichigoQ.name = 'bleach'

    //-----  sets element,attribute, and innerHTML for label:ichigoQuiz
    let ichigoLabel = document.createElement('label');
    ichigoLabel.setAttribute('for', 'ichigoQuiz');
    ichigoLabel.innerHTML = 'Ichigo';

    //-----  sets element,attribute, and innerHTML for #uraharaQuiz
    let uraharaQ = document.createElement('input');
    uraharaQ.setAttribute('id', 'uraharaQuiz');
    uraharaQ.setAttribute('type', 'radio');
    uraharaQ.name = 'bleach'
    
    //-----  sets element,attribute, and innerHTML for label:uraharQuiz
    let uraharaLabel = document.createElement('label');
    uraharaLabel.setAttribute('for', 'uraharaQuiz');
    uraharaLabel.innerHTML = 'Urahara';

    //-----  sets element,attribute, and innerHTML for #aizenQuiz
    let aizenQ = document.createElement('input')
    aizenQ.setAttribute('id', 'aizenQuiz');
    aizenQ.setAttribute('type', 'radio');
    aizenQ.name = 'bleach'

    //-----  sets element,attribute, and innerHTML for label:aizenQuiz
    let aizenLabel = document.createElement('label');
    aizenLabel.setAttribute('for', 'aizenQuiz')
    aizenLabel.innerHTML = 'Aizen';

    //-----  sets element,attribute, and innerHTML for #tatsukiQuiz
    let tatsukiQ = document.createElement('input')
    tatsukiQ.setAttribute('id', 'tatsukiQuiz');
    tatsukiQ.setAttribute('type', 'radio');
    tatsukiQ.name = 'bleach'

    //-----  sets element,attribute, and innerHTML for label:tatsukiQuiz
    let tatsukiLabel = document.createElement('label');
    tatsukiLabel.setAttribute('for', 'tatsukiQuiz');
    tatsukiLabel.innerHTML = ('Tatsuki');

    //-----  sets element,attribute, and innerHTML for button
    let quizButton = document.createElement('button');
    quizButton.setAttribute('type', 'button');
    quizButton.innerHTML = 'Submit';

//-------Work on how to have this work when midActionSection is not already in html
    //------{APPEND section} 
    middleAction.prepend(actionQuiz);
    actionQuiz.append(quizTitle);
    actionQuiz.append(quizForm);
    quizForm.append(qField);
    qField.append(leg);
    qField.append(ichigoQ);
    qField.append(ichigoLabel);
    qField.append(uraharaQ);
    qField.append(uraharaLabel);
    qField.append(aizenQ);
    qField.append(aizenLabel);
    qField.append(tatsukiQ);
    qField.append(tatsukiLabel);
    qField.append(quizButton)
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
    
    //----- sets element,attribute, and innerHTML for .midHelperform
    let helperForm = document.createElement('form');
    helperForm.setAttribute('class', 'midHelperForm');

    //----- sets element,attribute, and innerHTML for fieldset tag
    let hField = document.createElement('fieldset');

    //----- sets element,attribute, and innerHTML for legend tag
    let helperLegend = document.createElement('legend');
    helperLegend.innerHTML = 'Write in some of your chores!'

    //----- sets element,attribute, and innerHTML for label:userChore1
    let labelOne = document.createElement('label');
    labelOne.setAttribute('for', 'userChores1');
    labelOne.innerHTML = 'Chore 1:'

    //----- sets element,attribute, and innerHTML for #userChore1
    let choiceOne = document.createElement('input')
    choiceOne.setAttribute('type', 'text');
    choiceOne.setAttribute('id', 'userChore1')

    //----- sets element,attribute, and innerHTML for label:userChore2
    let labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'userChores2');
    labelTwo.innerHTML = 'Chore 2:'

    //----- sets element,attribute, and innerHTML for #userChore2
    let choiceTwo = document.createElement('input')
    choiceTwo.setAttribute('type', 'text');
    choiceTwo.setAttribute('id', 'userChore2')

    //----- sets element,attribute, and innerHTML for label:userChore3
    let labelThree = document.createElement('label');
    labelThree.setAttribute('for', 'userChores3');
    labelThree.innerHTML = 'Chore 3:'

    //----- sets element,attribute, and innerHTML for #userChore3
    let choiceThree = document.createElement('input')
    choiceThree.setAttribute('type', 'text');
    choiceThree.setAttribute('id', 'userChore3')

    //----- sets element,attribute, and innerHTML for label:userChore4
    let labelFour = document.createElement('label');
    labelFour.setAttribute('for', 'userChores4');
    labelFour.innerHTML = 'Chore 4:'

    //----- sets element,attribute, and innerHTML for #userChore4
    let choiceFour = document.createElement('input')
    choiceFour.setAttribute('type', 'text');
    choiceFour.setAttribute('id', 'userChore4') 

    //-----  sets element,attribute, and innerHTML for button
    let helperButton = document.createElement('button');
    helperButton.setAttribute('type', 'button');
    helperButton.innerHTML = 'Submit'; 

    //------{APPEND section} 
    middleAction.prepend(actionHelper);
    actionHelper.append(helperTitle);
    actionHelper.append(helperForm);
    helperForm.append(hField);
    hField.append(helperLegend);
    hField.append(labelOne);
    hField.append(choiceOne);
    hField.append(labelTwo);
    hField.append(choiceTwo);
    hField.append(labelThree);
    hField.append(choiceThree);
    hField.append(labelFour);
    hField.append(choiceFour);
    hField.append(helperButton);
};

// const whichCharacter