import React from "react"
import { ThemeProvider } from "styled-components"
// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Components
import Header from "components/Header"
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data, "DATA")
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
