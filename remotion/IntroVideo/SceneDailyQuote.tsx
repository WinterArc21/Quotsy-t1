import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlayfairDisplay';
import { AuthorSignature } from './AuthorSignature';

const { fontFamily } = loadFont();

export const SceneDailyQuote: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 12 },
    });

    const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

    // 3D Parallax Effect
    const rotateY = interpolate(frame, [0, 300], [-5, 5], { extrapolateRight: 'clamp' });
    const rotateX = interpolate(frame, [0, 300], [2, -2], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{
            justifyContent: 'center',
            alignItems: 'center',
            perspective: 1000,
        }}>
            <div
                style={{
                    width: 900,
                    padding: 60,
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: 30,
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255,255,255,0.5) inset',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    transform: `scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                    opacity,
                    transformStyle: 'preserve-3d',
                }}
            >
                <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{
                            padding: '8px 20px',
                            background: '#1a1a1a',
                            borderRadius: 999,
                            fontSize: 14,
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                    >
                        Quote of the Day
                    </div>
                </div>

                <div style={{ textAlign: 'center', fontFamily, fontStyle: 'italic' }}>
                    <div style={{ fontSize: 90, color: 'rgba(0,0,0,0.05)', lineHeight: 0.5, marginBottom: 20 }}>“</div>
                    <div style={{
                        fontSize: 48,
                        color: '#1a1a1a',
                        lineHeight: 1.3,
                        marginBottom: 40,
                        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        The only way to do great work is to love what you do.
                    </div>
                    <AuthorSignature name="Steve Jobs" color="#1a1a1a" fontSize={32} />
                </div>
            </div>
        </AbsoluteFill>
    );
};
