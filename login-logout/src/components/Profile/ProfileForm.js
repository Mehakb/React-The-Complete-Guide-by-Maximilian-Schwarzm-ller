import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const history = useHistory()

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = passwordInputRef.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdZXpUDM7zjxSjhAxbsqNxAoYp8BJctb8",
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          password: enteredNewPassword,
          returnSecureToken: false
        }),
        headers: { "Content-Type": "application/json" }
      }).then(res => {
        history.replace("/")
      });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={7} ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
