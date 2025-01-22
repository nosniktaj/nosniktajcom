import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from 'react';
import './app.css'


function Construciton() {
    const [showSecondText, setShowSecondText] = useState(false);

    const [text] = useTypewriter({
        words: ["Nosniktaj Dev."],
        loop: 1,
        onLoopDone: () => {
            // Add a delay before showing the second text
            setTimeout(() => {
                setShowSecondText(true);
            }, 1000); // 1000ms delay (1 second)
        },
    });


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                color: "#049d5c",
                fontFamily: "Courier New",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
            }}
        >
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {text}
                {!showSecondText && <Cursor />}
            </div>

            {showSecondText && (
                <div
                    style={{
                        fontSize: "18px",
                        marginTop: "10px",
                    }}
                >
                    <SecondTypewriter />
                </div>
            )}
        </div>
    );
}


function SecondTypewriter() {
    const [text] = useTypewriter({
        words: ["This site is currently under construction, please come back later."],
        loop: 1,
    });

    return (
        <>
            {text}
            <Cursor />
        </>
    );
}

export default Construciton;

