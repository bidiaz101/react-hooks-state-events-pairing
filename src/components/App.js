import video from "../data/video.js";
import React, { useState } from "react"
import Header from "./Header"
import Subheader from "./Subheader"
import VoteBtns from "./VoteBtns"
import Comments from "./Comments"
import ShowBtn from "./ShowBtn"

function App() {
  console.log("Here's your data:", video);

  const [showComments, setShowComments] = useState(true)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header videoTitle={video.title}/>
      <Subheader views={video.views} uploadDate={video.createdAt}/>
      <VoteBtns upvotes={video.upvotes} downvotes={video.downvotes}/>
      <br/>
      <ShowBtn showComments={showComments} setShowComments={setShowComments} />
      <hr/>
      {showComments ? <Comments commentsArr={video.comments} /> : null }
    </div>
  );
}

export default App;
