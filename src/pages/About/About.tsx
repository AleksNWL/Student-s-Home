import {Link} from "react-router-dom";


export default function About() {
    return (
        <>
            <h1>О функционале</h1>
            <Link to={"/about/lecturer"}>Для преподавателя</Link>
            <Link to={"/about/student"}>Уведомления студента</Link>
        </>
    )
}