
export const fetchVideos = () => {
    return $.ajax({
        url: `api/videos`
    });
};

export const fetchVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`
    });
};

export const createVideo = video => {
    return $.ajax({
        url: `api/videos`,
        method: `POST`,
        data: { video }
    });
};

export const updateVideo = video => {
    return $.ajax({
        url: `api/videos/${video.id}`,
        method: `PATCH`
    })
}

export const deleteVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`,
        method: `DELETE`
    })
}