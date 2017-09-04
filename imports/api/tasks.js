import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('players');
 
Meteor.methods({
  'players.draft'(playerId) {
    Tasks.update(playerId, { $set: { available: false } });
  },
  'tasks.insert'(text) {
    check(text, String);
 
    Tasks.insert({
      name: text,
      createdAt: new Date(),
    });
  },
  'tasks.remove'(playerId) {
    check(playerId, String);
 
    Tasks.update(playerId, { $set: { available: false } });
  },
  'tasks.setChecked'(playerId, setChecked) {
    check(playerId, String);
    check(setChecked, Boolean);
 
    Tasks.update(playerId, { $set: { checked: setChecked } });
  },
});
