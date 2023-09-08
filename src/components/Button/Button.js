import "./Button.css"

 export default function Button({text,bgColor})
{
    return  <button className={`bg-blue-500 hover:bg-blue-600 text-white font-serif py-1 px-2 rounded ${bgColor}`}>  {text}</button>
   
}