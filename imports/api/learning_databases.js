import { Mongo } from 'meteor/mongo'

export const LearningDatabases = new Mongo.Collection('learningDatabases')

// add item to LearningLanguages collection
// LearningDatabases.insert({_id: 'ldb03', text: 'MongoDB'})
// LearningDatabases.remove({_id: "ldb01"});
