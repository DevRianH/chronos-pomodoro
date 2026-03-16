import './styles/theme.css'
import './styles/global.css'
import {Heading} from "./components/Heading/Heading.tsx";
import {Container} from "./components/Container/Container.tsx";

export function App() {
    return <>
        <Container>
            <Heading>Logo</Heading>
        </Container>
        <Container>
            <Heading>Menu</Heading>
        </Container>
    </>;
}