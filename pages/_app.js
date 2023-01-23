import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return ( 
    <ThirdwebProvider
      desiredChainId = {ChainId.Goerli}
      chainRpc={{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/fb2196d048114630967d6c726f64f665'
      }}
    >
    <ThemeProvider>
      <Component {...pageProps}/>
    </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
