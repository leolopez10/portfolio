import React from "react";
import "./style.css"

function Contact(props) {
    return (
        <div>
            <section id="contact-form" className="section-feature">
                <h2 className="contact-h2">Contact Me</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea type="text" className="form-control" id="message" placeholder="Type your message here" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default Contact;