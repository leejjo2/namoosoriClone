import { question } from 'readline-sync';
import TravelClub from './TravelClub';
import ClubCoordinator from './ClubCoordinator';



class ClubConsole {
    //
    clubCoordinator: ClubCoordinator;

    constructor() {
      //
      this.clubCoordinator = new ClubCoordinator();
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
      const menuNumber = question('Select number: ');

      if (menuNumber.length !== 1) {
        console.log('Allow only one digit, but it\'s --> ' + menuNumber);
        return -1;
      }

      if (menuNumber === '0' || menuNumber === '1' || menuNumber === '2' || menuNumber === '3') {
        return parseInt(menuNumber);
      }
      else {
        console.log('Input a valid digit.');
        return -1;
      }
    }

    exitProgram(): void {
      //
      console.log('Program exit. Bye....');
      process.exit(0);
    }

    register(): void {
      //
      const answer = question('\n Input Club Name: ');
      let clubName = answer;

      clubName = clubName.trim();

      if (!clubName || !clubName.length) {
        console.log('Club name should not be null.');
        return;
      }

      if (this.clubCoordinator.exist(clubName)) {
        console.log('\n> Club name alraedy exists. --> ' + clubName);
        return;
      }

      let clubIntro = question(' Input Club Intro: ');

      if (!clubIntro || !clubIntro.length) { 
        return;
      }
      clubIntro = clubIntro.trim();

      const newClub = new TravelClub(clubName, clubIntro);
      const isRegistered = this.clubCoordinator.register(newClub);

      if (isRegistered) {
        console.log('\n> Registered club: ', newClub);
      }
      else {
        console.log('\n> Sorry, fail to register the club.');
      }
    }

    find(): void {
      //
      let clubName = '';

      while (true) {
        clubName = this.displayFindMenuAndGetKey();

        if (clubName === '0') {
          return;
        }

        let travelClub = null;

        travelClub = this.clubCoordinator.find(clubName);

        if (travelClub) {
          console.log('\n> Found club: ', travelClub);
        }
        else {
          console.log('\n> No such a club: ' + clubName);
        }
      }
    }

    displayFindMenuAndGetKey(): string {
      //
      if (!this.clubCoordinator.hasClubs()) {
        console.log('\n> No clubs in the storage.');
        return '0';
      }

      const clubName = question('\n Input club name to find(0.Previous menu): ');

      return clubName.trim();
    }

    findAll(): void {
      //
      if (!this.clubCoordinator.hasClubs()) {
        console.log('\n> No clubs in the storage');
        return;
      }

      let clubs = [];

      clubs = this.clubCoordinator.findAll();
      console.log('\n> Found ' + clubs.length + ' clubs.');

      for(const club of clubs) {
          console.log('\n> Found club: ' , club);
      }
    }
    
}
export default ClubConsole;

