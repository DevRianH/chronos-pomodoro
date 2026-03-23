import styles from "./Menu.module.css";
import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";
import {TabBar} from "../TabBar/TabBar.tsx";
import {useState, useEffect} from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange() {
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado')
        }
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <TabBar icon={HouseIcon}
                    ariaLabel={'Tela de Início'}
                    title={'Tela de Início'}/>
            <TabBar icon={HistoryIcon}
                    ariaLabel={'Tela de Histórico'}
                    title={'Tela de Histórico'}/>
            <TabBar icon={SettingsIcon}
                    ariaLabel={'Tela de Configurações'}
                    title={'Tela de Configurações'}/>
            <TabBar icon={SunIcon}
                    ariaLabel={'Mudar Tema'}
                    title={'Mudar Tema'}
                    onClick={handleThemeChange}/>
        </nav>
    );
}