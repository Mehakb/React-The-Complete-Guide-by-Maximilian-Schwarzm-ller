import { useState } from 'react'

const useBasicInput = (validate) => {
  const [input, setInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(input)
  const hasError = !valueIsValid && isTouched

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    setIsTouched(true)
  }
  const inputBlurHandler = () => {
    setIsTouched(true)
  }
  const reset = () => {
    setInput('');
    setIsTouched(false)
  }
  return {
    value: input, valueIsValid, hasError, inputChangeHandler, inputBlurHandler, reset
  }
}

export default useBasicInput