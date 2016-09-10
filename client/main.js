import { Meteor } from 'meteor/meteor'

import React from 'react'
import { render } from 'react-dom'
import { mount } from 'react-mounter'

import App from '../imports/ui/App.js'
import Dashboard from '../imports/ui/dashboard/Dashboard.js'
import Admin from '../imports/ui/admin/Admin.js'
import Languages from '../imports/ui/languages/Languages.js'

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

FlowRouter.route('/languages/:language', {
  action(params) {
    mount(App, {
      content: (<Languages language = { params.language }/>)
    })
  }
})
