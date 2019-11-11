import React from 'react';
import { Link } from 'react-router-dom';

class VideoFeedItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.previewPause = this.previewPause.bind(this);
        this.previewPlay = this.previewPlay.bind(this);
    }

    previewPlay(e) {
        e.currentTarget.play();
        e.currentTarget.addEventListener('timeupdate', function () {
            if (this.currentTime >= 10) {
                this.pause();
            }
        })
    }

    previewPause(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    }

    render() {
        const video = this.props.video;
        return(
            <div className='video-feed-item'>
                <Link to={`/videos/${video.id}` }
                 >
                <video 
                onMouseOver={this.previewPlay}
                onMouseLeave={this.previewPause}
                muted='muted'
                height='118' width='210' src={video.mediaUrl} ></video>
                <h1>{video.title}</h1>
                <div>
                    <p>{video.description}</p>
                </div>
                </Link>
            </div>
        );
    }
}

export default VideoFeedItem;