import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
  console.log(props);
  return (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <button onClick={() => props.history.push('/route1')}>Navigate to Route1</button>
      <Directory />
    </div>
  )
};

export default HomePage;