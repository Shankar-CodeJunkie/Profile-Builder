//import '../styles/globals.css'
//import 'react-bootstrap'
//import './../scss/app.scss'
import './../scss/app.scss'
import Header1 from "../components/Header";
import { store, wrapper } from './../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Header1>
          <Component {...pageProps} />
        </Header1>
      </Provider>
  )
}

//export default MyApp
export default wrapper.withRedux(MyApp);
