import { ChangeEvent } from 'react';

type TChangeEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

// It's a helper to use controlled components with fields like input and textarea
export default function handleChangeSetFieldValue(e: TChangeEvent, setValue: Function) {
  setValue(e.target.value);
}
