import styles from './TabBar.module.css';
import type {ElementType} from "react";

interface TabBarProps {
    icon: ElementType;
}

export function TabBar({icon: Icon}: TabBarProps) {
    return (
        <div>
            <a className={styles.icon} href="#">
                <Icon/>
            </a>
        </div>
    )
}