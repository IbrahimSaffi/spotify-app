import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mySlice, { clearFlag, setFlag } from '../../slices/mySlice'
import "./LoginPage.css"
const CLIENT_ID = "88b1fff7f3af426ba3472d3dcc2fa959"
const REDIRECT_URI = `${window.location.origin}/callback`
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const CLIENT_SECRET = "f764b0ca59bb4ccb91d81d3ede3237c7"
const SCOPE = "user-top-read user-read-recently-played"

export default function LoginPage() {

  const state = useSelector(state => state.myState)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearFlag());
    dispatch(setFlag("login"))
  }, [])

  return (
    <div className='login-page' >
      <h1 className='login-label' >Spotify Profile</h1>
      <a className='login-btn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>
        Login to Spotify
      </a>

    </div>
  )
}
