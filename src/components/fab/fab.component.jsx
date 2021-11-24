import React from "react";
import { Link } from "react-router-dom";

import { Fab, Action } from "react-tiny-fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faComments, faVideo } from "@fortawesome/free-solid-svg-icons";

import 'react-tiny-fab/dist/styles.css';


const FloatButton = () => (
    <div>
        <Fab
            alwaysShowTitle={true}
            icon={<FontAwesomeIcon icon={faCommentDots} />}
            event='hover'
            mainButtonStyles={{
                backgroundColor: "#85C1E9"
            }}
        >
        <Link to='/chat'>
            <Action
                text="Text Chat"
                style={{
                    backgroundColor: "#7DCEA0"
                }}
            >
                <FontAwesomeIcon icon={faComments} />
            </Action>
        </Link>
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
        {/*<Action
        text="Email"
        onClick={handleEmailOnClick}
        />
        <Action
            text="Help"
            onClick={handleHelpOnClick}
            >
            <i className="fa fa-help" />
        </Action> */}
        </Fab>
    </div>
);

export default FloatButton;
