import * as H from 'history'
import { Drawer, MenuItem } from 'material-ui'
import {
  // darkBaseTheme,
  getMuiTheme,
  lightBaseTheme,
  MuiThemeProvider
} from 'material-ui/styles'
import * as React from 'react'
import { Route, Router, Switch  } from 'react-router-dom'
import Menu from '../components/Menu'
import { About, Home, Post } from '../pages/index'
import Test from '../pages/Test'

import '../res/css/index.css'


interface Props {
  history?: any
}

interface State {
  SplitMe?: () => JSX.Element
  open: boolean
  history: H.History
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      open: false,
      history: H.createBrowserHistory(),
    }
  }

  handleMenuBtnClicked = (open: boolean): void => {
    this.setState({
      open: open
    })
  }

  handleSideBtnClicked = (menu: string): void => {
    console.log(this.props.history)
      this.state.history.push(menu)
  }

  public render() {
    let SplitMe
    if (this.state) {
      SplitMe = this.state.SplitMe
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Router history={this.state.history}>
        <div style={{ height: '100%' }}>
          <Menu leftClick={() => this.handleMenuBtnClicked(!this.state.open)} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.handleMenuBtnClicked(open)}
          >
            <MenuItem onClick={() => this.handleSideBtnClicked('/')}>홈</MenuItem>
            <MenuItem onClick={() => this.handleSideBtnClicked('/about')}>About</MenuItem>
          </Drawer>
          {SplitMe && <SplitMe /> /*유효하면 띄워 줌. */}
          {/* <button onClick={this.showSplitMe}>ClickMe</button> */}
          <Route exact={true} path="/" component={Home} />
          <Switch>
            <Route path="/about/:name" component={About} />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/posts/:id" component={Post} />
          <Route path="/test" component={Test} />
        </div>
        </Router>
      </MuiThemeProvider>
    );
  }

  // private showSplitMe = () => {
  //   import('../components/SplitMe').then(({ default: Component }) => {
  //     this.setState({
  //       SplitMe: Component
  //     })
  //   })
  // }

}

export default App;
