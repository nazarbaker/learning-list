import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const LearningTopics = new Mongo.Collection('learningTopics')

Meteor.methods({
  'learningTopics.insert'(topic, subject) {
    check(topic, String)
    check(subject, String)

    LearningTopics.insert({ topic, subject })
  },
  'learningTopics.remove'(topicId) {
    check(topicId, String);

    LearningTopics.remove(topicId);
  }
});
