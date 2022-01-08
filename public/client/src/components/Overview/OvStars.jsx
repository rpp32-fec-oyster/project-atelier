import React from 'react'
import Star from './Ovstar.jsx'

let Stars = (props) => {
  let {average, size} = props;
  let fullStars = Math.floor(average)
  let quarters = Math.round((average - fullStars) * 4)
  if (quarters === 4) {
    quarters = 'gold'
  }

  let greyStars = Math.floor(5 - average)
  let starsFill = []
  for (var i = 0; i < fullStars; i++) {
    starsFill.push('gold')
  } if (quarters !== 0) {
    starsFill.push(quarters)
  } for (var i = 0; i < greyStars; i++) {
    starsFill.push('grey')
  }

  return (
    <div className ="overview-stars">
      {starsFill.map((info, index) =>
        <Star starFill={info} size={size} key={index} />)
      }
    </div>
  )
}

export default Stars