const Message = ({ author = 'Unknown author', text = 'https://asdfdsfa.com' }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
};
export default Message;
