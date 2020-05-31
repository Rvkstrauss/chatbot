const calculate = (exp: string) => {
  return {prompt: `${eval(exp)}`, response: 'That was easy, give me something harder 🤓'}
}
const introduce = () => {
  return {prompt: `Hi I'm Maya! Today you're going to help me ace my game`, response: `Let's start by telling me your name`}
}
const greetOld = (name: string) => {
  return {prompt: `Nice to see you again ${name}!, Let's pick this up where we left off`, response: promptMessage()};
}

const greetNew = (name: string) => {
    return {prompt: `Nice to meet you ${name!}`,response: `Alright, this is how it's going to work. ${promptMessage()}`}
}

const promptMessage = () => {
  return {prompt: `List any mathematical expression - I'll crunch it in no time`}
}
