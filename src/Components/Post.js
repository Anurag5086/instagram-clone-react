import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function Post({username, imgURL, caption}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar alt={username} src="/static/images/avatar/1.jpg" className="post__avatar" />
                <h4>{username}</h4>
            </div>
            <img className="post__image" src={imgURL} alt="" />
            <div className="post__activity">
                <FavoriteBorderIcon fontSize="large" className="icon" />
                <ChatBubbleOutlineRoundedIcon fontSize="large" className="icon" />
                <SendRoundedIcon fontSize="large" className="icon" />
                

            </div>
            <h4 className="post__caption"><strong>{username} </strong> {caption}</h4>
        </div>
    )
}

export default Post
