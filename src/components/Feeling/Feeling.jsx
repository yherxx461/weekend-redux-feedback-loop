import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {
  const [feelingResponse, setFeelingResponse] = useState(0);
  const dispatch = useDispatch();

  const handleFeelingToNext = (event) => {
    dispatch({
      type: 'SET_FEELING_RESPONSE',
      payload: parseInt(feelingResponse),
    });
    // clear fields
    setFeelingResponse('');
  };
  const handleFeelingUpdate = (event) => {
    console.log(feelingResponse);
    setFeelingResponse(event.target.value);
  };
  return (
    <>
      {/* TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: progress bar with of current page (ex: 1 of 4 pages) ---> no longer needed as it's only from the admin side of things*/}
      {/* TODO: "How are you feeling today?" */}
      <main className="feeling">
        <h2>How are you feeling today?</h2>
        <form>
          <p>Feeling?</p>
          <input
            data-testid="input"
            type="number"
            min={0}
            max={5}
            value={feelingResponse}
            onChange={handleFeelingUpdate}
          ></input>
          {/* TODO: <'Next Button'> */}
          <Button
            data-testid="next"
            onClick={handleFeelingToNext}
            variant="outlined"
            size="small"
            type="submit"
          >
            <Link to="/understanding">Next</Link>
          </Button>
        </form>
      </main>
    </>
  );
}

export default Feeling;
