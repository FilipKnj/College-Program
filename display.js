//Skripta za prikazivanje pitanja 
const questionIndex = document.querySelector('#questionIndex');
const spanQuestion = document.querySelector('#question');
const spanAnswer = document.querySelector('#answer');
const showHide = document.querySelector('#showHide');
const nextBtn = document.querySelector('#nextBtn');
const selectCategory = document.querySelector('#chooseCategory');
const checkbox = document.querySelector('#checkbox');
let zeroAll = 0;
let zeroKnow = 0;
let zeroDont = 0;


//Dodavanje eventa i fukcija za skrivanje i prikazivanje odgovora na pitanje
showHide.addEventListener('click',() => {
  if(showHide.getAttribute('class') === 'bi bi-eye-slash-fill'){
    spanAnswer.style.color = `#000`;
    spanAnswer.style.textShadow = '1px 2px 3px #ff66cc';
    showHide.setAttribute('class','bi bi-eye-fill')
  }else{
    showHide.setAttribute('class','bi bi-eye-slash-fill');
    spanAnswer.style.color = 'var(--main-gray)';
    spanAnswer.style.textShadow = 'none';
  }
})

//Dodavanje listenera na checkbox za biranje redosleda pitanja
checkbox.addEventListener('change', function() {
  if (this.checked) {
    nextBtn.addEventListener('click',displayQuestion);
    nextBtn.removeEventListener('click',questionsByOrder);
  } else {
    nextBtn.removeEventListener('click',displayQuestion);
    nextBtn.addEventListener('click',questionsByOrder);
  }
});

// Fukcija za random pitanja
function displayQuestion() {
  let rand;
  if(selectCategory.value === 'All Questions'){
    rand =  Math.floor(Math.random()*questionsArr.length);
    questionIndex.innerText = `${rand+1}.`;
    spanQuestion.innerText = questionsArr[rand].question;
    spanAnswer.innerText = questionsArr[rand].answer;
  }else if(selectCategory.value === 'Know'){
    rand =  Math.floor(Math.random()*knowQuestionsArr.length);
    questionIndex.innerText = `${rand+1}.`;
    spanQuestion.innerText = knowQuestionsArr[rand].question;
    spanAnswer.innerText = knowQuestionsArr[rand].answer;
  }else if(selectCategory.value === 'Dont Know'){
    rand =  Math.floor(Math.random()*dontKnowQuestionsArr.length);
    questionIndex.innerText = `${rand+1}.`;
    spanQuestion.innerText = dontKnowQuestionsArr[rand].question;
    spanAnswer.innerText = dontKnowQuestionsArr[rand].answer;
  }
}


//Fukcija za pravilan redosled piranja//
function questionsByOrder() {
  let zero = 0;
  if(selectCategory.value === 'All Questions'){
    questionIndex.innerText = `${zeroAll+1}.`;
    spanQuestion.innerText = questionsArr[zeroAll].question;
    spanAnswer.innerText = questionsArr[zeroAll].answer;
    zeroAll++;
    if(zeroAll === questionsArr.length){
      zeroAll = zero;
    }
  }else if(selectCategory.value === 'Know'){
    questionIndex.innerText = `${zeroKnow+1}.`;
    spanQuestion.innerText = knowQuestionsArr[zeroKnow].question;
    spanAnswer.innerText = knowQuestionsArr[zeroKnow].answer;
    zeroKnow++;
    if(zeroKnow === knowQuestionsArr.length){
      zeroKnow = zero;
    }
  }else if(selectCategory.value === 'Dont Know'){
    questionIndex.innerText = `${zeroDont+1}.`;
    spanQuestion.innerText = dontKnowQuestionsArr[zeroDont].question;
    spanAnswer.innerText = dontKnowQuestionsArr[zeroDont].answer;
    zeroDont++;
    if(zeroDont === dontKnowQuestionsArr.length){
      zeroDont = zero;
    }
  }
}
