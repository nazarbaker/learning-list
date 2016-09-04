import { Mongo } from 'meteor/mongo'

export const LearningPlatforms = new Mongo.Collection('learningPlatforms')

// add item to LearningLanguages collection
// const dat = LearningPlatforms.insert({_id: 'lm013615164', text: 'Angular'})
// // LearningDatabases.remove({_id: "ldb01"});
