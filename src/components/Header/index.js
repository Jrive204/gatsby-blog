import React from "react"
import { Link } from "gatsby" // only Internal links

// Components
import Menu from "../Menu"

// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"
//styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery()

  return (
    <Wrapper>
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <div>Mode Button</div>
    </Wrapper>
  )
}

export default Header
