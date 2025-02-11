class PhoneBook {
    constructor() {
        this.contacts = [];
    }

    addContact(fullName, phoneNumber) {
        this.contacts.push({ fullName, phoneNumber });
        this.contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));

    }
    sortContacts() {
        this.contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }
    binarySearchContact(fullName) {
        let left = 0, right = this.contacts.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let contact = this.contacts[mid];

            if (contact.fullName === fullName) {
                return contact;
            }
            if (contact.fullName < fullName) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Phonebook is empty.");
            return;
        }

        console.log("Phonebook Contacts:");
        this.contacts.forEach(contact => {
            console.log(`Name: ${contact.fullName}, Phone: ${contact.phoneNumber}`);
        });
    }
}

let phoneBook = new PhoneBook();

phoneBook.addContact("sanjusanthosh", "858188638");
phoneBook.addContact("Akansha", "9912965372");
phoneBook.addContact("kumar", "9440379282");
phoneBook.addContact("HariKiran", "982349282");

// Search for a contact
let searchResult = phoneBook.binarySearchContact("kumar");
console.log(searchResult ? `Found: ${searchResult.fullName}, ${searchResult.phoneNumber}` : "Contact not found.");

// Display all contacts
phoneBook.displayContacts();
