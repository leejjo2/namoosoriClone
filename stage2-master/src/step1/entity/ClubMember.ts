import RoleInClub from './RoleInClub';


class ClubMember {
    //
    email: string = '';
    name: string = '';
    nickname: string = '';
    phoneNumber: string = '';
    birthDay: string = '';
    role: RoleInClub = RoleInClub.Member;

    constructor(email: string, name: string, phoneNumber: string) {
      //
      this.setEmail(email);
      this.name = name;
      this.phoneNumber = phoneNumber;
    }

    setEmail(email: string): void {
      //
      if (!this.isValidEmailAddress(email)) {
        throw new Error('이메일 형식이 잘못되었습니다 ----> ' + email);
      }
      this.email = email;
    }

    isValidEmailAddress(email: string): boolean {
      //
      const ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

      return !!email.match(ePattern);
    }

    inviteLeader(): ClubMember {
      //
      const leader = new ClubMember('test@test.co.kr', 'gil dong Hong', '010-0001-0001');

      leader.role = RoleInClub.President;
      return leader;
    }

    inviteMember(): ClubMember {
      //
      return new ClubMember('memberlee@nextree.co.kr', 'nara Lee', '010-0001-0002');
    }

}
export default ClubMember;
