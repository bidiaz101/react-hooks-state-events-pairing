import React from "react"

function Comments({commentsArr}) {
    const comments = commentsArr.map(commentObj => {
        return (
            <p key={commentObj.comment}>
                <strong>{commentObj.user}</strong>
                <br/>
                {commentObj.comment}
            </p>
        )
    })

    return (
        <div className="comment-section">
            <h3>{commentsArr.length} Comments</h3>
            {comments}
        </div>
    )
}

export default Comments