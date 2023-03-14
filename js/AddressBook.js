class AddressBook {
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}\\s?[a-zA-Z]*$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get phoneNo() { return this._phone; }
    set phoneNo(phone) {
        let phoneRegex = RegExp('^[+]{0,1}[0-9]{2}\\s?[1-9]{1}[0-9]{9}$');
        if (phoneRegex.test(phone))
            this._phone = phone;
        else throw 'Phone No. is Incorrect!';
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9,-.]{3,}\\s+([a-zA-Z0-9,-.]{3,}\\s*)+$');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect!';
    }
    get city() { return this._city; }
    set city(city) {
        this._city = city;
    }
    get state() { return this._state; }
    set state(state) {
        this._state = state;
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$')
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is Incorrect!';
    }
    toString(){
        return `Id: ${this.id}, Name: ${this.name}, Phone No: ${this.phoneNo}, 
        Address: ${this.address}, State: ${this.state}, City: ${this.city}, 
        Zip: ${this.zip}`;
    }
}