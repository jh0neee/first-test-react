import React from "react";

// student 배열에  학생이름 객체를 받음
const student = [
    {
        id: 1, // id(고유한 값) 추가
        name: "Jaein",
    },
    {
        id: 2,
        name: "Judy",
    },
    {
        id: 3,
        name: "Bob",
    },
    {
        id: 4,
        name: "Vread",
    },
];

function AttendanceBook(props) {
    return( // 이름을 목록형태로 출력 
        <ul>  { /*배열을 rendering하기 위해 map 함수 사용. */ }
            {student.map(stud => {
                {/** id를 key 값으로 추가 */}
                return <li key={stud.id}>{stud.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;