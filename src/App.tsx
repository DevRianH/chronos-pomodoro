import {Container} from "./components/Container/Container.tsx";
import {Logo} from "./components/Logo/Logo.tsx";
import {Menu} from "./components/Menu/Menu.tsx";
import {DefaultInput} from "./components/DefaultInput/DefaultInput.tsx";
import {CountDown} from "./components/CountDown/CountDown.tsx";
import {Cycles} from "./components/Cycles/Cycles.tsx";
import {DefaultButton} from "./components/DefaultButton/DefaultButton.tsx";
import {PlayCircleIcon} from "lucide-react";
import {Footer} from "./components/Footer/Footer.tsx";

import './styles/theme.css'
import './styles/global.css'

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
                        labelText='Task'
                        placeholder='Digite algo'
                    />
                </div>

                <div className="formRow">
                    <Cycles/>
                </div>

                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon/>}/>
                </div>
            </form>
        </Container>

        <Container>
            <Footer/>
        </Container>
    </>;
}