import React from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'

import Seo from '../components/Seo'

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
