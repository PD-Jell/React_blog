import * as React from 'react';
import { Typography } from '@material-ui/core';

interface Props { }

export default class Footer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div style={{minHeight:"100px", backgroundColor: "skyblue"}}>
        <Typography component="h3" style={{textAlign:"center", margin:"auto", paddingTop:"40px", paddingBottom:"40px"}}>
          Copyright 2018 Jell. All right reserved.
        </Typography>
      </div>
    );
  }
}
