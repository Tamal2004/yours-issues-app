import React from 'react';
import NextLink from 'next/link';

import { styled } from 'theme';

const Container = styled.header`
    grid-column: grid-start / grid-end;
    display: flex;
    justify-content: start;
    padding: 5.5rem 18.75rem;
`;

const Link = styled(NextLink)`
    cursor: pointer;
`;

const YoursLogo = styled.img`
    width: 14rem;
    height: 10.5rem;
`;

const Header = () => {
    return (
        <Container>
            <Link href='/'>
                <YoursLogo src='/yours-logo.png' />
            </Link>
        </Container>
    );
};

export default Header;
