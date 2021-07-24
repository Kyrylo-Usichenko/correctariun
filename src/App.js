import Correctarium from "./components/Correctarium/Correctarium";
import {useSelector} from "react-redux";


function App() {

    const textValue = useSelector(({reducer}) => reducer.processedText)
    const totalAmount = useSelector(({reducer}) => reducer.totalAmount)
    const date = useSelector(({reducer}) => reducer.deadLine)

    return (
        <div className="App">
            <Correctarium textValue={textValue} totalAmount={totalAmount} date={date} />
        </div>
    );
}

export default App;
