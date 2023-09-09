import React, { useState, useEffect } from 'react';
import { Button, Center, Heading, Img, Text } from '@chakra-ui/react';

export default function Foodlist() {
    const [food, setFood] = useState([]);

    const fetchData = () => {
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=india&app_id=3991ed71&app_key=%20321c97d868afa8a454789f38d325f318')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.hits);
                setFood(data.hits);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const handleOrder = () => {
        alert("Order placed")
    }

    return (
        <div>
            <Center>
                    <Button onClick={handleLogout}>Logout</Button>
            </Center>


            <Heading mt={"30px"}>Food Recipe</Heading>
            <Center>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "15px", padding: "10px", width: "95%", margin: "auto", marginBottom: "50px" }}>
                    {food.map((ele, index) => {
                        const fatDigest = ele.recipe.digest.find(digestItem => digestItem.tag === "FAT" || digestItem.schemaOrgTag === "fatContent")
                        const protienDigest = ele.recipe.digest.find(digestItem => digestItem.tag === "PROCNT" || digestItem.schemaOrgTag === "proteinContent")
                        
                        return (
                            <div key={index} style={{ backgroundColor: "#8caef5", padding: "20px", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px" }}>
                                <Img src={ele.recipe.image} alt='img' />
                                <Heading fontSize={"20px"} size='lg'>{ele.recipe.label}</Heading>
                                <Text>Count of Protein: {fatDigest.total}</Text>
                                <Text>Fat: {protienDigest.total}</Text>
                                <Button onClick={handleOrder}>Order Now</Button>
                            </div>
                        );
                    })}
                </div>
            </Center>
        </div>
    );
}
