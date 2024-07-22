import React, { useState } from 'react'
import List from '../Data/people'
import Listing from './Listing'
function BirthDay() {
    const [people,setPeople] = useState(List)
  return (
    <div>
      <h1>{people.length} Numbers of BirthDays Today</h1>
        <Listing people = {people}/>
    </div>
  )
}

export default BirthDay
