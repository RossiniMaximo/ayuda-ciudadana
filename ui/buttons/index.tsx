import { useEffect, useRef } from "react";
import styles from "./anim.module.css";
import { LoginAnim, CallToAction, Login, Register, Form, Logout } from "./styled";

interface buttonProps {
  onClick?: any;
  children: any;
  anim?: boolean;
}

export function CalltoActionButton({ children }: buttonProps) {
  return <CallToAction>{children}</CallToAction>;
}

export function LoginButton({ children }: buttonProps) {
  return <Login>{children}</Login>;
}

export function RegisterButton({ children }: buttonProps) {
  return <Register>{children}</Register>;
}

export function LogoutButton({ children }: buttonProps) {
  return <Logout>{children}</Logout>;
}

export function FormButton({ children }: buttonProps) {
  return <Form>{children}</Form>;
}

export function AnimButton({ anim, onClick, children }: buttonProps) {
  const buttonRef = useRef(null as any);

  useEffect(() => {
    const span = buttonRef.current.firstChild as HTMLElement;
    if (anim) {
      buttonRef.current.disabled = true;
      if (!span.textContent) span.textContent = children;
      else span.textContent = "";
      span.classList.toggle(styles.spinner);
      return onClick;
    } else {
      buttonRef.current.disabled = false;
      span.textContent = children;
      span.classList.remove(styles.spinner);
    }
  }, [anim]);

  return (
    <LoginAnim ref={buttonRef} onClick={onClick}>
      <span>{children}</span>
    </LoginAnim>
  );
}
