import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from 'utils/hooks/store';

export const useRerouteIfFreshShallowRender = () => {
    const router = useRouter();
    const owner = useAppSelector((state) => state.issues.owner);
    useEffect(() => {
        if (!owner) router.push('/');
    }, [owner]);
};
