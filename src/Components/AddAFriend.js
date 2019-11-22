import React, { Component } from 'react';
import {connect} from 'react-redux';
import {friendAdd,getCurrentProfile} from '../store/actions/profile'
import {Link} from 'react-router-dom';

class AddAFriend extends Component {

    constructor(props){
        super(props);
        this.state = {
            Name:'',
            MobileNumber:'',
            FavouriteGame:'',
            DOB:''
        }
    }

    onChangeEvent = (e) => {
       e.preventDefault();
       this.setState ({
        [e.target.name]: e.target.value
       })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        const friendData = {
            Name:this.state.Name,
            MobileNumber:this.state.MobileNumber,
            DOB:this.state.DOB,
            FavouriteGame:this.state.FavouriteGame
        }

        this.props.friendAdd(friendData, this.props.history);
        // console.log(friendData);
    }

    render() {
        return (
        <div className='add-a-friend-main'>
            <form onSubmit={this.onHandleSubmit}>
            <div className='add-friend-heading'>
                   <h1>Welcome to <span>Friends App</span></h1>
               </div>
           <div className="row name-mobile-field">
            <div className="col-6">
                <p>Friend's Name</p>
                 <input name='Name' value={this.state.Name} onChange={this.onChangeEvent} placeholder='enter-name'></input>
            </div>
            <div className="col-6">
                <p>Phone Number</p>
                 <input name='MobileNumber' value={this.state.MobileNumber} onChange={this.onChangeEvent} placeholder='Mobile-Number'></input>
            </div>
            </div>

            <div className="row dob-game-field">
            <div className="col-6">
                <p>Friends's Birthday</p>
                <input name='DOB' type='date'  value={this.state.DOB} onChange={this.onChangeEvent} placeholder='Birthday'></input>
            </div>
            <div className="col-6">
                <p>Friend Favourite Game</p>
                 <input name='FavouriteGame' value={this.state.FavouriteGame} onChange={this.onChangeEvent} placeholder='favourite game'></input>
            </div>
            </div>
            <div className='row button-fields'>
                <div className='col-6 back-button'>
                    <Link to='/friendlist'><button>{"<-"}<span>Back</span></button></Link>
                </div>
                <div className='col-6 add-button'>
                    <button type='submit'>Add Friend<span>-></span></button>
                </div>
            </div>
            </form>
            

        </div>
        );
    }
}

const mapStateToProps = state => ({
   profile: state.profile
})

export default connect (mapStateToProps,
    {friendAdd,getCurrentProfile}
    )(AddAFriend);