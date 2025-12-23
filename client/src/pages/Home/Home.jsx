import { useState } from "react";
import { createAppointment } from "../../services/appointmentService";
import "./Home.css";



const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    style: "",
    preferredDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await createAppointment(formData);

  if (result.success) {
    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      style: "",
      preferredDate: "",
      message: "",
    });
  } else {
    alert("Failed to book appointment. Try again.");
  }
};

  return (
    <div>
      {/* Hero Section */}
    <section className="hero">
  <div className="hero-inner">
    <h1>Ink That Tells Your Story</h1>
    <p>
      Dark, refined, and relentlessly custom. We craft one-of-a-kind tattoo
      pieces designed around your story and your skin.
    </p>

    <button className="hero-btn">Book an Appointment</button>
  </div>
</section>




      {/* Booking Form */}
      <section className="form-section">

        <h2>Book an Appointment</h2>
<p style={{ color: "#aaa", marginBottom: "20px" }}>
  Fill out the form and we’ll get back to you shortly.
</p>

        <form style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="text"
            name="style"
            placeholder="Tattoo Style"
            value={formData.style}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              width: "100%",
              backgroundColor: "#e50914",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;

