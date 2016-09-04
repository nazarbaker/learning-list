import { Mongo } from 'meteor/mongo'

export const LearningMethodologies = new Mongo.Collection('learningMethodologies')

// add item to LearningLanguages collection
// LearningMethodologies.insert({_id: 'lm01', text: 'Dry'})
// LearningDatabases.remove({_id: "ldb01"});
