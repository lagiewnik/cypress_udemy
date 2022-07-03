class Success {
    thanks() {
        console.log("Thank you for using our services");
    }
}
class Calculations  extends Success {
    get text() {
        return "Your calculation: "
    }

    get info() {
        return "Your count is less than 10"
    }

    add() {
        return 2+6
    }

    multiply() {
        return 4*76
    }

    resultDisplay(calculatedVal) {
        console.log(this.text + " " + calculatedVal);
            if (calculatedVal < 10){
                console.log(this.info)
            }
        console.log(this.thanks())
    }
}

class DisplayName {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }

    welcome() {
        console.log("Welcome " + this.name + " "+ this.surname +"!!!");
    }
}

const execute_calc = new Calculations;

// console.log(execute_calc.text);
// console.log(execute_calc.info);
// console.log(execute_calc.add());
// console.log(execute_calc.multiply());

console.log(execute_calc.resultDisplay(execute_calc.multiply()));
console.log(execute_calc.thanks());

const welcomePerson = new DisplayName("Dawid", "Bonini");
welcomePerson.welcome();