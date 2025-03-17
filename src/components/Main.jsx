import React from 'react'

const Main = (props) => {

  const {data} = props
  return (
    <div className='imgContainer'>
        <img className='bgImage' src={data?.hdurl} alt={data.title || 'bg-img'} />
    </div>
  )
}

export default Main