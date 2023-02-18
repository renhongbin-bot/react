import dva from 'dva';
import './index.css';
import RouterConfig from './router';
import maizuo from './models/maizuo';

// 1. Initialize
const app = dva({
  history: require('history').createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(maizuo);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
