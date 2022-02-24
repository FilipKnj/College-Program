//Skripta za pravljenje i cuvanje pitanja
const mainBody = document.querySelector('#mainBody');
const formBody = document.querySelector('#formBody');
const addBtn = document.querySelector('#addBtn');
const addQuestionBtn = document.querySelector('#addQuestionBtn');
const backBtn = document.querySelector('#backBtn');
const addQuestionArea = document.querySelector('#addQuestion');
const addAnswerArea = document.querySelector('#addAnswer');
const addCategory = document.querySelector('#category');


//Dodavanje listenera na dugmice
addBtn.addEventListener('click',() => {
  mainBody.classList.add('hide');
  formBody.classList.remove('hide');
})
backBtn.addEventListener('click',() => {
  mainBody.classList.remove('hide');
  formBody.classList.add('hide');
  displayQuestion()
})

addQuestionBtn.addEventListener('click',saveQuestion);

//Ovde se skladiste pitanja po kategorijama
let questionsArr = [
  {
    question : `Glavni grad Srbije?`,
    answer : `Beograd`
  },
  {
    question : `Glavni grad Nemacke?`,
    answer : `Berlin`
  },
  {
    question : `Glavni grad Rumunije?`,
    answer : `Bukurest`
  },
  {
    question : `Koliko je 2 + 2?`,
    answer : `Rezultat je : 4`
  },
  {
    question : `Koliko je 5 + 5?`,
    answer : `Rezultat je : 10`
  },
  {
    question : `Koliko je Staro Sunce?`,
    answer : `Nmp brt isk`
  },
  {
    question : `Koliko je stara zemlja?`,
    answer : `Ni to brt iskr nmp`
  }
];
let knowQuestionsArr = [
  {
    question : `Koliko je 2 + 2?`,
    answer : `Rezultat je : 4`
  },
  {
    question : `Koliko je 5 + 5?`,
    answer : `Rezultat je : 10`
  }
];
let dontKnowQuestionsArr = [
  {
    question : `Koliko je Staro Sunce?`,
    answer : `Nmp brt isk`
  },
  {
    question : `Koliko je stara zemlja?`,
    answer : `Ni to brt iskr nmp`
  }
];

//Fukcija za kreiranje i cuvanje pitanja
function saveQuestion() {
  let qv = addQuestionArea.value;
  let av = addAnswerArea.value;
  let cv = addCategory.value;
  let question = {
    question : qv,
    answer : av,
    category : cv
  };
  if(question.category === 'Znam'){
    questionsArr.push(question);
    knowQuestionsArr.push(question);
  }else if(question.category === 'Ne znam'){
    questionsArr.push(question);
    dontKnowQuestionsArr.push(question);
  }else{
    questionsArr.push(question);
  }
  addQuestionArea.value = '';
  addAnswerArea.value = '';
  console.log(questionsArr,knowQuestionsArr,dontKnowQuestionsArr);
}
