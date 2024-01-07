import useBasicInput from "../hooks/use-basicInput";

const BasicForm = (props) => {
  const {
    input: fname,
    valueIsValid: fnameIsValid,
    hasError: fnameError,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: fnameReset } = useBasicInput(value => value.trim() !== '');

  const submitHandler = (event) => {
    event.preventDefault();
    if (fnameError) {
      return
    }
    fnameReset();
  }
  const fnameInputClasses = fnameError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={fname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler} />
          {fnameError && (
            <p className='error-text'>First Name must not be empty.</p>
          )}
        </div>

        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
