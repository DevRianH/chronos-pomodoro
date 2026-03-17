import * as React from "react";
import style from './DefaultButton.module.css'
import type {ReactNode} from "react";

type DefaultButtonProps = {
    icon: ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, color = 'green',...props}: DefaultButtonProps) {
    return (
        <>
            <button className={`${style.button} ${style[color]}`} {...props}>
                {icon}
            </button>
        </>
    )
}