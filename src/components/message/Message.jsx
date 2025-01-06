const Message = ({ author = 'Unknown author', text }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
};
export default Message;
