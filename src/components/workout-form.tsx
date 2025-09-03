import { useState } from "react";
import type { Intensity } from "../types/intensity";
import type { Workout } from "../types/workout";

interface WorkoutFormProps {
  onAdd: (workout: Workout) => void;
}

export function WorkoutForm({ onAdd }: WorkoutFormProps) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState<Intensity>(1);
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const workout: Workout = {
      id: crypto.randomUUID(),
      title,
      duration,
      intensity,
      date,
    };

    onAdd(workout);

    setTitle("");
    setDuration(0);
    setIntensity(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5 mb-5"
    >
      <input
        type="text"
        placeholder="Título do treino"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2"
      />
      <input
        type="number"
        placeholder="Duração (min)"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="border rounded p-2"
      />
      <input
        type="number"
        placeholder="Intensidade (1 a 5)"
        value={intensity}
        min={1}
        max={5}
        onChange={(e) => setIntensity(Number(e.target.value) as Intensity)}
        className="border rounded p-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar Treino
      </button>
    </form>
  );
}
