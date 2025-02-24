import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../imports/api/ContactsCollection';

Meteor.methods({
  'contacts.insert'(contact) {
    ContactsCollection.insert(contact);
  },
});

Meteor.publish('contacts.all', function() {
  return ContactsCollection.find();
})

Meteor.startup(async () => {
  
});
