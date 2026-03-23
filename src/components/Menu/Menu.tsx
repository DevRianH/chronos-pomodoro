import styles from "./Menu.module.css";
import {HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon} from "lucide-react";
import {TabBar} from "../TabBar/TabBar.tsx";
import {useState, useEffect} from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark';
    });

    function handleThemeChange() {
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const nextThemeIcon = {
        dark: SunIcon,
        light: MoonIcon,
    }

    return (
        <nav className={styles.menu}>
            <TabBar icon={HouseIcon}
                    ariaLabel={'Tela de Início'}
                    title={'Tela de Início'}/>
            <TabBar icon={HistoryIcon}
                    ariaLabel={'Tela de Histórico'}
                    title={'Tela de Histórico'}/>
            <TabBar icon={SettingsIcon}
                    ariaLabel={'Tela de Configurações'}
                    title={'Tela de Configurações'}/>
            <TabBar icon={nextThemeIcon[theme]}
                    ariaLabel={'Mudar Tema'}
                    title={'Mudar Tema'}
                    onClick={handleThemeChange}/>
        </nav>
    );
}