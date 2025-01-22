import {useTypewriter, Cursor} from "react-simple-typewriter";
import {useState} from 'react';
import './construction.css'


function Construction() {
    const [showSecondText, setShowSecondText] = useState(false);

    return (
        <div id="construction">
            {/*<div className="text-container">*/}
            <TitleTypewriter onDone={() => {
                setShowSecondText(true);
            }}/>
            {showSecondText && <SubtextTypewriter/>}
            {/*</div>*/}
        </div>
    );
}

function TitleTypewriter({onDone}) {
    const [showCursor, setShowCursor] = useState(true);

    const [text] = useTypewriter(
        {
            words: ["Nosniktaj Dev."],
            onLoopDone: () => {
                setTimeout(() => {
                    onDone(true);
                    setShowCursor(false);
                }, 1000);
            }
        }
    )
    return (
        <>

            <div className="title">
                {text}
                {showCursor && <Cursor/>}
            </div>
        </>
    )
}

function SubtextTypewriter() {
    const [text] = useTypewriter({
        words: ["This site is currently under construction, please come back later."],
    });

    return (
        <>
            <div className="subtext">
                {text}
                <Cursor/>
            </div>

        </>
    );
}

export default Construction;

