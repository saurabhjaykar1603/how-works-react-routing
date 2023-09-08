import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
export default function About(){

    return (
        <>
        <Navbar />
            <h1> Hi I AM About Page</h1>
            <div className="mt-5">
                    <Button text={"About Page"}/>
                </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}