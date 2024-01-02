export default function Pagination({
  activePage,
  perPage,
  count,
  setActivePage,
}) {
  const elements = () => {
    const renderedItems = [];
    const totalPages = Math.ceil(count / perPage);
    const tolerance = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i >= activePage - tolerance && i <= activePage + tolerance) {
        renderedItems.push(
          <div
            className={`cursor-pointer rounded-md bg-secondary p-3 hover:bg-opacity-50 ${
              i == activePage && "text-accent"
            }`}
            onClick={() => setActivePage(i)}
          >
            {i}
          </div>,
        );
      } else if (i == 1) {
        renderedItems.push(
          <div
            className="cursor-pointer rounded-md p-3"
            onClick={() => setActivePage(i)}
          >
            <u>{i}</u>
          </div>,
        );
      } else if (i == totalPages) {
        renderedItems.push(
          <div
            className="cursor-pointer rounded-md p-3"
            onClick={() => setActivePage(i)}
          >
            <u>{i}</u>
          </div>,
        );
      }
    }

    return renderedItems;
  };

  return (
    <div className={`mb-5 flex items-center justify-center gap-1 space-x-1`}>
      {elements()}
    </div>
  );
}
