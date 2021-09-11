import React from "react"

function ShowBtn({showComments, setShowComments}){
    return <button onClick={()=>setShowComments(!showComments)}>{showComments ? "Hide Comments" : "Show Comments"}</button>
}

export default ShowBtn