import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { raw_players as players_2016 } from '../data/players.2016.js'
import { raw_players as players_2017 } from '../data/players.2017.js'
import { raw_players as players_2018 } from '../data/players.2018.js'
 
export const Players = new Mongo.Collection('players');
 
Meteor.methods({
  'players.reset'() {
    Players.remove({});

    players = {};
    for (let player of players_2018) {
      players[player.name] = player;
      players[player.name].value_2018 = player.value
    }
    for (let player of players_2017) {
      if (players[player.name]) {
        players[player.name].top_player_2017 = player.top_player_2017;
        players[player.name].value_2017 = player.value
      }
    }
    for (let player of players_2016) {
      if (players[player.name]) {
        players[player.name].top_player_2016 = player.top_player_2016;
        players[player.name].value_2016 = player.value
      }
    }
    for (let key in players) {
      player = players[key];
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
