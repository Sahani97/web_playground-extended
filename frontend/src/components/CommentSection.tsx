import React, { useState } from 'react';

interface Comment {
  name: string;
  content: string;
}

function CommentsSection(): React.JSX.Element {
  const [comments, setComments] = useState<Comment[]>([
    {
      name: 'Bob Fossil',
      content: 'Oh I am so glad you taught me all about the big brown angry guys in the woods...',
    },
  ]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState<Comment>({ name: '', content: '' });

  // Toggle visibility of comments
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      setComments([...comments, newComment]);
      setNewComment({ name: '', content: '' }); // Reset form
    }
  };

  return (
<section className="comments" aria-labelledby="comments-heading">
  <h2 className="sr-only" id="comments-heading">Comments</h2>
  <button
    className="show-hide"
    aria-expanded={showComments}
    aria-controls="comment-wrapper"
    onClick={toggleComments}
  >
    {showComments ? 'Hide comments' : 'Show comments'}
  </button>
  {showComments && (
    <div className="comment-wrapper" id="comment-wrapper">
      <h2>Add comment</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="flex-pair">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>
        <div className="flex-pair">
          <label htmlFor="comment">Your comment:</label>
          <input
            type="text"
            id="comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            placeholder="Enter your comment"
          />
        </div>
        <div>
          <input type="submit" value="Submit comment" />
        </div>
      </form>
      <h2>Comments</h2>
      <ul className="comment-container">
        {comments.map((comment, index) => (
          <li key={index}>
            <p><strong>{comment.name}</strong></p>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )}
</section>

  );
}

export default CommentsSection;