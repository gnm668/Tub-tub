import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    };
};

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    };
};

const removeVideo = videoId => {
    return {
        type: REMOVE_VIDEO,
        videoId
    }
};

export const fetchVideos = () => dispatch => {
    return (
        APIUtil.fetchVideos()
            .then(videos => dispatch(receiveAllVideos(videos)))
    );
};

export const searchVideos = search => dispatch => {
    return (
        APIUtil.searchVideos(search)
            .then(videos => dispatch(receiveAllVideos(videos)))
    );
};

export const fetchVideo = videoId => dispatch => {
    return (
        APIUtil.fetchVideo(videoId)
            .then(video => dispatch(receiveVideo(video)))
    );
};

export const createVideo = video => dispatch => {
    return (
        APIUtil.createVideo(video)
            .then(video => dispatch(receiveVideo(video)))
    );
};

export const updateVideo = video => dispatch => {
    return (
        APIUtil.updateVideo(video)
            .then(video => dispatch(receiveVideo(video)))
    );
};

export const deleteVideo = videoId => dispatch => {
    return (
        APIUtil.deleteVideo(videoId)
            .then(() => dispatch(removeVideo(videoId)))
    );
};

