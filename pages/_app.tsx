import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import {
  CssBaseline,
  StylesProvider,
  MuiThemeProvider
} from '@material-ui/core'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Layout from '../components/Layout/Layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
