import React, { Component } from 'react';
import {connect} from 'react-redux';
import {friendAdd,getCurrentProfile} from '../store/actions/profile'


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
        <div className='container'>
            <form onSubmit={this.onHandleSubmit}>
           <div className="row">
            <div className="col-6">
                name : <input name='Name' value={this.state.Name} onChange={this.onChangeEvent} placeholder='enter-name'></input>
            </div>
            <div className="col-6">
                Mobile Number : <input name='MobileNumber' value={this.state.MobileNumber} onChange={this.onChangeEvent} placeholder='Mobile-Number'></input>
            </div>
            </div>

            <div className="row">
            <div className="col-6">
                Birthday : <input name='DOB' type='date'  value={this.state.DOB} onChange={this.onChangeEvent} placeholder='Birthday'></input>
            </div>
            <div className="col-6">
                Favourite game : <input name='FavouriteGame' value={this.state.FavouriteGame} onChange={this.onChangeEvent} placeholder='favourite game'></input>
            </div>
            </div>

            <button type='submit'>Add Friend</button>
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