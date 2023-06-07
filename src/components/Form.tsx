const Form = () => {
  return (
    <form className="form-control">
      <label className="label" htmlFor="title">
        Title
      </label>
      <input className="input input-bordered" type="text" id="title" />
      <label className="label" htmlFor="description">
        Description
      </label>
      <input className="input input-bordered" type="text" id="description" />
      <label className="label" htmlFor="due-date">
        Due Date
      </label>
      <input className="input input-bordered" type="date" id="due-date" />
      <button className="btn btn-outline my-8" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Form;
