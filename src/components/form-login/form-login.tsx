import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import {
  getEmail,
  getPassword,
  isLoginDataSending,
} from '../../store/login-form/selectors';
import { setEmail, setPassword } from '../../store/login-form/login-form';

function FormLogin(): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(isLoginDataSending);
  const email = useAppSelector(getEmail);
  const password = useAppSelector(getPassword);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(loginAction({email, password}));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          // ref={emailInput}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            dispatch(setEmail(target.value));
          }}
          value={email}
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          disabled={isSending}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
            dispatch(setPassword(target.value));
          }}
          value={password}
          className="login__input form__input"
          type="password"
          name="password"
          pattern={'(?=.*?[0-9])(?=.*?[A-Za-z]).+'}
          placeholder="Password"
          required
          disabled={isSending}
        />
      </div>
      <button disabled={isSending} className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default FormLogin;
