import React from 'react';

import { styled } from 'theme';
import Header from 'organisms/Header';
import ResponsiveGrid from 'organisms/ResponsiveGrid';

interface LayoutProps {
    className?: string; // CSS overrides for background component
}

const Container = styled.div`
    grid-column: content-start / content-end;
`;

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
    return (
        <ResponsiveGrid className={className}>
            <Header />
            <Container>{children}</Container>
        </ResponsiveGrid>
    );
};

export default Layout;
