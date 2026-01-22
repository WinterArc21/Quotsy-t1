import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/DancingScript';

const { fontFamily } = loadFont();

export const AuthorSignature: React.FC<{ name: string; color: string; fontSize?: number }> = ({ name, color, fontSize = 28 }) => {
    const frame = useCurrentFrame();

    // Handwriting animation: We use a mask-image that expands width-wise
    // or we can use a more "stroke-like" reveal. 
    // Simplest high-impact way: Reveal from left to right with a subtle "draw" feel

    const reveal = interpolate(frame, [20, 45], [0, 100], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <div
            style={{
                fontFamily,
                fontSize,
                color,
                display: 'inline-block',
                position: 'relative',
                clipPath: `inset(0 ${100 - reveal}% 0 0)`, // Reveals text from left to right
            }}
        >
            — {name}
        </div>
    );
};
