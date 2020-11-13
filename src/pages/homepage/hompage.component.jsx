import React, {Suspense} from 'react';
import './homepage.styles.scss';
import Layout from '../../views/Layout/Layout';

// import Directory from '../../components/directory/directory.component';
const Directory = React.lazy(() => import('../../components/directory/directory.component'));

const HomePage = (props) => {
  console.log(props);
  return (
    <Layout showHeader={true}>
      <div className='homepage'>
        {/* <button onClick={() => props.history.push('/shop')}>Navigate to Shop page</button> */}
        <Suspense fallback={<div>Loding Directories...</div>}>
          <Directory />
        </Suspense>
      </div>
    </Layout>
  )
};

export default HomePage;