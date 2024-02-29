import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/slices/userSlice';
import { updateUserName } from '../redux/slices/userNameSlice'

import EditName from '../OthersComponents/EditName';
import Transaction from '../OthersComponents/Transaction1';

function UserPage() {


  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const [formUserName, setFormUserName] = useState('');

  useEffect(() => {
    if (token) {
      console.log(token);
      dispatch(user(token));
    }
  }, [token, dispatch]);

  const data = useSelector(state => state.profile);
  const userData = data.userData;
  const [userName, setUserName] = useState(userData?.body.userName);

  useEffect(() => {
    if (userData) {
      setUserName(`${userData.body.userName}`);
      // console.log(userName + "useeffect");
    }


  }, [data, userData, data, dispatch]);

  const [showEditName, setShowEditName] = useState(false);


  const handleUserNameChange = (newUserName) => {
    setFormUserName(newUserName);
  };


  if (!data.loading && data && userData) {

    const saveName = () => {
      if (formUserName) {
        console.log(userName);
        dispatch(updateUserName({ token: token, newUserName: formUserName }))
          .then(() => {
            setUserName(formUserName);
            console.log(userName);
          })
          .catch((error) => {

          })
        setShowEditName(false);
      }
      else{
        alert("Remplissez le champs");
      }

    }

    return (
      <div className="UserPage">
        <main className="main bg-dark">
          <div className="header">
            {
              showEditName ?
                <div>
                  <h1>Edit user info</h1>
                  <EditName firstName={userData.body.firstName} lastName={userData.body.lastName} userName={userName} onUserNameChange={handleUserNameChange} />
                  <button onClick={() => saveName()} className="edit-button">Save</button>


                  <button onClick={() => setShowEditName(false)} className="edit-button">Cancel</button>
                </div>
                :
                <div>
                  <h1>Welcome back<br />{userData.body.firstName} {userData.body.lastName} {"("}{userName}{")"}</h1>
                  <button onClick={() => setShowEditName(true)} className="edit-button">Edit Name</button>
                </div>
            }
          </div>

          <h2 className="sr-only">Accounts</h2>
          <Transaction
            account= "Argent Bank Checking (x8349)"
            amont= "$2,082.79"
          />
          <Transaction
            account= "Argent Bank Checking (x6712)"
            amont= "$10,928.42"
          />
          <Transaction
            account= "Argent Bank Checking (x8349)"
            amont= "$184.30"
          />
        </main>
      </div>
    );
  }


}

export default UserPage;
