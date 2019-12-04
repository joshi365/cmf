import React, { Component } from "react";
import { connect } from "react-redux";
import { EditTheFriend } from "../store/actions/profile";
import { Link } from "react-router-dom";

class EditFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      MobileNumber: "",
      FavouriteGame: "",
      DOB: "",
      friendID: ""
    };
  }

  componentDidMount() {
    const allData = this.props.history.location.state.frieandData;
    this.setState({
      Name: allData.Name,
      MobileNumber: allData.MobileNumber,
      FavouriteGame: allData.FavouriteGame,
      DOB: allData.DOB,
      friendID: allData._id
    });
    console.log(allData._id);
  }

  onChangeEvent = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const formData = {
      Name: this.state.Name,
      MobileNumber: this.state.MobileNumber,
      DOB: this.state.DOB,
      FavouriteGame: this.state.FavouriteGame
    };

    this.props.EditTheFriend(formData,this.state.friendID, this.props.history);
   
    console.log(formData);
  };

  render() {
    // console.log(this.state.data)
    return (
      <div className="add-a-friend-main">
        <form onSubmit={this.onHandleSubmit}>
          <div className="add-friend-heading">
            <h1>
              Welcome to <span>Friends App</span>
            </h1>
          </div>
          <div className="row name-mobile-field">
            <div className="col-6">
              <p>Friend's Name</p>
              <input
                name="Name"
                value={this.state.Name}
                onChange={this.onChangeEvent}
                placeholder="enter-name"
              ></input>
            </div>
            <div className="col-6">
              <p>Phone Number</p>
              <input
                name="MobileNumber"
                value={this.state.MobileNumber}
                onChange={this.onChangeEvent}
                placeholder="Mobile-Number"
              ></input>
            </div>
          </div>

          <div className="row dob-game-field">
            <div className="col-6">
              <p>Friends's Birthday</p>
              <input
                name="DOB"
                type="date"
                value={this.state.DOB}
                onChange={this.onChangeEvent}
                placeholder="Birthday"
              ></input>
            </div>
            <div className="col-6">
              <p>Friend Favourite Game</p>
              <input
                name="FavouriteGame"
                value={this.state.FavouriteGame}
                onChange={this.onChangeEvent}
                placeholder="favourite game"
              ></input>
            </div>
          </div>
          <div className="row button-fields">
            <div className="col-6 back-button">
              <Link to="/friendlist">
                <button>
                  {"<-"}
                  <span>Back</span>
                </button>
              </Link>
            </div>
            <div className="col-6 add-button">
              <button type="submit">
                Save Details<span>-></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { EditTheFriend })(EditFriend);
