import React, { useState } from 'react';

function EditName({ userName, firstName, lastName, onUserNameChange }) {
    const [editUserName, setEditUserName] = useState(userName);

    const handleChange = (event) => {
        const newUserName = event.target.value;
        setEditUserName(newUserName);
        onUserNameChange(newUserName); // Appeler la fonction de rappel à chaque changement
    };

    return (
        <form className='editNameForm'>
            <div>
                <label htmlFor="userNameInput" className='editNameLabel'>User name:</label>
                <input
                    type="text"
                    id='userNameInput'
                    className='editNameInput'
                    value={editUserName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstNameInput" className='editNameLabel'>First name:</label>
                <input
                    type="text"
                    id='firstNameInput'
                    className='editNameInput noneInput'
                    value={firstName}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="lastNameInput" className='editNameLabel'>Last name:</label>
                <input
                    type="text"
                    id='lastNameInput'
                    className='editNameInput noneInput'
                    value={lastName}
                    readOnly
                />
            </div>
            {/* Pas de bouton nécessaire puisque les changements sont appliqués immédiatement */}
        </form>
    );
}

export default EditName;