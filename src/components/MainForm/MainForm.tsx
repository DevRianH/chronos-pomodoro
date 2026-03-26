import {DefaultButton} from "../DefaultButton/DefaultButton.tsx";
import {PlayCircleIcon} from "lucide-react";
import {DefaultInput} from "../DefaultInput/DefaultInput.tsx";
import {Cycles} from "../Cycles/Cycles.tsx";

export function MainForm(){
    return (
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
    )
}