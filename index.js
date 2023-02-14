let randomNumber
let otvet
let hint = document.querySelector('.hint')
let box = document.querySelector('.diapazon')
let ot = document.querySelector('.ot')
let don = document.querySelector('.do')

//создают случайное число в диапазоне который выберет игрок
box.addEventListener("click", (event) => {
  let numberOt = +prompt('Введите начало диапазона')
  let numberDo = +prompt('Введите конец диапазона')
  ot.textContent = numberOt
  don.textContent = numberDo
  randomNumber = randomInteger(numberOt, numberDo)

  console.log(`Комп загадал `, randomNumber)
})

//добавляет функционал кнопке(выводит введённое число в консоль)
let box2 = document.querySelector('.knopkaDlyaOtveta')
box2.addEventListener("click", () => {
  otvet = document.querySelector('.pole').value
  console.log(`Вы ввели `, otvet)
})

//выводит подсказку
let podskazka = document.querySelector('.podskazka')
podskazka.addEventListener("click", () => {

  if (otvet - randomNumber >= 20) {
    hint.textContent = 'Больше'
  } else if (otvet - randomNumber >= 10 && otvet - randomNumber < 20) {
    hint.textContent = 'чуть больше'
  } else if (otvet - randomNumber >= 1 && otvet - randomNumber < 10) {
    hint.textContent = 'на каплю больше'
  } else if (otvet - randomNumber <= -20) {
    hint.textContent = 'Мало'
  } else if (otvet - randomNumber <= -10 && otvet - randomNumber > -20) {
    hint.textContent = 'чуть меньше'
  } else {
    hint.textContent = 'на каплю меньше'
  }
  if(otvet==randomNumber){
    alert('Победа!')
  }
  else{
    alert('Попробуй ещё')
  }
})



































function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
