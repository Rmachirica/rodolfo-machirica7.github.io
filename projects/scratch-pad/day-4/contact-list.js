// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
 /*use makeContact parameters to to set the keys for the object to be created
 1. output : an object contact
  */
 var contact = {};
 contact.id = id;
 contact.nameFirst = nameFirst;
 contact.nameLast = nameLast;
 return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
            console.log(contacts);
            console.log(contacts.length);

        },
        findContact: function(fullName) {// takes a fullName string and returns the object if found in the contacts or undefined if not
            var splitFullName = fullName.split(" ");// splits fullName into nameFirst and nameLast to then compare with the first and last name in the contact.list
            for (var i = 0; i <= contacts.length - 1; i++) {
                if (contacts[i].nameFirst === splitFullName[0] && contacts[i].nameLast === splitFullName[splitFullName.length-1]) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }

        },
        removeContact: function(contact) {// takes a contact to be removed from the contact list
            for (var i = 0; i <= contacts.length - 1; i++) {
                if (contacts[i] === contact) {
                    contacts.splice(i, 1);
                }
            }

        },
        printAllContactNames: function() {// return a string of all full names separated by a new line
          // write a while loop
          var allFullNames = [];
              
          for (var myFullName = 0; myFullName <= contacts.length-1; myFullName++) {
           allFullNames.push(contacts[myFullName].nameFirst + " " + contacts[myFullName].nameLast);
          }
          return allFullNames.join("\n");
        }
        
    }
};




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
