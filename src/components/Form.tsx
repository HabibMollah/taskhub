const Form = () => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" />
      <label htmlFor="due-date">Due Date</label>
      <input type="date" id="due-date" />
    </form>
  );
};

export default Form;
