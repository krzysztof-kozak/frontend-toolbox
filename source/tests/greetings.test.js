import { getRandomGreeting, randomGreetings } from '../components/greetings';

test('generates valid greeting', () => {
  expect(randomGreetings).toContain(getRandomGreeting());
});
