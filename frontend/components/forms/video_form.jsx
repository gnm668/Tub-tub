import React from 'react';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '', 
            videoFile: null,
        };

        this.handleFile = this.handleFile.bind(this);
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e) {
        let videoFile = e.currentTarget.files[0];
        this.setState({videoFile: videoFile});
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[user_id]', 1);
        formData.append('video[media]', this.state.videoFile);
        this.props.createVideo(formData);
        this.props.history.push('/');
    }

    render() {
        if (!this.state.videoFile) {
            return (
                <div className='video-form-file'>
                    <input type="file"
                    accept=".mov, .mp4"
                    onChange={this.handleFile} />
                </div>
            );
        } else {
            return (
              <div className='video-form-text'>
                    <form onSubmit={this.handleSubmit} >
                        <input type='text'
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                            placeholder={'Title'} />
                        <br/>
                        <input type='text'
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                            placeholder={'Description'} />
                        <button>Upload Video</button>
                    </form>
              </div>
            );
        }
    };
}

export default VideoForm;