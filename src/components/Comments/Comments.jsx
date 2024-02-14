import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
  // TODO: Write a function to submit the comment and clear field -- no required
  const [commentsResponse, setCommentsResponse] = useState('');
  const dispatch = useDispatch();

  const handleCommentsToNext = (event) => {
    console.log('Comment Response', { commentsResponse });
    dispatch({ type: 'SET_COMMENTS_RESPONSE', payload: commentsResponse });
    // clear fields
    setCommentsResponse('');
  };
  const handleCommentsUpdate = (event) => {
    console.log(commentsResponse);
    setCommentsResponse(event.target.value);
  };
  return (
    <>
      {/* // TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: progress bar with of current page (ex: 4 of 4 pages) ---> no longer needed as it's only from the admin side of things */}

      {/* TODO: "Any comments you want to leave?" */}
      <main>
        <h2>Do you have any comments or concerns?</h2>
        <form>
          <p>Comments</p>
          {/* TODO: <input tag for text> */}
          <input
            data-testid="input"
            type="text"
            onChange={handleCommentsUpdate}
          ></input>
          {/* TODO: <'Next Button'> and <check mark indicating done> */}
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            value={commentsResponse}
            onClick={handleCommentsToNext}
          >
            <Link to="/review">Next</Link>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Comments;
