import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Step-3 of adding redux toolkit--->
import {Provider} from 'react-redux'


// For adding redux-persist in site!
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
   
  <Provider store = {store}> 
    <PersistGate loading={null} persistor={persistor}>
         <App />
    </PersistGate>
  </Provider>
)
