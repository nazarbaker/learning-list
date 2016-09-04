import { Mongo } from 'meteor/mongo'

export const LearningLanguages = new Mongo.Collection('learnLanguages')

// add item to LearningLanguages collection
// LearningLanguages.insert({_id: 'll01', text: 'JavaScript'});
