let isUpdate = false;
let addressBookObject = {};
const save = (event) => {
    try {
        event.preventDefault();
        setAddressBookObject();
        // let addressBookData = createJsonObject();
        // createAndUpdateStorage(addressBookData);
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        console.log(e);
    }
}
const createJsonObject = (id) => {
    let contactData = new AddressBook();
    if(!id)
        contactData.id = createNewId();
    else
        contactData.id = id;
    setAddressBookData(contactData);
    console.log(contactData.toString());
    return contactData;
}
const createNewId = () => {
    let addrBookId = localStorage.getItem('AddressBookId');
    addrBookId = !addrBookId ? 1 : (parseInt(addrBookId)+1);
    localStorage.setItem('AddressBookId', addrBookId);
    return addrBookId;
}
const setAddressBookData = (contactData) => {
    try {
        contactData.name = addressBookObject._name;
    } catch (e) {
        nameError = document.querySelector('.name-error');
        nameError.textContent = e;
    }
    try {
        contactData.phoneNo = addressBookObject._phone;
    } catch (e) {
        phoneError = document.querySelector('.phone-error');
        phoneError.textContent = e;
    }
    try {
        contactData.address = addressBookObject._address;
    } catch (e) {
        addressError = document.querySelector('.address-error');
        addressError.textContent = e;
    }
    contactData.state = addressBookObject._state;
    contactData.city = addressBookObject._city;
    try {
        contactData.zip = addressBookObject._zip;
    } catch (e) {
        zipError = document.querySelector('.zip-error');
        zipError.textContent = e;
    }
} 
//-------------- set address book object ---------------------
const setAddressBookObject = () => {
    addressBookObject._name = document.getElementById('name').value;
    addressBookObject._address = document.getElementById('address').value;
    addressBookObject._phone = document.getElementById('phoneNo').value;
    addressBookObject._state = document.getElementById('state').value;
    addressBookObject._city = document.getElementById('city').value;
    addressBookObject._zip = document.getElementById('zip').value;
} 
//-------------- local storage ---------------------
const createAndUpdateStorage = () => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        let contactData = addressBookList.find(contact => contact._id == addressBookObject._id);
        if(!contactData)
            addressBookList.push(createJsonObject());
        else{
            const index = addressBookList.map(contact => contact._id).indexOf(contactData._id);
            addressBookList.splice(index, 1, createJsonObject(contactData._id));
        }
    } else {
        addressBookList = [createJsonObject()];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}
//-------------- cancel form ---------------------
const cancelForm = () => {
    window.location.replace(site_properties.home_page);
}
//-------------- reset form ---------------------
const resetForm = () => {
    setValue('#name', '');
    setValue('#phoneNo', '');
    setValue('#address', '');
    setSelectedIndex('#city', 0);
    setSelectedIndex('#state', 0);
    setValue('#zip', '');
    setTextValue('.name-error', '');
    setTextValue('.phone-error', '');
    setTextValue('.address-error', '');
    setTextValue('.zip-error', '');
}
const setValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.value = value;
}
const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
}
const setTextValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.textContent = value;
}
const setOption = (stateValue, selector, value) => {
    makeCitySubmenu(stateValue);
    const element = document.querySelector(selector);
    element.value = value;
}