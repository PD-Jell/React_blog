// import Axios from 'axios';
import * as React from 'react';
import { Paper, Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

interface Props {
  theme: Theme
}

const styles = (theme: Theme): StyleRules => {
  return {
    root: theme.mixins.gutters({
      margin: "auto",
      minWidth: 300,
      maxWidth: 600,
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    })
  }
}

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <div>
          <h2>환영합니다!</h2>
          <p>이 블로그는 개인 블로그입니다.</p>
        </div>
        <div>
          <Paper style={styles(this.props.theme).root} elevation={4} >
            <Typography variant="headline" component="h1">
              개발
          </Typography>
            <img src="http://api.cocoachina.com/uploads/20160601/1464776396717413.png" />
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
          </Typography>
          </Paper>
          <Paper style={styles(this.props.theme).root} elevation={4} >
            <Typography variant="headline" component="h1">
              자전거
          </Typography>
            <img src="http://api.cocoachina.com/uploads/20160601/1464776396717413.png" />
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
          </Typography>
          </Paper>
          <Paper style={styles(this.props.theme).root} elevation={4} >
            <Typography variant="headline" component="h1">
              게임
          </Typography>
            <img src="http://api.cocoachina.com/uploads/20160601/1464776396717413.png" />
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
          </Typography>
          </Paper>
        </div>
      </div>
    )
  }
}

// const url: string = 'http://127.0.0.1:8000'
// // const url: string = 'https://www.google.com'
// let isLoaded: boolean = false

// const context = () => {
//   return utils.doFetch(url, utils.HttpMethod.GET).then((res: Response) => {
//     isLoaded = true
//     if (res.ok) {
//       return res.json()
//     }
//     return JSON.stringify({ 'result': 'failed' })
//   }).then((result) => {
//     // console.log(JSON.stringify(result))
//     return (JSON.stringify(result))
//   })
// }

// const Home = (): JSX.Element => {
//   // const context = fetch(url).then((res) => {
//   //   return JSON.stringify(res.body)
//   // })
//   const data = context()
//   return (
//     <div>
//       <h2>
//         홈
//         <br />
//         {isLoaded.toString()}
//         <br />
//         {isLoaded ? data : 'loading..'}
//       </h2>
//     </div>
//   )
// }

export default Home
