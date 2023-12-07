

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>pequeña description</p>
      <div>
        Agregar la integración con calendly
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autoComplete="off"/>
        <label htmlFor="lastname">Lastname</label>
        <input id="lastname" type="text" autoComplete="off"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" autoComplete="off"/>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" autoComplete="off"/>
        <label htmlFor="company">Phone number</label>
        <input id="phonenumber" type="text"/>
        <label htmlFor="description">Description</label>
        <textarea id="description" ></textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default ContactUs
