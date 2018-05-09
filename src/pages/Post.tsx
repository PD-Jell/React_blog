import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ApiServerAddr, ApiServerUrl, doFetch, HttpMethod } from '../utils';

interface Props extends RouteComponentProps<{
  id: string
}> {}

interface State {
  context: string
}

class Post extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      context: ''
    })
    const id: string = this.props.match.params.id
    const url: string =
    ApiServerUrl + ApiServerAddr.get.post + '/' + id + '/'
    doFetch(url, HttpMethod.GET).then((res: Response) => {
      if (res.ok) {
        return res.json()
      }
      throw Error('failed')
    }).then((context: any) => {
      this.setState({
        context: JSON.stringify(context)
      })
    })
  }

  render() {
    return (
      <div>
        포스트 {this.props.match.params.id}
        <div>
          {this.state.context === '' ? 'isLoading' : this.state.context}
        </div>
      </div>
    )
  }
}

// let isLoading: boolean = true

// const getPost = (id: string): Promise<string> => {
//   const url: string = ApiServerUrl + ApiServerAddr.get.post + '/' + id + '/'
//   return doFetch(url, HttpMethod.GET).then((res: Response) => {
//     if (res.ok) {
//       return res.json()
//     }
//     throw Error('failed')
//   }).then((context: any) => {
//     isLoading = false
//     return JSON.stringify(context)
//   })
// }

// const Post = ({ match }: any) => {
//   const context = getPost(match.params.id)
//   return (
//     <div>
//       포스트 {match.params.id}
//       <div>
//         {isLoading ? 'isLoading' : context}
//       </div>
//     </div>
//   )
// }

export default Post
