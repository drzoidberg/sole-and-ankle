import React from 'react'
import styled from 'styled-components/macro'

import Header from '../Header'
import ShoeIndex from '../ShoeIndex'

const App = () => {
  const [sortId, setSortId] = React.useState('newest')

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  )
}

const Main = styled.main`
  padding: 64px 36px;
`

export default App
