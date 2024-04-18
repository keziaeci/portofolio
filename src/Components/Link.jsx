import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Link = ({path,name}) => {
    const navigate = useNavigate()
  return (
    <a onClick={() => navigate(path)}>{name}</a>
    )
}
