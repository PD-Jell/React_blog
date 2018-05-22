import { AppBar, Toolbar, Typography, Menu, IconButton, MenuItem, Button, Drawer } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import * as H from 'history'
import * as React from 'react'

interface Props {
  history: H.History;
}

interface State {
  leftOpen: boolean
  rightOpen: HTMLElement | undefined
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 200
  },
  fullList: {
    width: 'auto'
  }
}


export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { leftOpen: false, rightOpen: undefined }
  }

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      rightOpen: event.currentTarget
    })
    // console.log('handleClick', Boolean(this.state.rightOpen))
  }

  handleClose = () => {
    this.setState({
      rightOpen: undefined
    })
    // console.log('handleClose', Boolean(this.state.rightOpen))
  }

  handleMenuBtnClicked = (open: boolean): void => {
    this.setState({
      leftOpen: open
    })
  }

  rightMenuBtnClicked = (event: any) => {
    console.log(event.target.value)
  }


  handleSideBtnClicked = (menu: string): void => {
    // console.log(this.props.history)
    this.props.history.push(menu)
  }

  render() {
    const open: boolean = this.state.rightOpen !== undefined
    return (
      <div style={styles.root}>
        <Drawer open={this.state.leftOpen} onClose={(e) => { this.handleMenuBtnClicked(false) }}>
          <div style={styles.list} >
            <MenuItem onClick={() => this.handleSideBtnClicked('/')}>홈</MenuItem>
            <MenuItem onClick={() => this.handleSideBtnClicked('/about')}>About</MenuItem>
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={(e) => { this.handleMenuBtnClicked(!this.state.leftOpen) }}><MenuIcon /></IconButton>
            <Typography variant="title" style={styles.flex} color="inherit">Jell Blog</Typography>
            <Button
              aria-owns={Boolean(this.state.rightOpen) ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={(event) => { !Boolean(this.state.rightOpen) ? this.handleClick(event) : this.handleClose() }}
              style={{color: 'white'}}
            >
              More
            </Button>
            {open &&
              <Menu
                id="simple-menu"
                anchorEl={Boolean(this.state.rightOpen) ? this.state.rightOpen : undefined}
                open={Boolean(this.state.rightOpen)}
                onClose={this.handleClose}
              >
                <MenuItem value="1" onClick={(event: any) => {
                  this.rightMenuBtnClicked(event)
                  this.handleClose()
                }}>Refresh</MenuItem>
                <MenuItem value="2" onClick={(event: any) => {
                  this.rightMenuBtnClicked(event)
                  this.handleClose()
                }}>feedback</MenuItem>
                <MenuItem value="3" onClick={(event: any) => {
                  this.rightMenuBtnClicked(event)
                  this.handleClose()
                }}>Settings</MenuItem>
                <MenuItem value="4" onClick={(event: any) => {
                  this.rightMenuBtnClicked(event)
                  this.handleClose()
                }}>Help</MenuItem>
                <MenuItem value="5" onClick={(event: any) => {
                  this.rightMenuBtnClicked(event)
                  this.handleClose()
                }}>Sign out</MenuItem>
              </Menu>}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
