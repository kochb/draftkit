import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Players = new Mongo.Collection('players');
 
Meteor.methods({
  'players.draft'(playerId) {
    Players.update(playerId, { $set: { available: false } });
  },
  'players.insert'(text) {
    check(text, String);
 
    Players.insert({
      name: text,
      createdAt: new Date(),
    });
  },
});
