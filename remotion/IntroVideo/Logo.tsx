import React from 'react';
import { loadFont } from '@remotion/google-fonts/PlayfairDisplay';

const { fontFamily } = loadFont();

export const Logo: React.FC = () => {
    return (
        <>
            <div
                style={{
                    fontSize: 140,
                    fontWeight: 700,
                    fontFamily,
                    color: '#1a1a1a',
                }}
            >
                Quotsy
            </div>
        </>
    );
};
