import { useState } from "react";
import { sendMessage } from "../services/messagesService";
import "./Messages.jsx";
/*
function Messages() {

    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage(form);
        alert("✅ Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
    };

    return (

        <div className="contact-page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Messages;
*/


function Message() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendMessage(formData);
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message. Please try again.");
        }
    };

    return (
        <section className="message">
            <h2>Send Me a Message</h2>
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="btn-primary">Send</button>
            </form>
            {status && <p className="status">{status}</p>}
        </section>
    );
}

export default Message;