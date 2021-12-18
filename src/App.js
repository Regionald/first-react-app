import Todo from './componets/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn react' status='in progress'/>
      <Todo text='Master react' status='pending'/>
      <Todo text='Explore the full React course' status='pending'/>
    </div>
  );
}

export default App;
