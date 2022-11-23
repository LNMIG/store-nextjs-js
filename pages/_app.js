import AppContext from '@context/appContext'
import useInitialState from '@hooks'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
