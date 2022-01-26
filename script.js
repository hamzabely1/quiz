
//mon tableua avec les questione et les reponce
const quizData = [
  {
      
    question: "A qui et à l'anime appartient cette chanson?",
    audio: "song/att.mp3",
    a:"Black clover",
      b: "One pice",
      c: "Shingeki no Kyojin",
      d: "Demon slayer",
      correct: "c",
  },
  {
      question: "A qui et à l'anime appartient cette chanson?",
      audio :"song/ae.mp3",
      a: "Shingeki no Kyojin",
      b: "naruto",
      c: "Demon Slayer",
      d: "Boku no Hero Academia",
      correct: "c",
  },
  {
      
    question: "A qui et à l'anime appartient cette chanson?",
      audio: "song/ai.mp3",
    a: "Tokyo Ghou",
      b: "Demon slayer",
      c: "One Punch Man",
      d: "Dragon Ball",
      correct: "a",
  },
  {
      question: "A qui et à l'anime appartient cette chanson?",
      audio:"song/al.mp3",
      a: "Hunte x Hunter",
      b: "Boku no Hero Academia",
      c: "Dragon Ball",
      d: "One pice",
      correct: "d",
  },
  {
    question: "A qui et à l'anime appartient cette chanson?",
    audio:"song/ab.mp3",
    a: "Demon slayer",
    b: "Bleach",
    c: "Dragon Ball",
    d: "One pance man",
    correct: "d",
},
{
  question: "A qui et à l'anime appartient cette chanson?",
  audio:"song/af.mp3",
  a: "Shingeki no Kyojin",
  b: "naruto",
  c: "Dragon Ball",
  d: "Bleach",
  correct: "b",
},




];


// j'ai apple mes id sur html

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let audio1 = document.getElementById("audio")
let verifica  = document.getElementById("veridfica")

let currentQuiz = 0
let score = 0




// affichage de le question

Quiz()

function Quiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  audio1.src = currentQuizData.audio
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}



//

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}



function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

// conteru de point e affigage de les points avec le button réjeux


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++

     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         Quiz()
         
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         
         `
     }
  }
})


