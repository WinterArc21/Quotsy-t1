import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlayfairDisplay';

const { fontFamily } = loadFont();

export const SceneCustomization: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Theme transition logic
    // 0-30: Light Theme
    // 30-60: Dark Theme
    // 60-90: Pink Theme
    // 90+: Gradient Theme

    const darkThemeOpacity = interpolate(frame, [25, 35], [0, 1], { extrapolateRight: 'clamp' });
    const pinkThemeOpacity = interpolate(frame, [55, 65], [0, 1], { extrapolateRight: 'clamp' });
    const gradientThemeOpacity = interpolate(frame, [85, 95], [0, 1], { extrapolateRight: 'clamp' });

    const scale = spring({
        frame,
        fps,
        config: { damping: 12 },
    });

    const rotateY = interpolate(frame, [0, 120], [0, 180]); // Spin the card as it changes themes? Maybe too much. Let's do a subtle tilt.
    const tilt = interpolate(frame, [0, 60, 120], [-2, 2, -2]);

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', perspective: 1000 }}>
            <div style={{
                position: 'absolute',
                top: 100,
                width: '100%',
                textAlign: 'center',
                fontFamily,
                fontSize: 60,
                fontWeight: 700,
                color: '#1a1a1a',
                zIndex: 10,
                textShadow: '0 4px 10px rgba(255,255,255,0.5)'
            }}>
                Style It Your Way
            </div>

            {/* Base Card Container */}
            <div
                style={{
                    width: 700, // Larger
                    height: 480,
                    borderRadius: 30,
                    boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.2)',
                    transform: `scale(${scale}) rotateY(${tilt}deg)`,
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#fff', // Base
                }}
            >
                {/* 1. Light Theme (Default bottom layer) */}
                <div style={{ ...cardStyle, background: 'rgba(255, 255, 255, 1)', color: '#1a1a1a' }}>
                    <QuoteText color="#1a1a1a" />
                </div>

                {/* 2. Dark Theme layer */}
                <div style={{ ...cardStyle, background: '#1a1a1a', color: '#fff', opacity: darkThemeOpacity }}>
                    <QuoteText color="#fff" />
                </div>

                {/* 3. Pink Theme layer */}
                <div style={{ ...cardStyle, background: '#ffe4e6', color: '#881337', opacity: pinkThemeOpacity }}>
                    <QuoteText color="#881337" />
                </div>

                {/* 4. Gradient Theme layer */}
                <div style={{ ...cardStyle, background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)', color: '#1a1a1a', opacity: gradientThemeOpacity }}>
                    <QuoteText color="#4a1a1c" />
                </div>
            </div>
        </AbsoluteFill>
    );
};

const cardStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    transition: 'background 0.3s ease', // Smooth CSS transition for safety
};

const QuoteText = ({ color }: { color: string }) => (
    <div style={{ textAlign: 'center', fontFamily, fontStyle: 'italic', color }}>
        <div style={{ fontSize: 80, opacity: 0.2, lineHeight: 0.5, marginBottom: 15 }}>“</div>
        <div style={{ fontSize: 32, lineHeight: 1.5, marginBottom: 30 }}>
            Simplicity is the ultimate sophistication.
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, opacity: 0.9 }}>Leonardo da Vinci</div>
    </div>
);
