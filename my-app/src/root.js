import React from 'react';
// import { Provider } from 'react-redux';
// import 'react-id-swiper/src/styles/scss/swiper.scss';
import './static/css/main.scss';
import Routers from './routes/index';
// import configureStore from './static/store/configureStore';
// const store = configureStore();

// store.subscribe(() =>
//     console.log(store.getState())
// );

const Root = () => (
		<Routers />
);

export default Root;
