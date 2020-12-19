import Student from './Student';

function main() {
  const student = new Student('John Doe', 'john@abc.com', '012345678');

  (student as any).playGame();

  console.log((student as any).phone);
}

main();