import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/accept-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location, email: "mail@praveent.com" }),
    });

    if (!res.ok) {
      alert("Failed to generate image");
      setLoading(false);
      return;
    } else {
      alert(
        "Image generation request accepted. Check your email for the generated images, it might take a few minutes to receive.",
      );
    }

    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <input
          className="border p-2 rounded mr-2"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-google-blue text-google-gs-white px-4 py-2 rounded"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
    </main>
  );
}
