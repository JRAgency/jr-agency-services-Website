// Schickt ein Formular an /api/submit-anfrage. Gibt true nur zurück, wenn die
// E-Mail wirklich raus ist, damit kein Formular "Danke" zeigt, ohne dass die
// Anfrage angekommen ist.
export async function sendAnfrage(data: Record<string, unknown>): Promise<boolean> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch("/api/submit-anfrage", {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch (err) {
    console.error("Anfrage konnte nicht gesendet werden:", err);
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
