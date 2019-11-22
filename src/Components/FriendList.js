import React, { Component } from 'react';
import {getCurrentProfile} from '../store/actions/profile';
import {deleteFriend} from '../store/actions/profile'
import {connect} from 'react-redux';
import isEmpty from '../store/validation/isEmpty';
import {Link} from 'react-router-dom';


class FriendList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          getAllFriends: [],
          Name:'',
          MobileNumber:'',
          FavouriteGame:'',
          DOB:''
      }
  }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    delete = (id) => e => {
        e.preventDefault();
        // console.log(id);
        this.props.deleteFriend(id);
    }

    onClickHandler  = (data) => e => {
        e.preventDefault();
        console.log(data)

    }

    static getDerivedStateFromProps(nextprops,nextstate) {
        // console.log(nextprops.profile.profile.friends);
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

            <div className= 'col-5'>
                <h5>{friends.Name}</h5>
            </div>

            <div className='col-3'>
                <h4 onClick={this.delete(friends._id)}>x</h4>
            </div>
            <div className='col-1'>
                <Link>
                <h4 onClick={this.onClickHandler(friends)}>edit</h4>
                </Link>
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
            <div className='friendList-main'>
                <div className='friends-List-heading'>
                <h1>Welcome To<span> Friends App</span></h1>
                </div>
        
                <div className='container sno-name-delete-row'>
                <div className="row">
                <div className="col-3"><p>Sno</p></div>
                <div className="col-5"><p>Friends Name</p></div>
                <div className="col-3"><p>Delete</p></div>
                <div className="col-1"><p>Edit</p></div>
        
              </div>
              {this.renderList()}
                </div>

             

            </div>

          </React.Fragment>

          <div className='add-friend-button'><Link to ='/addafriend'><button>Add A Friend</button></Link></div>
          
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect ( mapStateToProps,
     {getCurrentProfile,deleteFriend} 
     )(FriendList);