// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const nameLabel = document.querySelector('label[for="name-input"]')
const sendButton = document.getElementById('send-button')
const inputWrapper = document.getElementById('input-wrapper')

let userName = ""
// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

//3. Take subfood order
const getSubfood = (foodOrder) => {
  if (foodOrder === "pizza") {
    setTimeout(() => {
      showMessage("🍕 Pizza", 'user')
      setTimeout(() => {
        showMessage("What kind of pizza would you like?", 'bot')
        inputWrapper.innerHTML = `
          <button id="pepporoni">🍖 Pepporoni</button>
          <button id="cheese">🧀 Cheese</button>
          <button id="margherita">🍅 Margherita</button>
        `;
      }, 1000) // Delay second message 1 second after the first message
    }, 1000) // Delay the first message by 1 second
  } else if (foodOrder === "pasta") {
    setTimeout(() => {
      showMessage("🍝 Pasta", 'user')
      setTimeout(() => {
        showMessage("What kind of pasta would you like?", 'bot')
        inputWrapper.innerHTML = `
          <button id="spaghetti-bolognese">🍝 Spaghetti Bolognese</button>
          <button id="fettuccine-alfredo">🧈 Fettuccine Alfredo</button>
          <button id="lasagna">🍅 Lasagna</button>
        `;
      }, 1000)
    }, 1000)
  } else { //foodOrder has to be salad
    setTimeout(() => {
      showMessage("🥗 Salad", 'user')
      setTimeout(() => {
        showMessage("What kind of salad would you like?", 'bot')
        inputWrapper.innerHTML = `
          <button id="caesar">🥬 Caesar</button>
          <button id="greek">🥒 Greek</button>
          <button id="caprese">🍅 Caprese</button>
        `;
      }, 1000)
    }, 1000)
  }
}


//2. Take user's order using buttons
const getOrder = () => {
  showMessage(`Nice to meet you, ${userName}! What would you like to order today?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="pizza">🍕 Pizza</button>
    <button id="pasta">🍝 Pasta</button>
    <button id="salad">🥗 Salad</button>
  `
  document.getElementById('pizza').addEventListener("click", () => getSubfood('pizza'))
  document.getElementById('pasta').addEventListener("click", () => getSubfood('pasta'))
  document.getElementById('salad').addEventListener("click", () => getSubfood('salad'))
}



//1. Get user's name and trigger takeOrder function
const getUserName = (event) => {

  event.preventDefault() // Keeps chat history going
  userName = nameInput.value
  showMessage(`${userName}`, 'user')
  nameInput.value = '' // Clear the input field

  setTimeout(getOrder, 1000)
}



// Eventlisteners goes here 👇
// Event listener for the form submission
sendButton.addEventListener("click", getUserName)



// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000)
