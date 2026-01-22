import React from 'react';
import { Composition } from 'remotion';
import { IntroVideo } from './IntroVideo/Composition';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="IntroVideo"
                component={IntroVideo}
                durationInFrames={450} // 15 seconds at 30fps
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
