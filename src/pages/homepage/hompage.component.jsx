import React from 'react';
import './homepage.styles.scss';
import Layout from '../../views/Layout/Layout';
import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
  console.log(props);
  return (
    <Layout showHeader={true}>
      <div className='homepage'>
        {/* <button onClick={() => props.history.push('/shop')}>Navigate to Shop page</button> */}
        <Directory />
      </div>
    </Layout>
  )
};

export default HomePage;