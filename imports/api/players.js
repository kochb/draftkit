import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { raw_players } from '../data/players.js'
 
export const Players = new Mongo.Collection('players');
 
Meteor.methods({
  'players.reset'() {
    Players.remove({})
    for (let player of raw_players) {
      Players.insert(player);
    }
  },
  'players.draft'(playerId) {
    Players.update(playerId, { $set: { available: false, drafted: true } });
  },
  'players.gone'(playerId) {
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
