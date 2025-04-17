import {Link} from "react-router-dom";
import {Button} from "antd";


export default function Home() {
    return (
        <>
            <h1>Дом для студента!</h1>
            <Button type="primary"><Link to={"about"}>О функционале</Link></Button>
            <Button type="dashed"><Link to={"gallery"}>Галерея</Link></Button>
        </>
    )
}