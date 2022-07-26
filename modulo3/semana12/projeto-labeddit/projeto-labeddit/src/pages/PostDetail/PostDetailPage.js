import React from 'react'
import useProtectedPage from '../../hooks/useProtected'

const PostDetailPage = () =>{

    useProtectedPage()

return(

    <div>
        detail
    </div>
)


}

export default PostDetailPage