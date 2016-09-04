import { Mongo } from 'meteor/mongo'

export const LearningLanguages = new Mongo.Collection('learningLanguages')

// add item to LearningLanguages collection
// LearningLanguages.insert({_id: 'll01', text: 'JavaScript'});
// LearningLanguages.remove({_id: 'll01', text: 'JavaScript'});
