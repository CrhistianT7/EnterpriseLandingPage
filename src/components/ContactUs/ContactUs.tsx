

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
        <input id="name" type="text"/>
        <label htmlFor="lastname">Lastname</label>
        <input id="lastname" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <label htmlFor="company">Company</label>
        <input id="company" type="text"/>
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
