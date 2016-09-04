import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
// import tabs content
import TabOne from './tabs/Tab_one'
import TabTwo from './tabs/Tab_two'
import TabThree from './tabs/Tab_three'
import TabFour from './tabs/Tab_four'

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
          <TabOne />
        </Tab>
        <Tab
          label = 'Database/Web Servers'
          value = 'b'
          className = 'tab'
          >
          <TabTwo />
        </Tab>

        <Tab
          label = 'Methodologies/Science/Design'
          value = 'c'
          className = 'tab'
          >
          <TabThree />
        </Tab>

        <Tab
          label = 'Platforms/Frameworks/Tools'
          value = 'd'
          className = 'tab'
          >
          <TabFour />
        </Tab>
      </Tabs>
    );
  }
}

export default Dashboard
