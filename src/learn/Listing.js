import React from 'react'

function Listing({people}) {
  return (
   <>
    {people.map((peop)=>{
        return(
            <div>
                <img src='{peop.image}'/>
            <h1>Person Name:  {peop.name}</h1>
            <h2>Person Age:   {peop.age}</h2>
        </div>
        )
       
    })}
    </>
  )
}

export default Listing
