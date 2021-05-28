import React from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import useSound from 'use-sound'

import Song from '../images/song.mp3'

const Container = styled.div`
	margin: 5rem auto;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-height: 60vh;
`
// const H1 = styled.h1`
// 	font-family: 'Cinzel Decorative', cursive;
// 	font-size: 3.5rem;
// 	color: #e6e6e6;
// 	text-align: center;
// `
const H1 = styled.h1`
	font-family: 'Anonymous Pro', monospace;
	font-size: 1.25rem;
	color: #505050;
	text-align: center;
`
const H2 = styled.h1`
	font-family: 'Kaushan Script', cursive;
	font-size: 1.5rem;
	color: #505050;
	text-align: center;
`
const P1 = styled.p`
	font-size: 1.5rem;
	text-align: center;
	color: #000000;
`
const P2 = styled.p`
	font-family: 'Kaushan Script', cursive;
	text-align: center;
	color: #000000;
`
const P = styled.p`
	text-align: center;
	color: #303030;
`
// const P1 = styled.p`
// 	font-family: 'Sacramento', cursive;
// 	font-size: 2rem;
// 	color: #e6e6e6;
// `
// const P2 = styled.p`
// 	font-family: 'Sacramento', cursive;
// 	font-size: 2rem;
// 	color: #e6e6e6;
// `
const Button = styled.p`
	display: hidden;
`
const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: whitesmoke;
	font-family: 'Dancing Script', cursive;
	height: 50rem;
	width: 18rem;
	border-radius: 10px;
	box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
	@media (min-width: 768px) {
		height: 90rem;
		width: 25rem;
	}
`

const IndexPage = () => {
	const [play, exposedData] = useSound(Song, {})
	React.useEffect(() => {
		const btn = document.getElementById('play')
		setTimeout(() => {
			btn.click()
		}, 2000)
		return () => {}
	}, [play])
	return (
		<>
			<Seo title="Amal Richwin" />
			<Container>
				{/* <H1>Amal Richwin</H1>
				<div>
					<P1>About a passionate dev</P1>
					<P2>
						Soon
						<PulseLoader color="#e6e6e6" loading={true} size={5} />
					</P2>
				</div> */}
				<Div>
					{/* <h1>PLEASE JOIN US FOR THE 25TH ANNIVERSARY OF OUR PARENTS</h1>
					<h2>KEEVIN</h2>
					<p>with</p>
					<h2>SHANTHI</h2>
					<p>May 29th SATURDAY 2021</p>
					<p>AT 5.30pm</p>
					<p>Virtual Venue</p>
					<p>Zoom</p> */}
					<H1>PLEASE JOIN US FOR THE 25TH ANNIVERSARY OF OUR PARENTS</H1>
					<div>
						<H2>KEEVIN</H2>
						<P1>with</P1>
						<H2>SHANTHI</H2>
					</div>
					<P>May 29th SATURDAY 2021</P>
					<P>AT 5.30pm</P>
					<P2>Virtual Venue : Zoom</P2>
					<Button
						id="play"
						hidden
						onClick={() => {
							play()
							exposedData.sound.fade(0, 1, 100000)
						}}
					>
						Play
					</Button>
				</Div>
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
			// titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			titleTemplate={`25th Anniversary`}
			meta={[
				{
					name: `description`,
					content: `25th Anniversary Dad and Mom`,
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
