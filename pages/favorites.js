import React from 'react'
import { Mincard } from '../components'
import Footer from '../components/Footer'

const favorites = ({isWidget}) => {
  console.log(isWidget)
  return (
    <div>
         <Mincard isWidget />
         <Mincard isWidget />
         <Mincard isWidget />
         <Mincard isWidget />
         <Mincard isWidget />
 
        <Footer />
    </div>
  )
}

export default favorites