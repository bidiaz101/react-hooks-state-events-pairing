import React, { useState } from "react"

function VoteBtns({upvotes, downvotes}){
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)

    return (
        <div className="btn-container">
            <button onClick={()=>setUpvoteCount(upvoteCount+1)}>{upvoteCount} 👍</button>
            <button onClick={()=>setDownvoteCount(downvoteCount+1)}>{downvoteCount} 👎</button>
        </div>
    )
}

export default VoteBtns