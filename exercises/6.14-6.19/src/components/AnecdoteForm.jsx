import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    dispatch(setNotificationWithTimeout(`you created '${content}'`, 5000));
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch(createAnecdote(newAnecdote));
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
