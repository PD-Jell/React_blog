import * as queryString from 'query-string';
import * as React from 'react';

const About = ({ location, match }: any) => {
  const query = queryString.parse(location.search);


  return (
    <div>
      <h2>About {match.params.name}</h2>
      <h3>{JSON.stringify(query)}</h3>
    </div>
  );
};

export default About;
