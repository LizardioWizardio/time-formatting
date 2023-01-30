import React from 'react';
import Video from "./Video";

const VideoList = (props) => {
    return (
        props.list.map(item => <Video url={item.url} date={item.date} key={item.date + Math.random().toFixed(2)}/>)
    );
};

export default VideoList;