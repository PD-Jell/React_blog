import { Drawer, MenuItem } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import { About, Home, Post } from '../pages/index';
import Test from '../pages/Test'


interface Props {

}

interface State {
  SplitMe: () => JSX.Element
  open: boolean
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      open: false
    })
  }

  handleMenuBtn = (open: boolean): void => {
    this.setState({
      open: open
    })
  }

  public render() {
    let SplitMe
    if (this.state) {
      SplitMe = this.state.SplitMe
    }


    return (
      <MuiThemeProvider>
        <div style={{ height: '100%' }}>
          <Menu leftClick={() => this.handleMenuBtn(!this.state.open)} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.handleMenuBtn(open)}
          >
            <MenuItem onClick={() => this.handleMenuBtn(false)}>홈</MenuItem>
            <MenuItem onClick={() => this.handleMenuBtn(false)}>포스트</MenuItem>
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
