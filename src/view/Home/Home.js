import Navbar from "../../components/Navbar/Navbar";
import "./../Home/Home.css";
import Button from "../../components/Button/Button";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-6 h-1 ">
        <h1 className="text-center text-4xl">I AM HOME PAGE</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <h1>Card 1</h1>
          <div className="mt-52">
            <Button text={"Add to Cart"} />
          </div>
        </div>
        <div className="card">
          <h1>Card 2</h1>
          <div className="mt-52">
            <Button text={"Add to Cart"} />
          </div>
        </div>
        <div className="card">
          <h1>Card 3</h1>
          <div className="mt-52">
            <Button text={"Add to Cart"} />
          </div>
        </div>
        <div className="card">
          <h1>Card 4</h1>
          <div className="mt-52">
            <Button text={"Add to Cart"} />
          </div>
        </div>
      </div>
    </>
  );
}
