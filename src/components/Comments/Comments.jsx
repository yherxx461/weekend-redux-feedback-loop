import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
  // TODO: Write a function to submit the comment and clear field -- no required
  const [commentsResponse, setCommentsResponse] = useState('');
  const dispatch = useDispatch();

  function C_handleClickNext(event) {
    console.log('Comment Response', { commentsResponse });
    dispatch({ type: 'SET_COMMENTS_RESPONSE', payload: commentsResponse });
  }
  return (
    <>
      {/* // TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: progress bar with of current page (ex: 4 of 4 pages) ---> no longer needed as it's only from the admin side of things */}

      {/* TODO: "Any comments you want to leave?" */}
      <div data-testid="input">
        <h2>Do you have any comments or concerns?</h2>
        <p>Comments</p>
        {/* TODO: <input tag for text> */}
        <input
          type="text"
          value={commentsResponse}
          onChange={(event) => setCommentsResponse(event.target.value)}
        ></input>
        {/* TODO: <'Next Button'> and <check mark indicating done> */}
        <Link to="/review">
          <Button
            data-testid="next"
            variant="outlined"
            size="small"
            type="submit"
            onCanPlay={C_handleClickNext}
          >
            Next
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Comments;
