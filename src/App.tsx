import {Heading} from "./components/Heading.tsx";

import './styles/theme.css'
import './styles/global.css'
import {TimerIcon} from "lucide-react";

export function App() {
    return (
        <>
            <Heading>
                Olá pessoas!
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Bilionário se aproxima de um marco inédito ao atingir patrimônio estimado em US$ 800 bilhões,
                impulsionado pela valorização de seus negócios em tecnologia, especialmente em inteligência
                artificial.
            </p>
        </>
    );
}