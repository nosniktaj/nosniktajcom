import {useEffect, useRef, useState} from "react";
import './BinarySpotlight.css';

function BinarySpotlight() {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    // Track mouse position
    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        setMousePos({x: clientX, y: clientY});
        console.log('Mouse position:', e.clientX, e.clientY);
    };


    // Resize canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const dropSize = 6;  // Adjust size of drops (smaller = denser rain)
        const columns = Math.floor(canvas.width / dropSize);
        const maxDropsPerColumn = 5; // Ensures each column has 5 drops

        // Create multiple drops per column
        const drops = new Array(columns).fill(null).map(() => ({
            positions: Array.from({ length: maxDropsPerColumn }, (_, index) =>
                (canvas.height / maxDropsPerColumn) * index // Even spacing
            ),
            speed: Math.random() * 3 + 2, // Random speed between 2 and 5
            values: Array.from({ length: maxDropsPerColumn }, () => (Math.random() > 0.5 ? "1" : "0")) // Fixed digits
        }));

        // Drawing function for binary rain effect
        const draw = () => {
            ctx.fillStyle = "rgba(20,20,44)"; // Background fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#a855f7";
            ctx.font = "16px monospace";

            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < drops[i].positions.length; j++) {
                    const text = drops[i].values[j]; // Use fixed digit
                    const x = i * dropSize;
                    const y = drops[i].positions[j];

                    ctx.fillText(text, x, y);

                    // Move drop down
                    drops[i].positions[j] += drops[i].speed;

                    // Reset drop when it goes off-screen
                    if (drops[i].positions[j] > canvas.height) {
                        drops[i].positions[j] = -20; // Restart above screen
                        drops[i].values[j] = Math.random() > 0.5 ? "1" : "0"; // Assign a new digit
                    }
                }
            }

            requestAnimationFrame(draw);
        };
        draw(); // Start the animation loop

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    // Handle hover effect (to create the "hole")

    return (
        <>

            <div className="binary-canvas" onMouseMove={handleMouseMove}>
                <canvas ref={canvasRef} className="binary-canvas" style={{
                    clipPath: `circle(50px at ${mousePos.x}px ${mousePos.y}px)`, // Create the hole

                }}></canvas>

            </div>

        </>
    );
}

export default BinarySpotlight;
