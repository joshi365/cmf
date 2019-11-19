import React, { Component } from 'react';
import {getCurrentProfile} from '../store/actions/profile';
import {connect} from 'react-redux';
import isEmpty from '../store/validation/isEmpty'


class FriendList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          getAllFriends: []
      }
  }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    static getDerivedStateFromProps(nextprops,nextstate) {
        console.log(nextprops.profile.profile.friends);
        if(nextprops.profile !== nextstate.getAllFriends) {
            return{
               getAllFriends: nextprops.profile.profile.friends
            };
        }
        return null;
    }

    renderList = () => {
        const {getAllFriends} = this.state;

        return(
            <React.Fragment>
            {!isEmpty(getAllFriends) &&
            getAllFriends.map((friends,index) =>(
            <div className='row' key={index}>
                <div className = 'col-3'>
            <h5>{index}</h5>
                </div>

            <div className= 'col-6'>
                <h5>{friends.Name}</h5>
            </div>

            <div className='col-3'>
                <h4>x</h4>
            </div>
            </div>
            ))}
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <React.Fragment>
                    <div>
                        {this.renderList()}
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect ( mapStateToProps,
     {getCurrentProfile} 
     )(FriendList);