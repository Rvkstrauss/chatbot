function calculate(exp) {
  return {
    prompt: `${eval(exp)}`,
    followup: "That was easy, give me something harder 🤓",
    responseType: 'ready'
  };
}
function introduce() {
  return {
    prompt: `Hi I'm Maya! Today you're going to help me ace my game`,
    followup: `Let's start by telling me your name`,
    responseType: 'introduce'
  };
}
function greetOld(name) {
  return {
    prompt: `Nice to see you again ${name}!, Let's pick this up where we left off`,
    followup: promptMessage(),
    responseType: 'ready'
  };
}

function greetNew(name) {
  return {
    prompt: `Nice to meet you ${name}!`,
    followup: `Alright, this is how it's going to work. ${promptMessage()}`,
    responseType: 'ready'
  };
}

const promptMessage = () => {
  return `List any mathematical expression - I'll crunch it in no time`;
};

const formMessage = (content, type) => {
  return { from: "maya", content, type };
};

const respond = ({ type, from, content }, client) => {
  let response = ''; 
  switch (type) {
    case "greet":
      if (!content) return null;
      response = from === "guest" ? introduce() : greetOld(from);
      break;
    case "calculate":
      response = calculate(content);
      break;
    case "username":
      response = greetNew(content);
      break;
    default:
      break;
  }
  const { prompt, followup, responseType } = response;
  return [formMessage(prompt, responseType), formMessage(followup, responseType)];
};

module.exports = {
  respond,
};
