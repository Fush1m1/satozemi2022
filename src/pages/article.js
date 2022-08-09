import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


const Articles = () => {

    const [data,setData] = useState([]) 


    useEffect(() => {
		(
			async () => {
				await axios.get('articles') 
					.then((response) => {
						console.log(response.data)
                        setData([...data,response.data])
                        
					})
			}
		)()
	}, [])
    console.log(data)

    return(
        <>
             This is article page.
            {data.map((item) => {
                return(
                    <>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </>
                    
                )
            })}
            
        </>
    )
}

export default Articles;