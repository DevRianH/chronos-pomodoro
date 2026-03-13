import {Heading} from "./components/Heading.tsx";

import './styles/theme.css'
import './styles/global.css'

export function App() {
    console.log('Hello App');

    return (
        <>
            <Heading/>
            <p>Bilionário se aproxima de um marco inédito ao atingir patrimônio estimado em US$ 800 bilhões,
                impulsionado pela valorização de seus negócios em tecnologia, especialmente em inteligência
                artificial.
            </p>
        </>
    );
}