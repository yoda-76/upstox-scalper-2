import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

const VIDEO_PATH = 'https://www.loom.com/0b03f2a8-5a0f-4dc2-b2fb-fa727b5512ed';

export default function ClientVideo() {
    const playerRef = useRef(null);
    return (
        <div className=' w-[100%] flex justify-center pt-10'>
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
    );
}

