import React from 'react'

export const SocialMedia = ({link , svg}) => {
    return (
        <a href={link} className='btn btn-circle'>
            {svg}
        </a>
    )
}
