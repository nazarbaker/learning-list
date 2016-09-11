import { Meteor } from 'meteor/meteor'

import React from 'react'
import { render } from 'react-dom'
import { mount } from 'react-mounter'

import App from '../imports/ui/App.js'
import Dashboard from '../imports/ui/dashboard/Dashboard.js'
import Admin from '../imports/ui/admin/Admin.js'

import Subject from '../imports/ui/subjects/Subject.js'

FlowRouter.route("/", {
  action() {
    mount(App, {
      content: (<Dashboard />)
    })
  }
})

FlowRouter.route("/admin", {
  action() {
    mount(App, {
      content: (<Admin />)
    })
  }
})

FlowRouter.route('/:topics/:subject', {
  action(params) {
    mount(App, {
      content: (<Subject subject = { params.subject } />)
    })
  }
})
