import React from 'react';
import Link from 'next/link';

import { styled } from 'theme';

const Container = styled.header`
    grid-column: grid-start / grid-end;
    display: flex;
    justify-content: start;
    padding: 5.5rem 18.75rem;
`;

const YoursLogo = styled.img`
    cursor: pointer;
    width: 14rem;
    height: 10.5rem;
`;

const Header = () => {
    return (
        <Container>
            <Link href='/' passHref>
                <YoursLogo src='/yours-logo.png' />
            </Link>
        </Container>
    );
};

export default Header;
