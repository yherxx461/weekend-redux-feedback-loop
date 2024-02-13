import { Button, Link } from '@mui/material';

function Comments() {
  // TODO: Write a function to submit the comment and clear field -- no required
  return (
    <>
      {/* // TODO: Created header tag "Feedback!" ---> no longer needed as it's only from the admin side of things */}
      {/* TODO: progress bar with of current page (ex: 4 of 4 pages) ---> no longer needed as it's only from the admin side of things */}

      {/* TODO: "Any comments you want to leave?" */}
      <form data-testid="input">
        <h2>Any comments you want to leave?</h2>
        <p>Comments</p>
        {/* TODO: <input tag for text> */}
        <input type="text"></input>
        {/* TODO: <'Next Button'> and <check mark indicating done> */}
        <Link to="/review">
          <Button
            variant="outlined"
            size="small"
            type="submit"
            data-testid="next"
          >
            Next
          </Button>
        </Link>
      </form>
    </>
  );
}

export default Comments;
