import React from "react";
import ItemSettingBoard from "./ItemSettingBoard";
import OutputBoard from "./OutputBoard";


const MainBoard = () => {
    return (
        <div className="flex flex-row min-h-96 mx-5 px-5 border-t-8 rounded-xl shadow-lg">
            <ItemSettingBoard></ItemSettingBoard>
            <OutputBoard></OutputBoard>
        </div>
    )
}

export default MainBoard