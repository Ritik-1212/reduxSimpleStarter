import React from "react";

export default function VideoDetails({video}){
    if(!video){
        return <div>...Loading</div>
    }
    const id = video.id.videoId;
    const url = `https//www.youtube.com/embed/${id}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}