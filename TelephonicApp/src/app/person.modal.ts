export class Person {
   private _name: string;
   private _mobile: number;
   private _age: number;
   private _address: string;
    get name(): string {
        return this._name
    };
    set name(val) {
        this._name = val
    }
    get mobile(): number {
        return this._mobile
    };
    set mobile(val) {
        this._mobile = val
    }
    get age(): number {
        return this._age
    };
    set age(val) {
        this._age = val
    }
    get address(): string {
        return this._address
    };
    set address(val) {
        this._address = val
    }

}