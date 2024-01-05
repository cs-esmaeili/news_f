import React from "react";

const Table = ({
  headers,
  allowHeaders,
  rows,
  special,
  selectMode,
  selectListener,
  rowCountstart,
}) => {
  return (
    <table className="w-full table-auto">
      <thead>
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
        {rows.map((contentParent, indexParent) => (
          <tr
            className="mb-5"
            key={indexParent}
            onClick={() => {
              if (selectMode) {
                selectListener(contentParent, indexParent);
              }
            }}
          >
            <td className="h-[1px]  p-0 pb-1">
              <div className="flex h-full items-center justify-center rounded-s-xl bg-secondary p-1">
                {indexParent + 1 + rowCountstart}
              </div>
            </td>
            {Object.entries(contentParent).map(([key, value], indexChild) => {
              let containsObject = false;
              let cssClass = null;
              for (let i = 0; i < allowHeaders.length; i++) {
                if (allowHeaders[i].name == key) {
                  containsObject = true;
                  cssClass = allowHeaders[i].cssClass;
                }
              }
              if (containsObject) {
                return (
                  <td
                    className={"h-[1px]  p-0 pb-1 " + cssClass}
                    key={indexChild}
                  >
                    <div
                      className={`flex h-full grow flex-wrap items-center justify-center bg-secondary  p-1`}
                    >
                      {value}
                    </div>
                  </td>
                );
              }
            })}
            {special(contentParent, indexParent)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
