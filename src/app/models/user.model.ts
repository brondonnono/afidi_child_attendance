
export class User {
    private uid: string;
    public username: string;
    public pswd: string;
    public language: string;
    public firstName: string;
    public lastName: string;
    public sex: string;
    public img: string;
    public city: string;
    public quater: string;
    public phoneNumber: string;
    private isParent: boolean;
    private isAdmin: boolean;
    private childName?: string;
    private childSchoolName?: string;
    private childBirthDay?: Date;
    private childSex?: string;

    constructor() {
        this.uid = 'a0347b33';
        this.username = 'Macbook237';
        this.pswd = '123456';
        this.language = '';
        this.firstName = 'Nono Mabou';
        this.lastName = 'Wilfried Brondon';
        this.sex = 'Masculin';
        this.img = 'assets/noavatar.png';
        this.city = 'Yaoundé';
        this.quater = 'Odza';
        this.phoneNumber = '682510533';
        this.isParent = false;
    }

    public setUserValue(username: string, pswd: string, language: string, firstName: string, lastName: string, sex: string, img: string, city: string, quater: string, phoneNumber: string, isParent: boolean): void {
        this.username = username;
        this.pswd = pswd;
        this.language = language;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.img = img;
        this.city = city;
        this.quater = quater;
        this.phoneNumber = phoneNumber;
        if (isParent) {
            this.isParent = isParent;
        } else {
            this.isParent = false;
        }
    }

    public getUid(): string {
        return this.uid;
    }

    public getIsAdmin(): boolean {
        return this.isAdmin;
    }

    public setIsAdmin( isAdmin: boolean): void {
        this.isAdmin = isAdmin;
    }

    public getIsParent(): boolean {
        return this.isParent;
    }

    public setIsParent( isParent: boolean): void {
        this.isParent = isParent;
    }

    public getChildName(): string {
        return this.childName;
    }

    public setChildName(childName: string): void {
        this.childName = childName;
    }

    public getChildSchoolName(): string {
        return this.childSchoolName;
    }

    public setChildSchoolName(schoolName: string): void {
        this.childSchoolName = schoolName;
    }

    public getChildBirthDay(): Date {
        return this.childBirthDay;
    }

    public setChildBirthDay(birthDay: Date): void {
        this.childBirthDay = birthDay;
    }

    public getChildSex(): string {
        return this.childSex;
    }

    public setChildSex(sex: string): void {
        this.childSex = sex;
    }

}
