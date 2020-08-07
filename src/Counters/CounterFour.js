import React from 'react';
import api from '../api/index';
import './Counter.css';
import vote from '../images/vote.png';

let wasClicked = false;

class CounterFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: ''
        };
    }

    handleClick = async () => {
        if(wasClicked === false) {

            this.setState(({ count }) => ({
                count: count + 1
            }));
            
            wasClicked = true

            this.componentDidUpdate = async () => {
                const count = this.state
                const payload = count
            
                await api.increaseVoteFour(payload)
                  .then(window.alert('Voted Counted!')) 
            }
        }
    }

    componentDidMount = async () => {
        const vote = await api.getVoteFour();

        this.setState({
            count: vote.data.data.count
        })
    }

    render () {
        return (
            <div className='VoterandCounter'>
                <input type='image' src={vote} alt='vote' className='VoteButton' onClick={this.handleClick}></input>
                <p className='Counter'>{this.state.count}</p>
            </div>
        );
    }
};

export default CounterFour