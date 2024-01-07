import { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { }
})

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime()

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
}

const retrieveStorageToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token")
    localStorage.removeItem("expirationTime")
    return null
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStorageToken()
  let initialToken;
  if (tokenData) {
    initialToken = localStorage.getItem('token')
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;


  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem('token')
    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
    localStorage.removeItem('expirationTime')
  }, [])

  const loginHandler = (token, expirationTime) => {
    setToken(token)
    localStorage.setItem('token', token)
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
    localStorage.setItem('expirationTime', expirationTime)
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext