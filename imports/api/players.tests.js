/* eslint-env mocha */
 
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
 
import { Players } from './players.js';
 
if (Meteor.isServer) {
  describe('Players', () => {
    describe('methods', () => {
      const userId = Random.id();
      let playerId;
 
      beforeEach(() => {
        Players.remove({});
        playerId = Players.insert({
          text: 'test player',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });
 
      it('can delete owned player', () => {
        // Find the internal implementation of the player method so we can
        // test it in isolation
        const deletePlayer = Meteor.server.method_handlers['players.remove'];
 
        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };
 
        // Run the method with `this` set to the fake invocation
        deletePlayer.apply(invocation, [playerId]);
 
        // Verify that the method does what we expected
        assert.equal(Players.find().count(), 0);
      });
    });
  });
}
