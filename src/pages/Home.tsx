// import Axios from 'axios';
import * as React from 'react';

interface Props { }

class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>환영합니다!</h2>
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
