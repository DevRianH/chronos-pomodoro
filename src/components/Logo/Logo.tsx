import logo from './Logo.module.css';
import {TimerIcon} from "lucide-react";

export function Logo() {
    return <div className={logo.logo}>
        <a className={logo.logoLink} href="#">
            <TimerIcon/>
            <span>Chronos</span>
        </a>
    </div>
}