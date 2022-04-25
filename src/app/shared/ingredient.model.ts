export class Ingredient{

    // public name: string;//we dont need them
    // public amount: number; // we could inside the constructor pass with defining them before

    constructor(public name: string,public amount: number){
        this.name = name;
        this.amount =amount;
    }
}