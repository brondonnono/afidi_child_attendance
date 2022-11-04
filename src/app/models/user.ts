
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

    constructor() {
        this.isAdmin = false;
        this.language = 'fr';
    }

    public setDefaultValue() {
        this.uid = 'a0347b33';
        this.username = 'Macbook237';
        this.pswd = '123456';
        this.language = 'fr';
        this.firstName = 'Nono Mabou';
        this.lastName = 'Wilfried Brondon';
        this.sex = 'Masculin';
        this.img = 'assets/img/noavatar.png';
        this.city = 'Yaoundé';
        this.quater = 'Odza';
        this.phoneNumber = '682510533';
        this.isParent = false;
        this.isAdmin = true;
    }

    public setUserValue(username: string, pswd: string, language: string, firstName: string, lastName: string, sex: string, img: string, city: string, quater: string, phoneNumber: string, isParent: boolean, isAdmin?: boolean): void {
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
        if (isParent) this.isParent = isParent;
        else this.isParent = false;

        if (isAdmin) this.isAdmin = isAdmin;
        else this.isAdmin = false;
    }

    public getUid(): string {
        return this.uid;
    }

    public setUid(uid: string) {
        this.uid = uid;
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
}
