const STATES = require('./config');

function calculate(exp) {
  try {
    return {
      prompt: `${eval(exp)}`,
      followup: "That was easy, give me something harder 🤓",
      newState: STATES.GREETED
  };
  } catch (e) {
    return {
      prompt: "That's not a valid expression",
      followup: "Try something else",
      newState: STATES.GREETED
    }
  }
}
function introduce() {
  return {
    prompt: `Hi I'm Maya! Today you're going to help me ace my game`,
    followup: `Let's start by telling me your name`,
    newState: STATES.INTRODUCED
  };
}
function greetOld(name) {
  return {
    prompt: `Nice to see you again ${name}!, Let's pick this up where we left off`,
    followup: promptMessage(),
    newState: STATES.GREETED
  };
}

function greetNew(name) {
  return {
    prompt: `Nice to meet you ${name}!`,
    followup: `Alright, this is how it's going to work. ${promptMessage()}`,
    newState: STATES.GREETED
  };
}

const promptMessage = () => {
  return `List any mathematical expression - I'll crunch it in no time`;
};

const formMessage = (content) => {
  return { from: "maya", content };
};

const greet = (clients, client) => {

  const { prompt, followup, newState } = response;
  return {dialog: [formMessage(prompt), formMessage(followup)], state: newState };
} 

const respond = ({ from, content }, client, state) => {
  let response = ''; 
  switch (state) {
    case STATES.CONNECTED:
      if (client !== 'guest' ) {
        response = greetOld(client);
    } else { 
      response = introduce() 
    }
      break;
    case STATES.INTRODUCED:
      response = greetNew(content);
      break;
    case STATES.GREETED:
      if (content) { response = calculate(content)};
      break;
    default:
      break;
  }
  const { prompt, followup, newState } = response;
  return {dialog: [formMessage(prompt), formMessage(followup)], state: newState };
};

module.exports = {
  respond,
  greet
};
