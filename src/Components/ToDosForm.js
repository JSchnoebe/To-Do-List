function ToDosForm(props) {
  const { onSave } = props;

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const { name } = form.elements;

    const formData = {
      name: name.value,
    };

    onSave(formData);

    e.target.reset();
    e.target.elements.name.focus();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A To Do!</h2>
      <p>To Do Item</p>
      <input type="text" name="name" placeholder="Item Details" />
      <p>Assigned To</p>
      <input type="text" name="assignee" placeholder="Assignee Name" />
      <p>Difficulty</p>
      <input type="range" class="form-control-range" id="formControlRange" />
      <button type="submit">Save</button>
    </form>
  )
}

export default ToDosForm;
