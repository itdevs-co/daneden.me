import React from "react"
import Helmet from "react-helmet"
import { css } from "react-emotion"

import svgmask from "../../static/images/svgmask.svg"
import favicon from "../../static/images/favicon.png"

import { Atoms, DesignSystemProvider } from "designSystem/designSystem"
import Footer from "./Footer"
import Header from "./Header"
import SiteMetadataQuery from "../queries/SiteMetadataQuery"
import Wrapper from "./Wrapper"

const bodyStyles = props => {
  const baseStyle = css`
    background-color: ${Atoms.colors.wash};
    color: ${Atoms.colors.text};
    flex: 1;
    padding-left: ${Atoms.spacing.medium};
    padding-right: ${Atoms.spacing.medium};
  `
  return props.isFrontPage
    ? css`
        ${baseStyle};
      `
    : baseStyle
}

export default function Layout({ children, location, ...props }) {
  const isFrontPage = location.pathname === "/"

  return (
    <SiteMetadataQuery
      render={data => (
        <DesignSystemProvider isFrontPage={false}>
          <React.Fragment>
            <Helmet
              defaultTitle={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
              <link rel="icon" href={favicon} />
              <link rel="mask-icon" href={svgmask} color={Atoms.colors.text} />
              <body className={bodyStyles({ isFrontPage })} />
            </Helmet>
            <Wrapper isConstrained={true}>
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
              <Footer author={data.site.siteMetadata.authorName} />
            </Wrapper>
          </React.Fragment>
        </DesignSystemProvider>
      )}
    />
  )
}
