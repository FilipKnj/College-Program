//Skripta za prikazivanje sacuvanih pitanja
const showBody = document.querySelector('#showBody');
const mainQuestionBody = document.querySelector('#mainQuestionBody');
const navLinks = document.querySelectorAll('.nav-links');
const exit = document.querySelector('#exit');
const showBodyHolder = document.querySelector('#showBodyHolder')
const showBodyHeader = document.querySelector('#showBodyHeader');

//Fukcija za izlazak iz prozora koji prikazuje pitanja
exit.addEventListener('click',() => {
  showBody.classList.add('hide');
  mainQuestionBody.classList.remove('hide');
  showBodyHolder.innerHTML = '';
});

//Dodavanje listenera na navLinks elemente
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click',showQuestions);
}


//Fukcija koju pozivaju navLinks elementi i koja sluzi za prikazivanje pitanja
function showQuestions() {
  showBody.classList.remove('hide');
  mainQuestionBody.classList.add('hide');
  let text = '';
  if(this.innerText == 'All Questions'){
    showBodyHolder.innerHTML = '';
    showBodyHeader.innerText = 'All Questions'
    for (var i = 0; i < questionsArr.length; i++) {
      text = `<div class='holder'><p>${questionsArr[i].question}</p><p>${questionsArr[i].answer}</p></div>`;
      showBodyHolder.innerHTML += text;
    }
  }else if(this.innerText === 'Know'){
    showBodyHolder.innerHTML = '';
    showBodyHeader.innerText = 'Know';
    for (var i = 0; i < knowQuestionsArr.length; i++) {
      text = `<div class='holder'><p>${knowQuestionsArr[i].question}</p><p>${knowQuestionsArr[i].answer}</p></div>`;
      showBodyHolder.innerHTML += text;
    }
  }else if(this.innerText === 'Dont Know'){
    showBodyHolder.innerHTML = '';
    showBodyHeader.innerText = 'Dont Know';
    for (var i = 0; i < dontKnowQuestionsArr.length; i++) {
      text = `<div class='holder'><p>${dontKnowQuestionsArr[i].question}</p><p>${dontKnowQuestionsArr[i].answer}</p></div>`;
      showBodyHolder.innerHTML += text;
  }
};
};
