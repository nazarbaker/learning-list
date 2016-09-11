import { Mongo } from 'meteor/mongo'

export const SubjectLinks = new Mongo.Collection('subjectLinks')

// add item to LanguagesLinks collection
// LanguagesLinks.insert({ type: 'test-8', link: 'https://www.youtube.com/watch?v=jXUA1uYGUK4', description: 'Meteor & React For Everyone #16 - Parameter Based Routes', rating: 0 })
// LanguagesLinks.remove({_id: 'Pu6wwvvzyihMpR6eA'});
