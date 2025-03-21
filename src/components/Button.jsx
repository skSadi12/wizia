export default function Button({ children }) {
    return (
      <button className="bg-primary px-4 py-2 rounded-md text-white">
        {children}
      </button>
    );
  }