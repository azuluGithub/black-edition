import { PureComponent } from 'react';

import IntroVideoComponent from './IntroVideo.component';

class IntroVideo extends PureComponent {

    renderIntroVideo() {
        return (
            <IntroVideoComponent />
        );
    }

    render() {
        return this.renderIntroVideo();
    }
}

export default IntroVideo;