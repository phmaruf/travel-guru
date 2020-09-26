import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from './firebase.config';
import firebaseConfig from '../../../src/firebase.config';
import './Login.css';
import { Button } from 'react-bootstrap';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  })

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL
      }
      setUser(signedInUser);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;
    
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    
    });
  }
  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(response => {
      const signedOutUser ={
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
      }
      setUser(signedOutUser);
    })
    .catch(err => {

    })
  }

  const handleBlur = (event) => {
    let isFormValid;
    if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
          
    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (event) => {
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(response => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name)
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = true;
        setUser(newUserInfo);
        
       
      });
    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(response =>{
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    event.preventDefault();
  }

  const updateUserName = name => {

    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
    
  }

  return (
   
    <div className="login">
      <br/> <br/>
      {
        user.isSignedIn && <div> 
          <p>Welcome: {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""></img> 
          </div>
      }
      <h2>Sing in or Sign up Please</h2>
      <input type="checkbox" onChange={() =>  setNewUser(!newUser)} name="" id=""/>
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your Name"/>} <br/> 
        <input type="text" name="email" onBlur={handleBlur} placeholder="Write your email address" required/> <br/> 
        <input type="password" name="password" onBlur={handleBlur} name="" id="" placeholder="Your Password" required/> <br/> 
        <input  type="submit" value="Submit"/>
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
      {
        user.isSignedIn ? <Button variant="success" onClick = {handleSignOut}>Sign Out</Button> :
        <Button variant="success" onClick = {handleGoogleSignIn}>Sign in Using Google</Button>
      } <br/> <br/>
      <Button  > Sign in using Facebook</Button> 
    </div>
  );
};

export default Login;