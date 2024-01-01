import React from "react";

const Table = ({
  headers,
  allowHeaders,
  rows,
  special,
  selectMode,
  selectListener,
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
                {indexParent + 1}
              </div>
            </td>
            {Object.entries(contentParent).map(([key, value], indexChild) => {
              //   const containsObject = allowHeaders.some((item) => item.name == key);

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
                      className={`flex h-full grow flex-wrap items-center justify-center
                       ${indexChild == 0 && "rounded-s-xl"} 
                       ${
                         indexChild ==
                           Object.entries(contentParent).length - 1 && ""
                         //  "rounded-e-xl"
                       } 
                       bg-secondary  p-1`}
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
