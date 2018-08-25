import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { raw_players as players_2016 } from '../data/players.2016.js'
import { raw_players as players_2017 } from '../data/players.2017.js'
 
export const Players = new Mongo.Collection('players');
 
Meteor.methods({
  'players.reset'() {
    Players.remove({})
    for (let player of players_2017) {
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
