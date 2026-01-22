import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const SceneNotifications: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const slideDown = spring({
        frame,
        fps,
        config: { damping: 15 },
    });

    return (
        <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'flex-start', paddingTop: 100 }}>
            <div style={{
                marginBottom: 40,
                textAlign: 'center',
                fontFamily: 'Playfair Display',
                fontSize: 48,
                fontWeight: 700,
                color: '#1a1a1a'
            }}>
                Never Miss a Quote
            </div>

            <div
                style={{
                    width: 500,
                    padding: 20,
                    backgroundColor: 'white',
                    borderRadius: 16,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    transform: `translateY(${interpolate(slideDown, [0, 1], [-100, 0])}px)`,
                    opacity: slideDown,
                }}
            >
                <div style={{
                    width: 48,
                    height: 48,
                    backgroundColor: '#1a1a1a',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'Playfair Display',
                    fontWeight: 'bold'
                }}>
                    Q
                </div>
                <div>
                    <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>Quotsy</div>
                    <div style={{ fontSize: 14, color: '#666', fontFamily: 'Inter, sans-serif' }}>Your daily wisdom is ready</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 12, color: '#999', fontFamily: 'Inter, sans-serif' }}>Now</div>
            </div>
        </AbsoluteFill>
    );
};

function interpolate(value: number, input: number[], output: number[]) {
    // Basic linear interpolation helper since we can't import everything in one line sometimes or prefer simple util
    const rangeInput = input[1] - input[0];
    const rangeOutput = output[1] - output[0];
    const ratio = (value - input[0]) / rangeInput;
    return output[0] + ratio * rangeOutput;
}
