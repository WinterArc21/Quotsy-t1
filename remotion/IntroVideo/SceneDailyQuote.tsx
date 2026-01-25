import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlayfairDisplay';
import { AuthorSignature } from './AuthorSignature';

const { fontFamily } = loadFont();

export const SceneDailyQuote: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // -- STAGES --
    // Notification Drop: 0 - 35
    // Morph/Expansion: 35 - 60
    // Content Reveal: 55 - 80

    // 1. Notification Drop Animation
    const noteDrop = spring({
        frame,
        fps,
        config: { damping: 12 },
    });

    // 2. Morph Animation (from note to card)
    const morphProgress = spring({
        frame: frame - 35,
        fps,
        config: { damping: 20, stiffness: 100 },
    });

    // Interpolated values for the morph
    const width = interpolate(morphProgress, [0, 1], [800, 900]); // Starts wider for impact
    const padding = interpolate(morphProgress, [0, 1], [40, 60]);
    const borderRadius = interpolate(morphProgress, [0, 1], [24, 30]);
    const backgroundOpacity = interpolate(morphProgress, [0, 1], [0.95, 0.6]);
    const verticalPosition = interpolate(morphProgress, [0, 1], [150, 500]);

    // 3. Content Visibility
    const noteOpacity = interpolate(frame, [0, 10, 35, 45], [0, 1, 1, 0], { extrapolateRight: 'clamp' });
    const quoteOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateRight: 'clamp' });

    // 3D Parallax Effect (applied only after morph)
    const rotateY = interpolate(frame, [60, 300], [-5, 5], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
    const rotateX = interpolate(frame, [60, 300], [2, -2], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

    // 4. Exit Animation
    const exitOpacity = interpolate(frame, [95, 110], [1, 0], { extrapolateLeft: 'clamp' });
    const exitBlur = interpolate(frame, [95, 110], [0, 10], { extrapolateLeft: 'clamp' });

    return (
        <AbsoluteFill style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            perspective: 1000,
            paddingTop: 0,
            opacity: exitOpacity,
            filter: `blur(${exitBlur}px)`,
        }}>
            <div
                style={{
                    width,
                    padding,
                    backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
                    borderRadius,
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255,255,255,0.5) inset',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    transform: `translateY(${interpolate(noteDrop, [0, 1], [-200, verticalPosition / 2])}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 200,
                }}
            >
                {/* --- NOTIFICATION CONTENT (Fades during morph) --- */}
                <div style={{
                    opacity: noteOpacity,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 30,
                    position: 'absolute',
                    top: 40,
                    left: 40,
                    width: 720,
                }}>
                    <div style={{
                        width: 80, height: 80, backgroundColor: '#1a1a1a', borderRadius: 18,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 'bold', fontSize: 40, fontFamily: 'Playfair Display'
                    }}>Q</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 32, fontWeight: 700, color: '#1a1a1a', fontFamily: 'Inter' }}>Quotsy</div>
                        <div style={{ fontSize: 26, color: '#666', fontFamily: 'Inter', marginTop: 4 }}>Your daily wisdom is ready.</div>
                    </div>
                    <div style={{ fontSize: 18, color: '#999', fontFamily: 'Inter' }}>Now</div>
                </div>

                {/* --- QUOTE CONTENT (Fades in after morph) --- */}
                <div style={{ opacity: quoteOpacity, textAlign: 'center' }}>
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

                    <div style={{ fontFamily, fontStyle: 'italic' }}>
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
            </div>
        </AbsoluteFill>
    );
};
