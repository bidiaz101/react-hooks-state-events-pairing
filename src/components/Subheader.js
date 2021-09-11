import React from "react"

function Subheader({views, uploadDate}) {
    return <p>{views} views | {uploadDate}</p>
}

export default Subheader