import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
  console.log(props);
  return (
    <div className='homepage'>
      {/* <button onClick={() => props.history.push('/shop')}>Navigate to Shop page</button> */}
      <Directory />
    </div>
  )
};

export default HomePage;