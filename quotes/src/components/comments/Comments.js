import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getAllComments } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedCommenets } = useHttp(getAllComments);
  const params = useParams();

  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    comments = <div className='centered'><LoadingSpinner /></div>
  }

  if (status === 'completed' && (loadedCommenets && loadedCommenets.length > 0)) {
    comments = <CommentsList comments={loadedCommenets} />
  }

  if (status === 'completed' && (!loadedCommenets || loadedCommenets.length === 0)) {
    comments = <p className="centered">No comments were added yet!</p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
