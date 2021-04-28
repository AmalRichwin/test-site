import * as React from 'react'
import styled from 'styled-components'
import GifImage from '../images/animation_200_ko1qponm.gif'

import Seo from '../components/Seo'

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
