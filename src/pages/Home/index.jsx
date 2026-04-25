import { Fragment } from "react"
import { Navbar } from "../../component/Navbar"
import { SideBar } from "../../sidebar"
export const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <SideBar/>
            </main>

        </Fragment>
    )
}