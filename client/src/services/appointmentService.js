// GET all appointments (Admin)
export const getAppointments = async () => {
  try {
    const response = await fetch("/api/appointments");
    if (!response.ok) throw new Error("Fetch failed");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { success: false, data: [] };
  }
};

// POST new appointment (User)
export const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) throw new Error("Create failed");
    return await response.json();
  } catch (error) {
    console.error("Create error:", error);
    return { success: false };
  }
};
// UPDATE appointment status (Admin)
export const updateAppointmentStatus = async (id, status) => {
  try {
    const response = await fetch(`/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) throw new Error("Update failed");
    return await response.json();
  } catch (error) {
    console.error("Update error:", error);
    return { success: false };
  }
};
