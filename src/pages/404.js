import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import GifImage from '../images/animation_200_ko1qponm.gif'

const Container = styled.div`
	margin: 3rem auto;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
`

// markup
const NotFoundPage = () => {
	return (
		<>
			<Seo title="404" />
			<Container>
				<img src={GifImage} alt="404" />
			</Container>
		</>
	)
}

export default NotFoundPage
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
