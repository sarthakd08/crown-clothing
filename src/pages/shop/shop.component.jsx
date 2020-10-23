import React from 'react';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Layout from '../../views/Layout/Layout';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collections/collection.component';
import useFetchJobs from '../../hooks/useFetchJobs';
import useMakeMultipleApiRequests from '../../hooks/useMakeMultipleAPIRequests';
import useGetQuery from '../../hooks/useGetQuery';

const multipleReqData = [{url: 'https://dog.ceo/api/breed/husky/images/random', cb: null}, {url: 'https://dog.ceo/api/breed/aki/images/random', cb: null}, {url: 'https://dog.ceo/api/breed/pitbull/images/random', cb: null}, {url: 'https://dog.ceo/api/breed/akita/images/random', cb: null}]

const fetchHusky = (cb) => {
    axios.get('https://dog.ceo/api/breed/husky/images/random').then((res) => {
        console.log('Got Husky', res.data);
        cb(res.data);
      }).catch((e) => {
          console.log('ERROR in', e)
      })
}

const displayHusky = (data) => {
    console.log('Displaying Husky', data.message);
}

const fetchAkita = (cb) => {
    axios.get('https://dog.ceo/api/breed/akita/images/random').then((res) => {
        console.log('Got Akita', res.data);
        cb(res.data);
      }).catch((e) => {
          console.log('ERROR in', e)
      })
}

const displayAkita = (data) => {
    console.log('Displaying Akita', data.message);
}

const fetchAki = (cb) => {
    axios.get('https://dog.ceo/api/breed/aki/images/random').then((res) => {
        console.log('Got Aki', res.data);
        cb(res.data);
      }).catch((e) => {
          console.log('ERROR in', e)
          displayApiError(e)
      })
}
const displayAki = (data) => {
    console.log('Displaying Akita', data.message);
}

const displayApiError = (data) => {
    console.log('Error in ', data);
}

const callFnsInSequence = (...fns) => (...args) => {
    fns.forEach(fn => fn && fn(...args))
  }

const ShopPage = ({match}) => {
    const fetchState = useFetchJobs();
    // console.log('fetchState', fetchState);
    // console.log('MMMM', match);

    // /* HOOK for multiRequest one after another */
    // const multRequest = useMakeMultipleApiRequests(multipleReqData)
    // console.log('multRequest', multRequest);
    const { data } = useGetQuery({url: 'https://dog.ceo/api/breed/husky/images/random'})
    
        return (
            <Layout showHeader={true}>
                <div className="shop-page">
                    {/* <CollectionsOverview /> */}
                    {/* <button onClick={() => callFnsInSequence(fetchHusky(displayHusky), fetchAki(displayAki), fetchAkita(displayAkita))} >Execute All Fns one after another</button> */}
                    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
                {data && <div>{data.message}</div>}

            </Layout>
        )
    }

export default withRouter(ShopPage);        