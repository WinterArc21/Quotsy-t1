import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export const GrainOverlay: React.FC = () => {
    const frame = useCurrentFrame();

    // We create a shifting noise pattern by moving the SVG filter seed or translating the pattern
    return (
        <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 9999, opacity: 0.15 }}>
            <svg width="100%" height="100%">
                <filter id="noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                        seed={frame % 100} // Dynamic seeding creates the shimmer
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </AbsoluteFill>
    );
};
