import React, { useEffect,useState } from 'react';
import Loader from '../components/Tools/Loader';
import Footer from '../components/Footer/Footer';
import { Box,Typography,CardMedia } from '@mui/material';
import FilterModal from "../components/Modals/FilterModal"
import Product from '../components/Products/Product';
import { getAllProducts } from '../api/devApi';
import blankHome from "../assets/Images/admin_empty.webp"

const Categories = () => {
    const [productConstant,setProductConstant]=useState([])
    const [products,setProducts]=useState([]);
    const [category,setCategory]=useState("All")

    if (status === 'loading') {
        return <Loader />
    }

    const filterTypeFunction=()=>{
        const resultArr=productConstant?.filter((item)=>{
            if(item?.category===category)
            {
                return true
            }
        })
        setProducts(resultArr)
    }


    const fetchAllProducts=async()=>{
        try{
            const response=await getAllProducts()
            setProducts(response?.data)
            setProductConstant(response?.data)
        }catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(category==='All')
        {
            setProducts(productConstant)
        }
        else
        {
            filterTypeFunction()
        }
    },[category])

    useEffect(()=>{
        fetchAllProducts()
    },[])

    return (
        <>
            <Box textAlign={'center'} my={2}>
                <Typography fontSize={'3rem'}>{"All Products"}</Typography>
                <Typography>{"Search products at your convenience"}</Typography>
            </Box>


            <Box display="flex" justifyContent={'right'} pr='2rem' my={2}>
                <FilterModal category={category} setCategory={setCategory}/>
            </Box>

            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} mb='5rem'>

            {products.length===0&&
            <Box display={'flex'} justifyContent={'center'} flexDirection={'columnn'} alignContent={'center'}>
                    <Box>
                        <CardMedia
                            sx={{ height: 440, width: 440 }}
                            image={blankHome}
                            title="green iguana"
                        />
                        <Typography textAlign={'center'} fontWeight={500} fontSize={'22px'}>{`No ${category} Products Found`}</Typography>
                    </Box>
                </Box>}

                <Box display={'flex'} p={2} gap={12} flexWrap={'wrap'} width={'85%'}>
                    {
                        products?.map((item, index) => {
                            return <Box key={index}>
                            <Product obj={item} />
                            </Box> 
                        })
                    }

                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Categories