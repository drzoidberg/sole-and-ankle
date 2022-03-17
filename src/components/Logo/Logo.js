import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

const Logo = props => {
  return (
    <Link href='/'>
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  )
}

const Link = styled.a`
  flex: 0;
  color: inherit;
  left: 0;
  text-decoration: none;
  width: 0;
  /* margin-right: auto; */
`

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`

export default Logo
