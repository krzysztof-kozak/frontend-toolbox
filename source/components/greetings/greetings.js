const randomGreetings = ['Hello!', 'Hi!', 'How are you?', "What's up?", 'Yo!'];

export default function getRandomGreeting() {
  const maxIndex = randomGreetings.length - 1;
  const randomIndex = Math.floor(Math.random() * maxIndex);
  return randomGreetings[randomIndex];
}

export { randomGreetings };
