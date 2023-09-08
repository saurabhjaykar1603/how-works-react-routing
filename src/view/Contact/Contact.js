import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
export default function Contact(){

    return (
        <>
        <Navbar />
            <h1> Hi I AM Contact Page</h1>
                <div className="mt-5">
                    <Button text={"Contact Page"}/>
                </div>
            <div>
            
        <Footer/>
    
            </div>
        </>
    )
}