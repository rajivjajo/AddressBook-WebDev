window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validatePhoneNo();
    validateAddress();
    validateZip();
    checkForUpdate();
});
const validateName = () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            nameError.textContent = "Name can't be empty";
            return;
        }
        try{
            (new AddressBook()).name = name.value;
            nameError.textContent = "";
        }
        catch(e){
            nameError.textContent = e;
        }
    });
}
const validatePhoneNo = () => {
    const phoneNo = document.querySelector('#phoneNo');
    const phoneError = document.querySelector('.phone-error');
    phoneNo.addEventListener('input', function(){
        if(phoneNo.value.length == 0){
            phoneError.textContent = "Phone No. can't be empty";
            return;
        }
        try{
            (new AddressBook()).phoneNo = phoneNo.value;
            phoneError.textContent = "";
        }
        catch(e){
            phoneError.textContent = e;
        }
    });
}
const validateAddress = () => {
    const address = document.querySelector("#address");
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function(){
        if(address.value.length == 0){
            addressError.textContent = "Address can't be empty";
            return;
        }
        try{
            (new AddressBook()).address = address.value;
            addressError.textContent = "";
        }
        catch(e){
            addressError.textContent = e;
        }
    });
}
const validateZip = () => {
    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function(){
        if(zip.value.length == 0){
            zipError.textContent = "Zip can't be empty";
            return;
        }
        try{
            (new AddressBook()).zip = zip.value;
            zipError.textContent = "";
        }
        catch(e){
            zipError.textContent = e;
        }
    });
}
const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem('editContact');
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObject = JSON.parse(addressBookJson);
    setForm();
}
const setForm = () => {
    setValue('#name', addressBookObject._name);
    setValue('#address', addressBookObject._address);
    setValue('#state', addressBookObject._state);
    const state = document.getElementById("state").value;
    setOption(state, '#city', addressBookObject._city);
    setValue('#zip', addressBookObject._zip);
    setValue('#phoneNo', addressBookObject._phone);
}