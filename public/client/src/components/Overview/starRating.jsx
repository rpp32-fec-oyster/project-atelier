import React from 'react';


class StarRating extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // ratings: this.props.ratings,
      // length: this.props.ratings.length,
      // average: this.average
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    console.log('scroll to Ratings and Reviews')
  }

  render () {
    console.log('this.props.ratings', this.props.ratings)
    const ratings = Object.values(this.props.ratings);
    const length = ratings.length
    const average = ratings.reduce((acc, curr, ) =>
    acc + curr / ratings.length , 0)

  return (
    <div>
    <div>Star Rating of {length} reviews: {average}
   </div>
   <a href = "http://localhost:3000" onClick={this.handleClick}>Read Reviews</a>
   </div>
  )
}
}

export default StarRating;
