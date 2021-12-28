import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import AddQuestion from './AddQuestion.jsx';
import axios from 'axios';
const token = require('../../../dist/config.js');

class QandA extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      haveData: false,
      qToDisplay: 2
    };
    this.moreButton = this.moreButton.bind(this);
  }

  moreButton (e) {
    //adjuest number of questions displayed
    console.log('event', e);
  }

  componentDidMount () {

    let id = this.props.id;
    this.setState({
      product: id
    })
    this.getQuestionData(id, 1, 10)
  }

  getQuestionData(id, page, count) {
    let headers = {
      'Authorization': token.TOKEN
    };
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}&page=${page}&count=${count}&sort=helpful`, {headers: headers})
    .then((result) => {
      this.setState({
        questionData: result.data.results,
        haveData: true
      })

    })
    .catch((error) => {
      throw error;
    })
  }

  render() {
    if (!this.state.haveData) {
      return (
        <div>Questions are Loading</div>
        )
      } else {
        return (
          <div>
        <h2>Q and A</h2>
        <Search />
        <Questions questions={this.state.questionData} moreButton={this.moreButton}/>
        <button className='More Question' id='MoreQuestion' onClick={this.moreButton}>More Anwsered Questions</button>
        <AddQuestion />
        </div>
      )
    }
  }
}


export default QandA;