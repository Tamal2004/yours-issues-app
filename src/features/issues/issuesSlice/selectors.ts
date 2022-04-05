import { RootState } from 'utils/store';

export const selectError = (state: RootState) => state.issues.error;
