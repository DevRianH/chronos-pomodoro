import styles from "./Menu.module.css";
import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";
import {TabBar} from "../TabBar/TabBar.tsx";

export function Menu() {
    return (
        <nav className={styles.menu}>
            <TabBar icon={HouseIcon}/>
            <TabBar icon={HistoryIcon}/>
            <TabBar icon={SettingsIcon}/>
            <TabBar icon={SunIcon}/>
        </nav>
    );
}