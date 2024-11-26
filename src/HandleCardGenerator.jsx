
const quantityOfCardToGenerate = document.querySelector('#quantity')
const generateButton = document.querySelector('button')
// const result = document.querySelector('.result')

export function handleCardGenerator(event){
  event.preventDefault()
  // result.innerHTML = quantityOfCardToGenerate.value
  // for (let i = 0; i <= quantityOfCardToGenerate.value; i++){
  //   result.innerHTML += `Printed ${i} times <br>`
  // }
  console.log('clicked')
}

// generateButton.addEventListener('click', handleCardGenerator)