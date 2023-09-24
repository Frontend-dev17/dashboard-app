import "./ActiveMembers.scss";

import { ReactComponent as SearchIcon } from "../../Constants/Svg/SearchIcon.svg"
import CUSTOMER_DATA from './../../../data';
import { useState } from "react";

const ActiveMembers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = CUSTOMER_DATA;
    const tableHeaders = Object.keys(data[0]);

    if (data.length === 0) {
        return <div>No data available.</div>;
    }

    //pagination codes
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="active-members-contianer">
            <div className="first-row-section">
                <div className="search-section">
                    <span><SearchIcon /></span>
                    <input type="search" placeholder="Search" className="input-field" />
                </div>
                <div className="dropdown-section">
                    <span className="title">Sort by : </span>
                    <select className="dropdown-select" defaultValue="Newest">
                        <option className="options">Newest</option>
                        <option className="options">Oldest</option>
                        <option className="options">Past 24hours</option>
                    </select>
                </div>

            </div>
            <div className="title-name">Active Members</div>
            <div className="tabel-data-section">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((row, index) => (
                            <tr key={index}>
                                {tableHeaders.map((header) => (
                                    <td key={header} className={header === 'status' ? row[header].toLowerCase() : ''}>{row[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="downpart-section">

                <div className="entry-count">
                    Showing data 1 to {currentItems.length} of {data.length} entries
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="actions"
                    >
                        &lt;
                    </button>
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={currentPage === pageNumber ? 'active' : 'inactive'}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="actions"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActiveMembers