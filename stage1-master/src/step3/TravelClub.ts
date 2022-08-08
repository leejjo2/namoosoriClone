class TravelClub {
    //
    name: string;
    intro: string;

    constructor(name: string, intro: string) {
      //
      this.name = name;
      this.intro = intro;
    }

    get clubInfo() {
      //
      return `club name: ${this.name},  intro: ${this.intro}`;
    }

    tellMeAboutYou(): void {
      //
      console.log(this.clubInfo);
    }

}
export default TravelClub;
