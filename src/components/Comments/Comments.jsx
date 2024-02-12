import Header from '../Header/Header';

function Comments() {
  // TODO: Write a function to submit the comment and clear field -- no required
  return (
    <>
      {/* // TODO: Created header tag "Feedback!" */}
      <Header />
      {/* <Header /> */}
      {/* TODO: progress bar with of current page (ex: 4 of 4 pages) */}

      {/* TODO: "Any comments you want to leave?" */}
      <h2>Any comments you want to leave?</h2>
      {/* TODO: <input tag for text> */}
      <input type="text"></input>
      {/* TODO: <'Next Button'> and <check mark indicating done> */}
      <button type="submit" data-testid="next">
        Next
      </button>
    </>
  );
}

export default Comments;
