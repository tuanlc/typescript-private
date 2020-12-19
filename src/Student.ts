export default class Student {
  name: string;
  email: string;
  #phone: string;
  
  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.#phone = phone;
  }

  get4FirstNumbersOfPhone() {
    return this.#phone.substring(0, 4);
  }

  #playGame() {
    // Private time to play game (^-^)
  }
}