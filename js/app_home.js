let contactList;
window.addEventListener('DOMContentLoaded', (event) => {
    contactList = getContactsFromStorage();
    document.querySelector(".person-count").textContent = contactList.length;
    console.log(contactList);
    createInnerHtml();
    localStorage.removeItem('editContact');
});

const getContactsFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? 
                            JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if(contactList.length == 0) return;
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th><th>State</th>"+
                        "<th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${headerHtml}`;
    // let contactList = createContactsJson();
    for(const contact of contactList){
        innerHtml = `${innerHtml}
            <tr>
                <td>${contact._name}</td>
                <td>${contact._address}</td>
                <td>${contact._city}</td>
                <td>${contact._state}</td>
                <td>${contact._zip}</td>
                <td>${contact._phone}</td>
                <td>
                    <img id="${contact._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="">
                    <img id="${contact._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createContactsJson = () => {
    let contactListLocal = [
        {
            _name: 'Kabir Singh',
            _address: 'Shivaji-Nagar Joshi Chawl',
            _city: 'Pune',
            _state: 'Maharastra',
            _zip: '412201',
            _phone: '9999809090'
        }
    ];
    return contactListLocal;
}

const remove = (node) => {
    let contact = contactList.find(contactData => contactData._id == node.id);
    if(!contact) return;
    const index = contactList.map(contactData => contactData._id)
                                .indexOf(contact._id);
    contactList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(contactList));
    document.querySelector(".person-count").textContent = contactList.length;
    createInnerHtml();
}

const update = (node) => {
    let contact = contactList.find(contactData => contactData._id == node.id);
    if(!contact) return;
    localStorage.setItem('editContact', JSON.stringify(contact));
    window.location.replace(site_properties.add_address_book_detail);
}