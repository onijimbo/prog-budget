const request = window.indexedDB.open('budget', 1);

const saveRecord = (transaction) =>{
    // const db = request.result;
    // const transaction = db.transaction(['budget'], 'readwrite');
    // const budgetStore = transaction.objectStore('budget');
    console.log(transaction);
    // budgetStore.add({ listID:})
};

request.onsuccess = event => {
    if(Navigator.online = true){
        fetch('/api/transaction/bulk', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
    };
};

request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("budget");

};