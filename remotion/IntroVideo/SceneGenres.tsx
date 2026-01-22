import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';

const genres = ['Wisdom', 'Life', 'Philosophy', 'Success', 'Motivation', 'Love', 'Art'];

export const SceneGenres: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', padding: 100, gap: 20 }}>
            {genres.map((genre, index) => {
                const delay = index * 5;
                const scale = spring({
                    frame: frame - delay,
                    fps,
                    config: { stiffness: 200, damping: 10 },
                });

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
                            transform: `scale(${scale})`,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    >
                        {genre}
                    </div>
                );
            })}
            <div style={{
                position: 'absolute',
                top: 150,
                width: '100%',
                textAlign: 'center',
                fontFamily: 'Playfair Display',
                fontSize: 48,
                fontWeight: 700,
                color: '#1a1a1a'
            }}>
                Curated for You
            </div>
        </AbsoluteFill>
    );
};
