import React from 'react';
import { styled } from 'theme';

const SpinningLoader = styled.div`
    width: 4rem;
    height: 4rem;

    background: url('/loader.png');
    background-size: contain;
    animation: spin-animation 1.2s infinite;
    animation-timing-function: linear;

    @keyframes spin-animation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default SpinningLoader;
