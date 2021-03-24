let animals = {
  cow: {
    btnColor: 'primary',
    name: 'Cow',
    sound: 'Moo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1200px-Cow_female_black_white.jpg'
  },
  duck: {
    btnColor: 'warning',
    name: 'Duck',
    sound: 'Quack',
    imgUrl: 'https://www.treehugger.com/thmb/7g7LQAnUZcEWSThwdvIlFt2u2G0=/4560x2565/smart/filters:no_upscale()/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg'
  },
  dog: {
    btnColor: 'danger',
    name: 'Dog',
    sound: 'Woof',
    imgUrl: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'
  },
  sheep: {
    btnColor: 'secondary',
    name: 'Sheep',
    sound: 'baa',
    imgUrl: 'https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts-1200x800.jpg'
  },
  tim: {
    btnColor: 'info',
    name: 'Tim',
    sound: 'Tacos!',
    imgUrl: 'https://avatars.githubusercontent.com/u/52214801?s=460&u=5deaacb38faed350d6066139b350bc0d631fcbd7&v=4'
  }
}

function speak(type) {
  document.getElementById(type).disabled = true
  setTimeout(() => {
    document.getElementById(type).disabled = false
  }, 1500)
  let animal = animals[type]
  document.getElementById('msg').innerText = `The ${animal.name} Says ${animal.sound}!`
  document.getElementById('img').innerHTML = `
          <button type="button" class="btn btn-primary" onclick="partyMode()">Party</button>
          <img id="animal-img" src="${animal.imgUrl}" alt="cow" />
  `
}

function random() {
  // Creates an array of all the keys from the animals object as strings
  let choices = Object.keys(animals)
  // returns a random number between 0 and and exclusive upper bound (the last index)
  let randomIndex = Math.floor(Math.random() * choices.length)
  speak(choices[randomIndex])
}

function partyMode() {
  document.getElementById('animal-img').classList.add('fa-spin')
  setTimeout(() => {
    document.getElementById('animal-img').classList.remove('fa-spin')
  }, 1500)
}


function draw() {
  let template = ''
  // for each of the properties of the animals object
  for (let prop in animals) {
    // access the animal through the dictionary using the variable for the prop
    let animal = animals[prop]
    // create a button   
    template += `<button type="button" id="${prop}" class="btn btn-${animal.btnColor} mx-2" onclick="speak('${prop}')">${prop.toUpperCase()}</button>`
  }
  template += '<button type="button" class="btn btn-dark mx-2" onclick="random()">Random</button>'

  // add buttons to page
  document.getElementById('btns').innerHTML = template

}

// call draw at the start of the app so the buttons show up on the page
draw()










// SECTION attempt 1
// function cow() {
//   document.getElementById('msg').innerText = 'The Cow Says Moo!'
//   document.getElementById('img').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1200px-Cow_female_black_white.jpg" alt="cow" />'
// }


// function duck() {
//   document.getElementById('msg').innerText = 'The Duck Says Quack!'
//   document.getElementById('img').innerHTML = '<img src="https://www.treehugger.com/thmb/7g7LQAnUZcEWSThwdvIlFt2u2G0=/4560x2565/smart/filters:no_upscale()/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg" alt="duck" />'
// }