import Data from "../data.js"
import {Entry} from "./components/Entry.jsx"

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
            <main>
                {eachFood}
            </main>
        </>
    </>
)}

export default App