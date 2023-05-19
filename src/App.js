import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: index, title: item };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem('');
    setIndex(index + 1);
    setEditItem(false);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleDelete = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
  };

  const handleEdit = (id) => {
    const filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);

    const selectedItem = items.find((item) => item.id === id);
    setItem(selectedItem.title);
    setEditItem(true);
    setIndex(id);
  };

  return (
    <>
      <div className='h-screen mx-auto bg-slate-200'>
        <div className='flex flex-col justify-center items-center gap-y-4'>
          <h3 className='capitalize text-center mt-9 text-xl font-semibold'>todo input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
