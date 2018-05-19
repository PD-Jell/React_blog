import * as H from 'history'
import { Theme, createMuiTheme } from '@material-ui/core'
import {
  MuiThemeProvider
} from '@material-ui/core'
import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Header from '../components/Header'
import { About, Home, Post } from '../pages/index'
import Test from '../pages/Test'

import '../res/css/index.css'


interface Props {
}

interface State {
  SplitMe?: () => JSX.Element
  history: H.History
  theme: Theme
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      history: H.createBrowserHistory(),
      theme: createMuiTheme()
    }
  }



  public render() {
    let SplitMe
    if (this.state) {
      SplitMe = this.state.SplitMe
    }

    return (
      <MuiThemeProvider theme={this.state.theme}>
      <Router history={this.state.history}>
        <div style={{ height: '100%' }}>
          <Header history={this.state.history} />
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
