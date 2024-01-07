import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: nameEnteredValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameValueChangeHandler,
    valueBlurHandler: nameValueBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '');

  const {
    value: emailEnteredValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailValueBlurHandler,
    reset: emailReset
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    nameReset();
    emailReset();
  };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameValueChangeHandler}
          onBlur={nameValueBlurHandler}
          value={nameEnteredValue}
        />
        {nameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailValueChangeHandler}
          onBlur={emailValueBlurHandler}
          value={emailEnteredValue}
        />
        {emailHasError && (
          <p className='error-text'>Email must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
