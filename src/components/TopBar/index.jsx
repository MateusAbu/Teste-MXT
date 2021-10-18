import React from "react";

import "./styles.css";

const TopBar = () => {
  return (
    <div className='titleBar'>
    <table>
      <tbody>
        <tr>
          <td>
            <img alt="app icon" width="50" src="mdb.svg" />
          </td>
          <td width="10" />
          <td>
            <h1 className="text-gradient">Searcher</h1>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default TopBar;