import './styles/theme.css'
import './styles/global.css'
import {Index} from "./components/Heading";
import {Container} from "./components/Container";

export function App() {
    return <>
        <Container>
            <Index>Logo</Index>
        </Container>
        <Container>
            <Index>Menu</Index>
        </Container>
    </>;
}