import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, Typography, Select, MenuItem, TextField } from '@material-ui/core'
import * as ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Category } from '../utils/enum';
import { ApiServerAddr, doFetch, HttpMethod, ApiServerUrl } from '../utils';
import { ApiResult } from '../utils/result';
import { Post } from '../models/Post';

interface Props { }
interface State {
  category: Category
  title: string
  context: string
  writer: string
}

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  // ['image'],                                     // 일단 텍스트라도 끝내놓고..
  ['clean']                                         // remove formatting button
];

class Write extends React.Component<Props & RouteComponentProps<{}>, State> {


  constructor(props: Props & RouteComponentProps<{}>) {
    super(props)
    this.state = {
      category: Category.Computer,
      title: '',
      context: '',
      writer: 'Jell'
    }
  }

  private handleCategory = (event: any) => {
    this.setState({category: event.target.value})
  }

  private handleTitle = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({title: event.currentTarget.value})
  }

  private handleChange = (value: string) => {
    this.setState({ context: value })
  }

  private write = () => {
    console.log(this.state.context)
    const body: Post = {
      category: this.state.category,
      title: this.state.title,
      context: this.state.context,
      writer: this.state.writer
    }
    console.log(JSON.stringify(body))
    doFetch(ApiServerUrl + ApiServerAddr.post.post, HttpMethod.POST, body)
    .then((res: Response) => {
      if (res.ok)
        return res.json()
      throw Error('Error')
    })
    .then((json: ApiResult) => {
      console.log(json)
    })
  }

  public render() {
    return (
      // <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"/>
      <div>
        <Typography variant="title" align="center" style={{padding: 30}}>여기 쓸 곳임!</Typography>
        <Typography variant="subheading" align="center" style={{padding: 30}}>카테고리</Typography>
        <Select
          value={this.state.category}
          onChange={this.handleCategory}
          style={{margin: 'auto', alignSelf: 'center'}}
        >
        <MenuItem value={Category.Computer}>컴퓨터</MenuItem>
        <MenuItem value={Category.Bicycle}>자전거</MenuItem>
        <MenuItem value={Category.Game}>게임</MenuItem>
        </Select>
        <Typography variant="subheading" align="center" style={{padding: 30}}>제목</Typography>
        <TextField value={this.state.title} onChange={this.handleTitle} style={{width: 'full'}}/>
        <Typography variant="subheading" align="center" style={{padding: 30}}>내용</Typography>

        <ReactQuill
          value={this.state.context}
          onChange={this.handleChange}
          modules={{
            toolbar: toolbarOptions
          }}
        />
        <Button color="primary" onClick={this.write}>write</Button>

      </div>
    )
  }
}



export default withRouter(Write)
