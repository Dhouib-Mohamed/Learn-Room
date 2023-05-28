import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import gradcap from "../assets/gradcap.png";


function TaskButton() {
    const [showImage, setShowImage] = useState(true);
    const [buttonColor, setButtonColor] = useState("#66B0F0");

    const handleClick = () => {
        setShowImage(!showImage);
        setButtonColor(showImage ? "#66B0F0" : "#FF8076");
    };

    return (
        <div style={{display: "flex", flexDirection: "row",width:'360px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: 'column' }}>
            {showImage && <div><p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                You finished this task?
            </p></div>}
            <div style={{display: "flex", flexDirection: "row" }}>
                <Button colorScheme="custom"
                color="white"
                bgColor={buttonColor} rounded="full" width="250px" size="md" onClick={handleClick} marginTop={!showImage?'70px':'46px'} >
                {showImage ? "Mark as Completed" : "Well done"}
            </Button>
            </div><br />
            <br />
            <br />
            <br />
            <br />
        </div>
        {!showImage && <img src={gradcap} style={{height:'100px'}} alt="Image" />}

        </div>

        // <div>
        //   <h1>{showImage ? "Image Visible" : "Image Hidden"}</h1>
        //   {showImage && <img src="/path/to/your/image.jpg" alt="Image" />}
        //   <button
        //     onClick={handleClick}
        //     style={{ backgroundColor: buttonColor }}
        //   >
        //     {showImage ? "Hide Image" : "Show Image"}
        //   </button>
        // </div>
    );
}

export default TaskButton;
