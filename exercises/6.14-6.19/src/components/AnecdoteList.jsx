import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter || "");

  const filteredAnecdotes = anecdotes
    .filter((anecdote) =>
      (anecdote.content || "")
        .toLowerCase()
        .includes((filter || "").toLowerCase()),
    )
    .sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(
      setNotificationWithTimeout(`you voted '${anecdote.content}'`, 5000),
    );
  };

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
