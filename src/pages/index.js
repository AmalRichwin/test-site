import React from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
	margin: 3rem auto;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 60vh;
`
const H1 = styled.h1`
	font-family: 'Cinzel Decorative', cursive;
	font-size: 3.5rem;
	color: #e6e6e6;
`
const P1 = styled.p`
	font-family: 'Sacramento', cursive;
	font-size: 2rem;
	color: #e6e6e6;
`
const P2 = styled.p`
	font-family: 'Sacramento', cursive;
	font-size: 2rem;
	color: #e6e6e6;
`

const IndexPage = () => {
	return (
		<>
			<Seo title="Amal Richwin" />
			<Container>
				<H1>Amal Richwin</H1>
				<div>
					<P1>About a passionate dev</P1>
					<P2>
						Soon
						<PulseLoader color="#e6e6e6" loading={true} size={5} />
					</P2>
				</div>
			</Container>
		</>
	)
}

export default IndexPage

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
	)

	const metaDescription = description || site.siteMetadata.description
	const defaultTitle = site.siteMetadata?.title

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
					content: metaDescription,
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
			].concat(meta)}
		/>
	)
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}
