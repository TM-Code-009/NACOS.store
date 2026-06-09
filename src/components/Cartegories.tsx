interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

const Categories = ({
  selected,
  setSelected,
}: Props) => {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelected(category)
          }
          className={`
          px-5
          py-3
          rounded-full
          transition
          ${
            selected === category
              ? "bg-purple-600"
              : "bg-slate-800"
          }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;