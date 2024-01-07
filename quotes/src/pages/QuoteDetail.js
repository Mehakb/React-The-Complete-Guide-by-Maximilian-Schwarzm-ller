import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote);
  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);
  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }
  if (error) {
    return <div className="centered">{error}</div>
  }
  if (!loadedQuote) {
    return <p>No Quote Found!</p>
  }
  return (
    <Fragment>
      <h1> Quote Detail Page</h1>
      <HighlightedQuote {...loadedQuote} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className="btn--flat">Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
