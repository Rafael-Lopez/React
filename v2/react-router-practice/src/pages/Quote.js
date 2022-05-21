import { Fragment } from "react";
import { useParams } from "react-router-dom";

const Quote = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default Quote;
