import '@testing-library/jest-dom/extend-expect';
import { server } from './src/utils/testUtils/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
