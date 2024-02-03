'use client'
import { setCookie } from 'cookies-next';


export default function Dashboard() {


    return (
        <div >
            <button onClick={() => {
                setCookie('token', "test", { expires: new Date(new Date().getTime() + parseInt("30") * 60000) });
            }}>click</button>
            Dashboard
        </div>

    )
}
