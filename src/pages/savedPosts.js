import React from 'react';
import { Paper } from '@material-ui/core';
import PostImg from '../components/PostImg';

function savedPosts(props) {
    if (props.user.saved === undefined) {
        return (
            <div style={{ margin: "30px auto", maxWidth: "600px" }}>
                <Paper elevation={3} style={{ margin: "10px", padding: "20px 10px" }}>
                    <h2 style={{ marginLeft: "10px" }}>Your saved Posts</h2><br /><br />
                    <div style={{ textAlign: "center", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        Loading....
                    </div>
                </Paper>
            </div>
        )
    }

    if (props.user.saved.length === 0) {
        return (
            <div data-aos="flip-left" style={{ margin: "30px auto", maxWidth: "600px" }}>
                <Paper elevation={3} style={{ margin: "10px", padding: "20px 10px" }}>
                    <h2 style={{ marginLeft: "10px" }}>Your saved Posts</h2><br /><br />
                    <div style={{ textAlign: "center", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                        No saved items
                    </div>
                </Paper>
            </div>
        )
    }
    return (
        <div data-aos="flip-right" style={{ margin: "30px auto", maxWidth: "600px", zIndex: "1" }}>
            <Paper elevation={3} style={{ margin: "10px", padding: "20px 10px", backgroundColor: "rgba(255,255,255,0.3)" }}>
                <h2 style={{ marginLeft: "10px" }}>Your saved Posts</h2>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {props.user.saved.map((post, index) => (
                        <PostImg post={post} key={index} />
                    ))}
                </div>
            </Paper>
        </div>
    )

}

export default savedPosts
