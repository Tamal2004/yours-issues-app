import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { render, fireEvent, screen, waitFor, act } from 'utils/testUtils';
import Input from './Input';

const validationMessage = 'This field is required';
const validationSchema = Yup.object().shape({
    owner: Yup.string().required('This field is required')
});

describe('<Input />', () => {
    it('should render an input', () => {
        render(
            <Formik initialValues={{ owner: '' }} onSubmit={() => void 0}>
                {() => (
                    <Input
                        id='owner'
                        placeholder='Owner name'
                        label='Owner name'
                        required
                    />
                )}
            </Formik>
        );

        const ownerInput = screen.getByRole('input');

        expect(ownerInput).toBeInTheDocument();
        expect(ownerInput).toMatchInlineSnapshot(`
            <div
              class="sc-bczRLJ brYYoc"
              role="input"
            >
              <label
                class="sc-gsnTZi diFhai"
                for="owner"
              >
                Owner name
                <span
                  class="sc-dkzDqf gyvFhP"
                >
                   *
                </span>
              </label>
              <input
                class="sc-hKMtZM gmreac"
                id="owner"
                placeholder="Owner name"
                value=""
              />
              <img
                class="sc-eCYdqJ jMzffH"
                src="/checkmark.png"
              />
              <span
                class="sc-jSMfEi cAxNmJ"
                role="error"
              >
                &
              </span>
            </div>
        `);
    });

    it('should initialize with initialValues from Formik', () => {
        const initialOwner = 'github';
        render(
            <Formik
                initialValues={{ owner: initialOwner }}
                onSubmit={() => void 0}
            >
                {() => (
                    <Input
                        id='owner'
                        placeholder='Owner name'
                        label='Owner name'
                        required
                    />
                )}
            </Formik>
        );

        const ownerInput = screen.getByRole('textbox');

        expect(ownerInput).toHaveValue(initialOwner);
    });

    it('should show an error or checkmark only after being touched', async () => {
        render(
            <Formik
                initialValues={{ owner: '' }}
                onSubmit={() => void 0}
                validationSchema={validationSchema}
            >
                {() => (
                    <Input
                        id='owner'
                        placeholder='Owner name'
                        label='Owner name'
                        required
                    />
                )}
            </Formik>
        );

        const error = screen.getByRole('error');

        expect(error).toHaveStyle(`opacity: 0;`);

        const checkmark = screen.getByRole('img');

        expect(checkmark).toHaveStyle(`opacity: 0;`);

        const input = screen.getByRole('textbox');

        fireEvent.focus(input);
        fireEvent.blur(input);

        await waitFor(() => {
            expect(error).toHaveStyle(`opacity: 1;`);
            expect(error).toHaveTextContent(validationMessage);
        });

        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: 'github' } });
        fireEvent.blur(input);

        await waitFor(() => {
            expect(checkmark).toHaveStyle(`opacity: 1;`);
        });
    });
});
