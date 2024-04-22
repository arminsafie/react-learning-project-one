// eslint-disable-next-line react/prop-types
export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
