import React,{useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Home = () => {
  const [arr,setArr]= useState([])
    async function getData(){
        let res = await fetch('https://api.edamam.com/search?q=Pizza&app_id=fbfb4c4a&app_key=d4b005806021ff38a43340a5cfccb827')

        let data = await res.json();
        console.log(data)  
        setArr(data.hits)   
     }

     useEffect(()=>{
      getData()
     },[])
  return (
    <div className='grid grid-cols-12 gap-3'>
      {
        arr.map((item,i)=>{
          return <Card className='col-span-4' sx={{ }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.recipe.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/ViewRecipe' state={item.recipe} size="small">view Recipe</Link>
            
          </CardActions>
        </Card>
        })
      }
    </div>
  )
}

export default Home
