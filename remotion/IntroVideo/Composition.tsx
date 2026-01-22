import { AbsoluteFill, useCurrentFrame, useVideoConfig, Sequence, interpolate } from 'remotion';
import { Logo } from './Logo';
import { SceneDailyQuote } from './SceneDailyQuote';
import { SceneGenres } from './SceneGenres';
import { SceneCustomization } from './SceneCustomization';
import { loadFont } from '@remotion/google-fonts/PlayfairDisplay';

const { fontFamily } = loadFont();

export const IntroVideo = () => {
    const frame = useCurrentFrame();

    // Background blobs animation 
    // We add a subtle rotation to blobs for more "organic" feel
    const blob1Y = interpolate(frame, [0, 450], [0, -80]);
    const blob2Y = interpolate(frame, [0, 450], [0, -50]);
    const blobRotate = interpolate(frame, [0, 450], [0, 20]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#fafafa', overflow: 'hidden' }}>
            {/* Background Blobs (Enhanced) */}
            <div style={{
                position: 'absolute', top: -150, right: -150, width: 700, height: 700,
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', // Organic shape
                backgroundColor: 'rgba(200, 200, 200, 0.1)',
                filter: 'blur(80px)',
                transform: `translateY(${blob1Y}px) rotate(${blobRotate}deg)`
            }} />
            <div style={{
                position: 'absolute', bottom: -150, left: -150, width: 600, height: 600,
                borderRadius: '60% 40% 30% 70% / 60% 40% 60% 40%',
                backgroundColor: 'rgba(230, 230, 230, 0.2)',
                filter: 'blur(70px)',
                transform: `translateY(${blob2Y}px) rotate(-${blobRotate}deg)`
            }} />

            {/* 1. Intro: Logo Reveal (0-2s) [60 frames] */}
            <Sequence from={0} durationInFrames={70}>
                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Logo />
                    {/* Kinetic Typography Idea: Words pop in one by one */}
                    <div style={{
                        position: 'absolute', bottom: 100,
                        fontFamily, fontSize: 36, fontStyle: 'italic', color: '#666',
                        display: 'flex', gap: 12
                    }}>
                        {['Your', 'Daily', 'Dose', 'of', 'Wisdom'].map((word, i) => {
                            const delay = 15 + (i * 5); // Staggered start
                            const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
                            const y = interpolate(frame, [delay, delay + 10], [20, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
                            return (
                                <span key={word} style={{ opacity, transform: `translateY(${y}px)` }}>
                                    {word}
                                </span>
                            );
                        })}
                    </div>
                </AbsoluteFill>
            </Sequence>

            {/* 2. Feature 1: Daily Quote (2-5s) [90 frames] */}
            <Sequence from={60} durationInFrames={100}>
                <TransitionInOut duration={100}>
                    <SceneDailyQuote />
                </TransitionInOut>
            </Sequence>

            {/* 3. Feature 2: Customization (5-9s) [120 frames] */}
            <Sequence from={150} durationInFrames={130}>
                <TransitionInOut duration={130}>
                    <SceneCustomization />
                </TransitionInOut>
            </Sequence>

            {/* 4. Feature 3: Genres (9-12s) [90 frames] */}
            <Sequence from={270} durationInFrames={100}>
                <TransitionInOut duration={100}>
                    <SceneGenres />
                </TransitionInOut>
            </Sequence>

            {/* 5. Outro: CTA (12-15s) [90 frames] */}
            <Sequence from={360} durationInFrames={90}>
                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                        fontSize: 80,
                        fontFamily,
                        fontWeight: 700,
                        color: '#1a1a1a',
                        textShadow: '0 4px 30px rgba(0,0,0,0.1)',
                        opacity: interpolate(frame - 360, [0, 10], [0, 1]),
                        transform: `scale(${interpolate(frame - 360, [0, 20], [0.9, 1], { extrapolateRight: 'clamp' })})`
                    }}>
                        Quotsy.me
                    </div>
                    <div style={{
                        marginTop: 60, // Increased to 60px to GUARANTEE no overlap
                        fontSize: 32,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        color: '#666',
                        opacity: interpolate(frame - 360, [8, 18], [0, 1]),
                        transform: `translateY(${interpolate(frame - 360, [8, 18], [10, 0])}px)`
                    }}>
                        Subscribe Today
                    </div>
                </AbsoluteFill>
            </Sequence>

        </AbsoluteFill>
    );
};

// Transition with Blur and Scale - Dynamic Duration
const TransitionInOut: React.FC<{ children: React.ReactNode; duration: number }> = ({ children, duration }) => {
    const frame = useCurrentFrame();

    // Zoom in transition
    const scale = interpolate(frame, [0, duration], [0.95, 1.05]);

    // Dynamic fade in/out based on duration
    // Fade in: 0-15 frames
    // Fade out: last 15 frames
    const opacity = interpolate(
        frame,
        [0, 15, duration - 15, duration],
        [0, 1, 1, 0],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    // Blur out only at the end
    const blur = interpolate(
        frame,
        [duration - 15, duration],
        [0, 10],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    return (
        <AbsoluteFill style={{ opacity, transform: `scale(${scale})`, filter: `blur(${blur}px)` }}>
            {children}
        </AbsoluteFill>
    );
};
