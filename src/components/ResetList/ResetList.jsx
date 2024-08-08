function ResetList({list, getShoppingList}) {

    const updateList = () => {
        axios({
            method: 'PUT',
            url: `/api/list/${list.id}`
        })
        .then((response) => {
            fetchCountries();
        })
        .catch((error) => {
            console.log('Error posting data:', error);
        })
    }


    return (
        <button onClick={updateList}>Reset</button>
    )
}

export default ResetList;