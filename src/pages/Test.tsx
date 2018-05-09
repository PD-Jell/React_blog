import * as React from 'react'
import * as utils from '../utils'

interface Props { }

interface State {
  context: string;
}

class Test extends React.Component<Props, State> {
  public url: string = 'http://127.0.0.1:8000/post/1/'
  private isLoaded: boolean = false
  // private url: string = 'https://www.google.com'
  constructor(props: Props) {
    super(props)
  }

  public call() {
    utils.doFetch(this.url, utils.HttpMethod.GET).then((res: Response) => {
      this.isLoaded = true
      if (res.ok) {
        return res.json()
      }
      throw Error(JSON.stringify(res))
    }).then((result) => {
      this.setState({
        context: JSON.stringify(result)
      })
    }).catch(err => {
      alert(`catch = ${JSON.stringify(err)}`)
      this.isLoaded = true
      this.setState({
        context: JSON.stringify(err)
      })
    })
  }

  public render() {
    return (
      <div>
        <h2>
          홈
        <br />
          {this.isLoaded.toString()}
          <br />
          {this.isLoaded ? this.state.context : 'loading..'}
        </h2>
      </div>
    )
  }

  public componentDidMount() {
    this.setState({
      context: ''
    })
    this.call()
  }
}

export default Test
