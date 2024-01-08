import React from "react";

const Table = ({
  headers,
  rowData,
  rows,
  special,
  selectMode,
  selectListener,
  rowCountstart,
}) => {
  return (
    <table className="w-full table-auto">
      <thead className="sticky top-0 bg-primary">
        <tr>
          <th>Row</th>
          {headers.map((content, index) => (
            <th key={index} className={`${content.cssClass}`}>
              {content.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, indexRow) => (
          <tr
            className="mb-5"
            key={indexRow}
            onClick={() => {
              if (selectMode) {
                selectListener(row, indexRow);
              }
            }}
          >
            <td className="h-[1px]  p-0 pb-1">
              <div className="flex h-full items-center justify-center rounded-s-xl bg-secondary p-1">
                {indexRow + 1 + rowCountstart}
              </div>
            </td>
            {rowData.map((col, indexCol) => {
              const { cssClass, name } = col;
              return (
                <td
                  className={"h-[1px]  p-0 pb-1 " + cssClass}
                  key={indexCol}
                >
                  <div
                    className={`flex h-full grow flex-wrap items-center justify-center bg-secondary  p-1`}
                  >
                    {row[name]}
                  </div>
                </td>
              );
            })}
            {special(row, indexRow)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
