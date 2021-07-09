import React from 'react';
import { useHistory } from 'react-router-dom';

function PostImg(props) {
    let history = useHistory();

    const handleClick = (id) => {
        history.push(`/saved/${id}`);
    }

    return (
        <div style={{ padding: "5px 5px" }}>
            <img onClick={() => handleClick(props.post._id)}
                alt="post"
                src={props.post.img}
                style={{ objectFit: "cover", height: "150px", width: "150px", cursor: "pointer" }} />
        </div>
    )
}

export default PostImg;
