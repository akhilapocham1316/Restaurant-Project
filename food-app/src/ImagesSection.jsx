import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

const ImagesSection = () => {

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ImageList
                sx={{
                    width: 800,
                    height: 600,
                }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData?.map((item) => (
                    <ImageListItem key={item?.id} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item?.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ImagesSection

const itemData = [
    {
        id:1,
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        id:2,
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        id:3,
        img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg',
        title: 'Camera',
    },
    {
        id:4,
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        id:5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzms3i5mdH_TtEy9yi_dAN6gvqNa6iXsAJw&s',
        title: 'Hats',
        cols: 2,
    },
    {
        id:6,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlawhzDn7AMx10GK4myXfOl1S_KS7RAMBAkX_GI9uazkjw5syxka685go&s',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        id:7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVliv5W3MmrRlsvMXQH_1LBaKL1Iunw-Bv6DpXvziHQhxJGTHd99udlA&s',
        title: 'Basketball',
    },
    {
        id:8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtzaMSPHmJrwX7QerQ6clrt4HWpiV0Sa5FQVay90PE3G7ST6GD9ft_Oo&s',
        title: 'Fern',
    },
    {
        id:9,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdflDE0IjQtPVp-6OIxwmgCOfQR6uTjWdabg&s',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        id:10,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeDE6DVYPX9wJnOB1PjbQol2IIBP-gZMlNB--4_vT8p_y3JZqwTj4PnY&s',
        title: 'Tomato basil',
    },
    {
        id:11,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiubMYRUyjf1CTtydSNKlHSl2Zwn8CUgCk9g&s',
        title: 'Sea star',
    },
    {
        id:12,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFUQWUr_5SKpmX24mZIWpQAYKj5iCJ9p7fA&s',
        title: 'Bike',
        cols: 2,
    },
    {
        id:13,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUcssa8gKB71t2WmhK3Fgc9sQXRpDPXlaag&s',
        title: 'Hats',
        cols: 2,
    },
    {
        id:14,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RuebhZ-aFnFLoC1FvexTJaZ6n1BXeaP2Bw&s2',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        id:15,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6aGCvdMj04xz7FsZiz-QDGN7AFG8wHYulQ&s',
        title: 'Basketball',
    },
    {
        id:16,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWSpuV-RuFvmdiEFNtXcJsL6Xq-WNSLY11g&s',
        title: 'Fern',
    },
    {
        id:17,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pP6wMwOpgRoU3zDvhpMQTyVkM5zPV0f_Mg&s',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        id:18,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyesQ93AJZnkHKx6iPOeT__MB1w0-LUwXqag&s',
        title: 'Burger',
    },
    {
        id:19,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbdIZXEzq_oSQnNVmmN4sNPAPyJFIcTxUnA&s5',
        title: 'Camera',
    },
    {
        id:20,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_V8z1qZ1DksYEcnFx3uguiPAR6ySyDilGag&s',
        title: 'Coffee',
        cols: 2,
    },

];

// import React, { useEffect, useState } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import { Box } from '@mui/material';
// import axios from 'axios';

// const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

// const ImagesSection = () => {
//   const [data, setData] = useState([]);
//   const search = "food"; // you can change this to "indian-food", "biryani", etc.

//   const imagesListApi = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
//       );
//       setData(response?.data?.photos?.photo);
//       console.log(response?.data?.photos?.photo, "Flickr Image Data");
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };

//   useEffect(() => {
//     imagesListApi();
//   }, []);

//   const getImageUrl = (photo) => {
//     return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         mt: 5,
//         mb: 5,
//       }}
//     >
//       <ImageList
//         sx={{
//           width: 800,
//           height: 600,
//         }}
//         variant="quilted"
//         cols={4}
//         rowHeight={121}
//       >
//         {data.map((item) => (
//           <ImageListItem key={item.id}>
//             <img
//               src={getImageUrl(item)}
//               alt={item.title}
//               loading="lazy"
//               style={{ borderRadius: 6 }}
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// };

// export default ImagesSection;
