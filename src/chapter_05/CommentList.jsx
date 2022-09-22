import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "토토로",
        comment: "이웃집 토토로",
    },
    {
        name: "하쿠",
        comment: "센과 치히로의 행방불명",
    },
    {
        name: "소피",
        comment: "하울의 움직이는 성",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
               return (
                   <Comment name={comment.name} comment={comment.comment} />
               );
            })}
        </div>
    );
}

export default CommentList;