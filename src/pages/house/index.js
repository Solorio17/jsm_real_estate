import * as React from "react"
import Layout from "../../components/layout";
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Buy = ({ data }) => {
    return (
        <div>
            <Layout pageTitle={'BUY PAGE'}>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <Link to={`/house/${node.slug}`}>
                                <h2>{node.frontmatter.title}</h2>
                            </Link>
                            <p>House Built: {node.frontmatter.built}</p>

                        </article>
                    ))
                }
            </Layout>
        </div>
    )
}

export const query = graphql`
query{
    allMdx(sort: {fields: frontmatter___built, order: DESC}){
      nodes {
        slug
        frontmatter {
          built
          title
        }
        id
        slug
      }
    }
  }
  
`

export default Buy;
