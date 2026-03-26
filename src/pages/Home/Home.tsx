import {MainTemplate} from "../../templates/MainTemplate/MainTemplate.tsx";
import {Container} from "../../components/Container/Container.tsx";
import {CountDown} from "../../components/CountDown/CountDown.tsx";
import {MainForm} from "../../components/MainForm/MainForm.tsx";

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <CountDown/>
            </Container>

            <Container>
                <MainForm/>
            </Container>
        </MainTemplate>
    )

}

