import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title} </title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <Link className={navLinkItem} to="/"><h3 className={navLinkText}>Home</h3></Link>
                    <Link className={navLinkItem} to="/house"><h3 className={navLinkText}>Buy or Rent</h3></Link>
                    <Link className={navLinkItem} to="/mortgages"><h3 className={navLinkText}>Our Mortgages</h3></Link>
                    <Link className={navLinkItem} to="/contact"><h3 className={navLinkText}>Contact</h3></Link>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>HELLO IM THE {pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout