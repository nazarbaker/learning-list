import { Mongo } from 'meteor/mongo'

export const LearningTopics = new Mongo.Collection('learningTopics')

// add item to LearningLanguages collection

// LearningTopics.insert({topic: 'languages', name: 'Ruby'});
// LearningTopics.remove({_id: 'uoXBX2rncDfxyacx5'});
