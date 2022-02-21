import React from "react";
import { Link } from "react-router-dom";

import { Fab, Action } from "react-tiny-fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faVideo } from "@fortawesome/free-solid-svg-icons";

import 'react-tiny-fab/dist/styles.css';

const position = {
    bottom: "1rem",
    left: "1rem"
}

const FloatButton = () => (
    <div>
        <Fab
            alwaysShowTitle={true}
            style={position}
            icon={<FontAwesomeIcon icon={faCommentDots} />}
            event='hover'
            mainButtonStyles={{
                backgroundColor: "#85C1E9"
            }}
        >
        <Link to='/videocall'>
            <Action
                text="Video Call"
                style={{
                    backgroundColor: "#F8C471"
                }}
            >
                <FontAwesomeIcon icon={faVideo} />
            </Action>
        </Link>
        </Fab>
    </div>
);

export default FloatButton;
