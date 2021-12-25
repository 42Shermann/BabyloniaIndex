import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import IndexRoute from './routes';
import { RealmAppProvider } from './context/contextProvider';

export const APP_ID = "wikiapp-lmtos";

function App() {

  return (
    <RealmAppProvider appId={APP_ID}>
      <IndexRoute />
    </RealmAppProvider>  
  );
}

export default App;
