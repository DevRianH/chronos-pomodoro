import styles from './TabBar.module.css';
import * as React from "react";
import {type ElementType} from "react";

interface TabBarProps {
    icon: ElementType;
    ariaLabel?: string;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function TabBar({icon: Icon, ariaLabel, title, ...props}: TabBarProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); //não segue o link
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <div>
            <a className={styles.icon}
               href="#"
               aria-label={ariaLabel}
               title={title}
               onClick={handleClick}
            >
                <Icon/>
            </a>
        </div>
    )
}