import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import './Understanding.css';

function Understanding() {
  const [understandingResponse, setUnderstandingResponse] = useState(0);
  const dispatch = useDispatch();

  function handleUnderstandingToNext() {
    console.log('Understanding response', { understandingResponse });
    dispatch({
      type: 'SET_UNDERSTANDING_RESPONSE',
      payload: parseInt(understandingResponse),
    });
    //clear fields
    setUnderstandingResponse('');
  }
  const handleUnderstandingUpdate = (event) => {
    console.log(understandingResponse);
    setUnderstandingResponse(event.target.value);
  };
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: progress bar with of current page (ex: 2 of 4 pages) ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: "How well are you understanding the content?" */}
      <main className="understanding">
        <h2>How well are you understanding the content?</h2>
        <form>
          <p>Understanding?</p>
          <input
            data-testid="input"
            type="number"
            min={0}
            max={5}
            value={understandingResponse}
            onChange={handleUnderstandingUpdate}
          ></input>
          {/* TODO: <'Next Button'> */}
          <Button
            data-testid="next"
            onClick={handleUnderstandingToNext}
            variant="outlined"
            size="small"
          >
            <Link to="/support">Next</Link>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Understanding;
