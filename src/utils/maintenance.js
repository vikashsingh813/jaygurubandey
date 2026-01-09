export function isMaintenanceTime() {
  // 🟢 Always allow site in local development
  if (import.meta.env.DEV) {
    return false;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 🔴 PRODUCTION maintenance window
  const startMinutes = 22 * 60 + 0; // 10:00 PM
  const endMinutes   = 4 * 60 + 59; // 4:59 AM

  // ⏱ Maintenance range crosses midnight
  if (startMinutes > endMinutes) {
    return (
      currentMinutes >= startMinutes ||
      currentMinutes <= endMinutes
    );
  }

  // Normal (same-day) range
  return (
    currentMinutes >= startMinutes &&
    currentMinutes <= endMinutes
  );
}