import React from "react";
import VideoListitem from "./video_listItem";

export default function VideoFiles(props){


    return (
        <ul className="col-md-4 listgroup">
            {props.videos.map((items) => {
                return (
                <VideoListitem
                    onVideoSelect = {props.onVideoSelect}
                    key = {items.etag}
                    video = {items}
                />);
            })}
        </ul>
    )
}