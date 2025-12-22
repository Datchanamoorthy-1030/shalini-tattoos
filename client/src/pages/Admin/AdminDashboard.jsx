import { useEffect, useState } from "react";
import {
  getAppointments,
  updateAppointmentStatus,
} from "../../services/appointmentService";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const result = await getAppointments();
    if (result.success) {
      setAppointments(result.data);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusChange = async (id, status) => {
    const result = await updateAppointmentStatus(id, status);
    if (result.success) {
      fetchAppointments();
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Style</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id}>
                <td>{appt.name}</td>
                <td>{appt.email}</td>
                <td>{appt.phone}</td>
                <td>{appt.style}</td>
                <td>{new Date(appt.preferredDate).toLocaleDateString()}</td>
                <td>{appt.status}</td>
                <td>
                  <button
                    onClick={() =>
                      handleStatusChange(appt._id, "approved")
                    }
                    style={{
                      marginRight: "8px",
                      padding: "6px 10px",
                      backgroundColor: "green",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      handleStatusChange(appt._id, "rejected")
                    }
                    style={{
                      padding: "6px 10px",
                      backgroundColor: "red",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
