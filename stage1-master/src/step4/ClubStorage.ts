import TravelClub from './TravelClub';


class ClubStorage {
  //
  clubs: TravelClub[];

  constructor() {
    //
    this.clubs = [];
  }

  count(): number {
    //
    return this.clubs.length;
  }

  exist(name: string): boolean {
    //
    for (const club of this.clubs) {
      if (club.name === name) {
        return true;
      }
    }
    return false;
  }

  store(club: TravelClub): string {
    //
    this.clubs.push(club);
    return club.name;
  }

  retrieve(name: string): TravelClub | null {
    //
    for (const club of this.clubs) {
      if (club.name === name) {
        return club;
      }
    }
    return null;
  }

  retrieveAll(): TravelClub[] {
    //
    return this.clubs;
  }
  
}
export default ClubStorage;
