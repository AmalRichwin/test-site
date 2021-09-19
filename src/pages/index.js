import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import TypeWriter from 'typewriter-effect';

const Container = styled.div`
  margin: 5rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 60vh;
`;
const H1 = styled.h1`
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.25rem;
  color: #505050;
  text-align: center;
`;

const IndexPage = () => {
  // React.useEffect(() => {
  // 	const script = document.createElement('script')
  // 	script.type = 'text/javascript'
  // 	script.src = 'https://dedicated-pioneer-5995.ck.page/f94c49936a/index.js'
  // 	script.async = true
  // 	script.dataUid = 'f94c49936a'
  // 	document.appendChild(script)
  // }, [])
  return (
    <>
      <Seo title="Amal Richwin" />
      <Container>
        <H1>Amal Richwin</H1>
        <TypeWriter
          options
          onInit={(typewriter) => {
            typewriter.typeString('Portfolio').start();
          }}
        />
      </Container>
    </>
  );
};

export default IndexPage;

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: `All about a passionate dev`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}>
      <script type="application/Id+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "url": "https://www.spookytech.com",
          "name": "Amal Richwin K",
		  "description": "Amal richwin portfolio",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+5-601-785-8543",
            "contactType": "Customer Support"
          }
        }
      `}
      </script>
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
