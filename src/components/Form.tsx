const Form = () => {
  return (
    <form className="form-control mx-4 md:mx-16 xl:px-96">
      <label className="label" htmlFor="title">
        Title
      </label>
      <input className="input-bordered input" type="text" id="title" />
      <label className="label" htmlFor="description">
        Description
      </label>
      <input className="input-bordered input" type="text" id="description" />
      <label className="label" htmlFor="due-date">
        Due Date
      </label>
      <input className="input-bordered input" type="date" id="due-date" />
      <button className="btn-outline btn my-8" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
