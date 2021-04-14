//top level global component
//import global css files here
import '../styles/global.css'

export default function App({ Component, pageProps}) {
  return <Component {...pageProps } />
}