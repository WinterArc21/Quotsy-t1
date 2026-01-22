import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';

const genres = ['Wisdom', 'Life', 'Philosophy', 'Success', 'Motivation', 'Love', 'Art'];

export const SceneGenres: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Title Animation: Slides down and fades in
    const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const titleY = interpolate(frame, [0, 25], [-30, 0], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* Title - The "Anchor" */}
            <div style={{
                marginBottom: 40,
                fontFamily: 'Playfair Display',
                fontSize: 48,
                fontWeight: 700,
                color: '#1a1a1a',
                opacity: titleOpacity,
                transform: `translateY(${titleY}px)`,
                textAlign: 'center',
                width: '100%'
            }}>
                Curated for You
            </div>

            {/* Genre Container - The "Bloom" */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '0 100px',
                gap: 20
            }}>
                {genres.map((genre, index) => {
                    // Start genres AFTER title has mostly appeared (delay starts at frame 15)
                    const delay = 15 + (index * 4);
                    const scale = spring({
                        frame: frame - delay,
                        fps,
                        config: { stiffness: 200, damping: 12 },
                    });

                    // Subtle upward bloom
                    const bloomY = interpolate(frame - delay, [0, 15], [20, 0], { extrapolateRight: 'clamp' });
                    const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

                    return (
                        <div
                            key={genre}
                            style={{
                                padding: '12px 24px',
                                borderRadius: 99,
                                backgroundColor: index % 2 === 0 ? '#1a1a1a' : '#f5f5f5',
                                color: index % 2 === 0 ? '#fff' : '#1a1a1a',
                                fontSize: 24,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                transform: `scale(${scale}) translateY(${bloomY}px)`,
                                opacity,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        >
                            {genre}
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
};
