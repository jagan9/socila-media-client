import React from 'react';
import { format } from 'timeago.js';

function Message(props) {

    let myMsg = !props.myMsg ? "flex-start" : "flex-end";

    return (
        <div data-aos="fade-up" style={{ marginBottom: "15px", display: "flex", flexDirection: "column", alignItems: myMsg }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                {
                    props.myMsg && <p style={{ backgroundColor: "grey", color: "#fff", minWidth: "50px", maxWidth: "280px", padding: "7px 12px", borderRadius: "10px" }}>{props.data.text}</p>

                }
                <img
                    style={{ borderRadius: "50%", margin: "0px 5px", objectFit: "cover" }}
                    width="40px"
                    height="40px"
                    src={props?.img} alt="" />
                {
                    !props.myMsg && <p style={{ backgroundColor: "aqua", color: "#000", minWidth: "50px", maxWidth: "280px", padding: "7px 12px", borderRadius: "10px" }}>{props.data.text}</p>

                }
            </div>
            <div>
                <small style={{ opacity: "0.8", }}>{format(props.data.createdAt)}</small>
            </div>
        </div>
    )
}

export default Message
