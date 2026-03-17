import {Container} from "./components/Container/Container.tsx";
import {Logo} from "./components/Logo/Logo.tsx";
import {Menu} from "./components/Menu/Menu.tsx";
import {DefaultInput} from "./components/DefaultInput/DefaultInput.tsx";
import {CountDown} from "./components/CountDown/CountDown.tsx";

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
                        labelText='asdf'
                        placeholder='Digite algo'
                    />
                </div>

                <div className="formRow">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="formRow">
                    <p>Ciclos</p>
                    <p>0 0 0 0 0 0</p>
                </div>

                <div className="formRow">
                    <button>Enviar</button>
                </div>
            </form>
        </Container>
    </>;
}