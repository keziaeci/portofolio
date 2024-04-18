// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navigator = ({path,name}) => {
    // console.log(path)
    const navigate = useNavigate()
    return (
    <>
        <button className="link-hover dark:text-white text-black mt-2 pe-4 lg:mt-0 lg:ms-2 lg:p-0 hover:text-pink-600 lg:block" onClick={() => navigate(path)}>{name}</button>
    </>
    )
}

export default Navigator