const request = window.indexedDB.open('budget', 1);

const saveRecord = (transaction) =>{
      const db = request.result;
      const newTransaction = db.transaction(['budget'], 'readwrite');
      const budgetStore = newTransaction.objectStore('budget');
      console.log(transaction);
      budgetStore.add(transaction)
      
  // //     budgetStore.add({ listID:})
  };


request.onsuccess = event => {
    

    if(navigator.onLine === true){
        const db = request.result;
        const newTransaction = db.transaction(['budget'], 'readwrite');
        const budgetStore = newTransaction.objectStore('budget');
        budgetStore.getAll().onsuccess = (evt)=>{
            console.log('success')
        console.log(evt)
        console.log('hello 2')
        if(evt.target.result.length != 0){
        fetch('/api/transaction/bulk', {
            method: 'POST',
            body: JSON.stringify(evt.target.result),
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(()=>{
            clearData()
            
            location.reload()
        })
        }
      };  
    };
    

};

const clearData = () =>{
    // console.log('Hi')
    const db = request.result;
    const clearStore = db.transaction(['budget'], 'readwrite');
    const budgetStore = clearStore.objectStore('budget');
    const budgetStoreReq = budgetStore.clear();
};

request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("budget", {autoIncrement: true});

};