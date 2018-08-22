import React from 'react';
import {render} from 'react-dom';
import Root from './root';

import registerServiceWorker from './registerServiceWorker';

render(
    <Root/>, document.getElementById('root'));


if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}