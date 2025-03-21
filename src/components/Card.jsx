export default function Card({ title, description }) {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }