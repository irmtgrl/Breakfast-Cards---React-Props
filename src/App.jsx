import Data from "../data.js"
import {Entry} from "./components/Entry.jsx"
import "./App.css"

function App() {
    const eachFood = Data.map(food => {
        return (
            <Entry 
                key = {food.id}
                {...food}
            />
        )
    })
    
    return (<>
        <>
            <header>
                <h1>Breakfast Ideas</h1>
            </header>
            <main>
                {eachFood}
            </main>
        </>
    </>
)}

export default App