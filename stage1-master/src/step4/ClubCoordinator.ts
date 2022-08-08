import TravelClub from './TravelClub';
import ClubStorage from './ClubStorage';


class ClubCoordinator {
    //
    clubStorage: ClubStorage;

    constructor() {
      //
      this.clubStorage = new ClubStorage();
    }

    hasClubs(): boolean {
      //
      return this.clubStorage.count() !== 0;
    }

    register(newClub: TravelClub): boolean {
      //
      const clubName = this.clubStorage.store(newClub);

      return clubName !== null;
    }

    exist(name: string): boolean {
      //
      return this.clubStorage.exist(name);
    }

    find(name: string): TravelClub | null {
      //
      return this.clubStorage.retrieve(name);
    }

    findAll(): TravelClub[] {
      //
      return this.clubStorage.retrieveAll();
    }

}
export default ClubCoordinator;

