import { question } from 'readline-sync';


class ClubConsole {

  constructor() {
    //
  }

  showMenu(): void {
    //
    let inputNumber = 0;

    while (true) {

      this.displayMainMenu();
      inputNumber = this.selectMainMenu();

      switch (inputNumber) {
        //
        case 1:
          this.register();
          break;
        case 2:
          this.find();
          break;
        case 3:
          this.findAll();
          break;
        case 0:
          this.exitProgram();
          return;
        default:
          console.log('Choose Again!');
      }
    }
  }

  displayMainMenu(): void {
    //
    console.log('......................');
    console.log('[Travel Club Menu]');
    console.log('......................');
    console.log(' 1. Register');
    console.log(' 2. Find');
    console.log(' 3. Find All');
    console.log(' 0. Exit program');
    console.log('......................');
  }

  selectMainMenu(): number {
    //
    const answer = question('Select number : ');
    const menuNumber = parseInt(answer);

    return menuNumber;
  }

  exitProgram(): void {
    //
    console.log('Program exit. Bye....');
    process.exit(0);
  }

  register(): void {
    //
    console.log('You\'ve select the register menu.');
  }

  find(): void {
    //
    console.log('You\'ve select the find menu.');
  }

  findAll(): void {
    //
    console.log('You\'ve select the findAll menu.');
  }
  
}
export default ClubConsole;

