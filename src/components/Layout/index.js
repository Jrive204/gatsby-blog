import React from "react"
import { ThemeProvider } from "styled-components"
// hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data, "DATA")
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout Component
      {children}
    </ThemeProvider>
  )
}

export default Layout
