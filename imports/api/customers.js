import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Customers = new Mongo.Collection('customers');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('customers', function customersPublication() {
        return Customers.find();
    });
}

Meteor.methods({
    'customers.getAll'() {
        Customers.find();
    },
    'customers.insert'(name) {
        check(name, String);

        Customers.insert({
            name,
            createdAt: new Date(),
        });
    },
    'customers.update'(customerId, name) {
        check(customerId, String);
        check(name, String);

        Customers.update(customerId, {$set: {name: name}});
    },
    'customers.remove'(customerId) {
        check(customerId, String);

        Customers.remove(customerId);
    },
});