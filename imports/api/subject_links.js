import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const SubjectLinks = new Mongo.Collection('subjectLinks')

Meteor.methods({
  'subjectLinks.insert'(type, link, description, createdBy) {
    check(type, String)
    check(link, String)
    check(description, String)
    check(createdBy, Object)

    SubjectLinks.insert({
      type,
      link,
      description,
      createdBy,
      rating: 0
    })
  },
  'subjectLinks.remove'(itemId) {
    check(itemId, String);

    SubjectLinks.remove(itemId);
  },
  'subjectLinks.setLiked'(itemId, num) {
    check(itemId, String);
    check(num, Number);

    SubjectLinks.update(itemId, {$inc: { rating: num} })
  }
});
