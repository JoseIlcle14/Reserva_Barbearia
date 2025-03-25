import { useState } from "react"
function Titulo(){
    const [texto,setTexto] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque quisquam iure magni explicabo animi accusamus dolor eaque amet fugiat in nostrum ad, doloremque voluptatem similique vero officiis praesentium qui.")
    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText)
    }
    return (
        <div>
            <h1> Mude o texto   </h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <button onClick={clicou}> Mudar texto </button>

            <p>{texto}</p>
        </div>
    )
}

export default Titulo