// import Axios from 'axios';
import * as React from 'react';
import { Paper, Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { ApiServerUrl, ApiServerAddr, HttpMethod, doFetch } from '../utils';
import { Post } from '../models/Post';
import { ApiResult } from '../utils/result';
import { Category } from '../utils/enum';

interface Props {
  theme: Theme
}

interface State {
  computer: Post[]
  bicycle: Post[]
  game: Post[]
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

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      computer: [],
      bicycle: [],
      game: [],
    }
  }

  componentWillMount() {
    doFetch(ApiServerUrl + ApiServerAddr.get.post, HttpMethod.GET)
      .then((res: Response) => {
        if (res.ok)
          return res.json()
        else
          throw res.json()
      }).then((json: ApiResult) => {
        json.object.forEach((post: Post) => {
          switch (post.category) {
            case Category.Computer:
              const computer: Post[] = this.state.computer
              computer.push(post)
              this.setState({ computer: computer })
              break
            case Category.Bicycle:
              const bicycle: Post[] = this.state.bicycle
              bicycle.push(post)
              this.setState({ bicycle: bicycle })
              break
            case Category.Game:
              const game: Post[] = this.state.game
              game.push(post)
              this.setState({ game: game })
              break
          }
        });
      }).catch((json: ApiResult) => {
        console.log(JSON.stringify(json))
      })
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
            <img src="https://4.imimg.com/data4/CO/YS/MY-29352968/samsung-desktop-computer-500x500.jpg" />
            <Typography component="p">
              {JSON.stringify(this.state.computer)}
          </Typography>
          </Paper>
          <Paper style={styles(this.props.theme).root} elevation={4} >
            <Typography variant="headline" component="h1">
              자전거
          </Typography>
            <img src="https://ph-test-11.slatic.net/p/6/cannondale-trail-5-7398-55694901-5893bfdd4145bfefef7f7c2d5376da2c-catalog.jpg_340x340q80.jpg_.webp" />
            <Typography component="p">
              {JSON.stringify(this.state.bicycle)}
          </Typography>
          </Paper>
          <Paper style={styles(this.props.theme).root} elevation={4} >
            <Typography variant="headline" component="h1">
              게임
          </Typography>
            <img src="https://cms-assets.tutsplus.com/uploads/users/34/syllabuses/1117/preview_image/vg.jpg" />
            <Typography component="p">
              {JSON.stringify(this.state.game)}
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
