import { useState, useEffect } from 'react';
import axios from 'axios'
import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import Header from '../Header/Header.jsx'
import './App.css';



function App() {
    let [shoppingList, setShoppingList] = useState([]);
    useEffect(() => {
        getShoppingList()
    }, []
    )

    const getShoppingList = () => {
        axios.get('/api/list')

            .then((response) => {
                setShoppingList(response.data);
            })
            .catch((error) => {
                console.log("error getting shopping list", error);
            })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <AddItemForm getShoppingList={getShoppingList}/>
                <h1>Shopping List</h1>
                <ul>
                    {shoppingList.map((item) => {
                        return (<li key={item.id}> 
                        {item.itemName} {item.itemQuantity} {item.itemUnit};
                        </li>)
                        }
                    )}
                </ul>

            </main>
        </div>
    );
}

export default App;
