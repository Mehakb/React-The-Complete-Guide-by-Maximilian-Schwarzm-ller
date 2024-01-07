import { useState } from "react"
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && valueTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setValueTouched(true);
  };
  const reset = () => {
    setEnteredValue('')
    setValueTouched(false)
  }
  return { value: enteredValue, isValid: valueIsValid, hasError, valueChangeHandler, valueBlurHandler, reset }
}

export default useInput