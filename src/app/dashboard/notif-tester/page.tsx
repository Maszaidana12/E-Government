"use client";
import { useState } from "react";
import { sendTestNotif } from "@/app/actions/notifikasi";

export default function NotifTester() {
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("");

  async function handleSend() {
    await sendTestNotif(receiver, sender);
    alert("Notif terkirim!");
  }

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <input
        placeholder="Receiver ID (RT)"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        placeholder="Sender ID (Warga)"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Kirim Test Notif
      </button>
    </div>
  );
}
