import React, { useState } from "react";
import { useAlert } from "react-alert";
const BotãoDelete = () => {
    const alert = useAlert();
    const [action, setAction] = useState("");
    return (
        <div className="w3-container">
            <button className="w3-margin-top w3-padding nes-btn bit-font is-error"
                onClick={() => {
                    alert.show("This is an alert with extra actions!", {
                        title: "Alert with extra actions!",
                        actions: [
                            {
                                copy: "Do something",
                                onClick: () => setAction()
                            }
                        ]
                    });
                }}
            >
            </button>

            <div>{action}</div>

        </div>
    );
};

export default BotãoDelete;
