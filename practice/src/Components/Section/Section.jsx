

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import { BookCard } from "../BookCard/BookCard";

import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons"; //

import styled from "styled-components";


export const Section = () => {


    const Main = styled.div`
    
  `;


    const { section } = useParams()

    const [db, setdb] = useState([])




    useEffect(() => {
        axios.get(`http://localhost:8080/books`).then((res) => {

            console.log(res.data, "data")
            setdb(res.data)

        })
    }, [])







    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                {
                    <h2>Section</h2>
                }
            </h2>

            <SortAndFilterButtons handleSort={" handleSortLH "} />


            <Main className="sectionContainer">

                {db.filter((el) => {

                    if (el.section === section) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }).map((el, i) => {
                    return <div key={i}> <BookCard id={el.id} img={el.img} title={el.title} price={el.price} /></div>
                })
                }
            </Main>
        </>
    );
};