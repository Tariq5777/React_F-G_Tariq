import { useEffect, useState } from "react";
import { Container, Table as BootstrapTable } from "react-bootstrap";

const Table = () => {
    const [data, setData] = useState(localStorage);

    useEffect(() => {
        setData(localStorage);
    }, [localStorage]);

    // console.log(Object.values(JSON.parse(data.getItem("feedback1"))));

    const col = Object.keys(JSON.parse(data.getItem("feedback1")));
    let keyLength = Object.keys(localStorage).length;
    let rows = [];
    while (keyLength > 0) {
        let temp;
        temp = Object.values(JSON.parse(data.getItem(`feedback${keyLength}`)));
        // console.log(typeof(Object.values(JSON.parse(data.getItem(`feedback${keyLength}`)))));
        // console.log(data.getItem(`feedback${keyLength}`));
        // console.log(typeof(data.getItem(`feedback${keyLength}`)));
        rows.push(temp);
        keyLength--;

        // rows = {rows};
        console.log(rows);
    }
    return (
        <div>
            <BootstrapTable striped bordered hover id="tableData">
                <thead>
                    <tr>
                        {col.map((value, key) => (
                            <th id={key}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((value, key) => (
                        <tr id={key}>
                            {Object.values(value).map((values, keys) => (
                                <td id={key}>{values}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </BootstrapTable>
        </div>
    );
};

export default Table;
