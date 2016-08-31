import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Languages/Technologies" value="a" >
          <div>
            <h2 style={styles.headline}>Languages / Technologies</h2>
            <p>
              •    Technical Documentation<br />
              •    Ruby<br />
              •    SASS/LESS<br />
              •    Php<br />
              •    JavaScript<br />
              •    RegEx<br />
              •    XML<br />
              •    SQL<br />
              •    HTML<br />
              •    HTML5<br />
              •    CSS<br />
              •    CSS3<br />
            </p>
          </div>
        </Tab>
        <Tab label="Database" value="b">
          <div>
            <h2 style={styles.headline}>Database Management Systems</h2>
            <p>
              •    MySQL<br />
              •    PostgreSQL<br />
              •    Sqlite<br />
              •    MongoDB<br />
              •    Redis<br />
              •    Kyoto Tycoon<br />
              •    Memcache<br />
              •    Amazon RDS<br />
            </p>
          </div>
        </Tab>
        <Tab label="Web Servers" value="c" >
          <div>
            <h2 style={styles.headline}>Web Servers</h2>
            <p>
              •    Apache<br />
              •    Nginx<br />
              •    Unicorn<br />
              •    Puma<br />
              •    Thin server<br />
              •    WSGI Servers<br />
            </p>
          </div>
        </Tab>
        <Tab label="Methodologies" value="d">
          <div>
            <h2 style={styles.headline}>Methodologies</h2>
            <p>
              •    Agile, SCRUM<br />
              •    TDD, BDD<br />
              •    Dry<br />
              •    KISS<br />
              •    FDD<br />
              •    12 Factor Application<br />
            </p>
          </div>
        </Tab>
        <Tab label="Science & Design" value="e" >
          <div>
            <h2 style={styles.headline}>Computer Science and Design</h2>
            <p>
              •    OOP concepts<br />
              •    Design Patterns<br />
              •    SOLID<br />
              •    GRASP<br />
            </p>
          </div>
        </Tab>
        <Tab label="Platforms/Frameworks/Tools" value="f">
          <div>
            <h2 style={styles.headline}>Platforms / Frameworks / Tools</h2>
            <p>
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
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default Dashboard
