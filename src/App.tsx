import {Container} from "./components/Container/Container.tsx";
import {Logo} from "./components/Logo/Logo.tsx";
import {Menu} from "./components/Menu/Menu.tsx";
import {DefaultInput} from "./components/DefaultInput/DefaultInput.tsx";
import {CountDown} from "./components/CountDown/CountDown.tsx";

import './styles/theme.css'
import './styles/global.css'
import {Cycles} from "./components/Cycles/Cycles.tsx";
import {DefaultButton} from "./components/DefaultButton/DefaultButton.tsx";
import {PlayCircleIcon, StopCircleIcon} from "lucide-react";

export function App() {
    return <>
        <Container>
            <Logo/>
        </Container>

        <Container>
            <Menu/>
        </Container>

        <Container>
            <CountDown/>
        </Container>

        <Container>
            <form className="form" action="">
                <div className="formRow">
                    <DefaultInput
                        id='meuInput'
                        type='text'
                        labelText='asdf'
                        placeholder='Digite algo'
                    />
                </div>

                <div className="formRow">
                    <Cycles/>
                </div>

                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                    <DefaultButton icon={<StopCircleIcon/>} color='red'/>
                </div>
            </form>
        </Container>
    </>;
}