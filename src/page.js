import React, { useEffect, useState } from "react";
import Table from "./table";
import fetchTableData from "./table";



export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/data");
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, []);

    const sortedData = data.sort((a, b) => {
        if (b.Nilai === a.Nilai) {
            return a.Waktu > b.Waktu ? 1 : -1;
        }
        return b.Nilai - a.Nilai;
    });

    const mean = data.reduce((sum, item) => sum + item.Nilai, 0) / data.length;

    const lowest = data.reduce((min, item) => (item.Nilai < min ? item.Nilai : min), data[0].Nilai);

    const highest = data.reduce((max, item) => (item.Nilai > max ? item.Nilai : max), data[0].Nilai);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Waktu</th>
                        <th>Nilai</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.No}</td>
                            <td>{item.Nama}</td>
                            <td>{item.Waktu}</td>
                            <td>{item.Nilai}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>Mean: {mean}</p>
            <p>Lowest: {lowest}</p>
            <p>Highest: {highest}</p>
            <p>dapat dilihat bahwa no yang teracak adalah posisi awal dari pada
                posisi yang diurutkan berdasarkan nilai dan waktu dengan memprioritaskan
                nilai terlebih dahulu, kemudian waktu. Jadi, nilai yang sama akan diurutkan
                berdasarkan waktu terbaru. Jika nilai dan waktu sama, maka posisi akan tetap
                sama dengan posisi awal.
            </p>
        </div>



    );
};