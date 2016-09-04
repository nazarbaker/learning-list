import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
}

class TabFour extends React.Component {
  render() {
    return (
      <div>
        <h2 style={styles.headline}>Platforms / Frameworks / Tools</h2>
        <div>
          •    Ruby on Rails<br />
          •    Cucumber<br />
          •    Rspec<br />
          •    Capybara<br />
          •    Sinatra<br />
          •    Angular.js<br />
          •    Backbone.js<br />
          •    Underscore.js<br />
          •    Backbone.Marionette<br />
          •    Bootstrap<br />
          •    Material Design<br />
          •    Node.js<br />
          •    Ext.js<br />
          •    Grunt<br />
          •    Bower<br />
          •    Yeoman<br />
          •    Karma<br />
          •    PhantomJS<br />
          •    Grape<br />
        </div>
      </div>
    )
  }

}
export default TabFour
