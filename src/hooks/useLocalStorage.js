import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // State is declared here so it can take value of parsedItem
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        // If item in localStorage is null, undefined, etc, it
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      }
      // Second argument of setTimeout (2000 ms = 2 seconds)
    }, 2000); 
       // Second parameter of React.useEffect (IF I USE "[]" I GET A WARNING)
    },
  );
  
  // const localStorageItem = localStorage.getItem(itemName);
  // let parsedItem;

  // // If item in localStorage is null, undefined, etc, it
  // if (!localStorageItem) {
  //   localStorage.setItem(itemName, JSON.stringify(initialValue));
  //   parsedItem = initialValue;
  // } else {
  //   parsedItem = JSON.parse(localStorageItem);
  // }



  // Function responsible update the tasks in State "tasks" and localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return {
    item, 
    saveItem,
    loading,
    error,
  };
}

export default useLocalStorage;

// localStorage.removeItem('TASKS_V1');

// const defaultTasks = [
//   {text: 'Tarea1', completed: false},
//   {text: 'Tarea2', completed: false},
//   {text: 'Tarea3', completed: false},
//   {text: 'Tarea4', completed: false},
//   {text: 'Emparejar', completed: false},
// ];

// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));