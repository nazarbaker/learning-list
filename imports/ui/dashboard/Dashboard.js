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

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      windowWidth: window.innerWidth,
      stylesInk: { background: 'black' }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  // this block make imitation media query for material-ui :)
  // use only generated elements!
  handleResize(e) {
    this.setState(
      window.innerWidth > 1000 ?
        {stylesInk: {background: "red"}} : {stylesInk: {background: "none"}})
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

// handle check tabs
  handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <Tabs
        value = { this.state.value }
        onChange = { this.handleChange }
        className = "tabs"
        inkBarStyle	= { this.state.stylesInk }
      >
        <Tab
          label = 'Languages/Technologies'
          value = 'a'
          className = 'tab'
          >
          <div>
            <h2 style = { styles.headline }>Languages / Technologies</h2>
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
        <Tab
          label = 'Database/Web Servers'
          value = 'b'
          className = 'tab'
          >
          <div>
            <h2 style = { styles.headline }>Database Management Systems</h2>
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

        <Tab
          label = 'Methodologies/Science/Design'
          value = 'c'
          className = 'tab'
          style = { styles.tab }
          >
          <div>
            <h2 style = { styles.headline }>Methodologies</h2>
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

        <Tab
          label = 'Platforms/Frameworks/Tools'
          value = 'd'
          className = 'tab'
          style = { styles.tab }
          >
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
