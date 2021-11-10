import React from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps({params}) {
    let idMovie = params['movie-detail'];

    // const response = await clientAxios.get(`/api/movies/${idMovie}`);
    return {
        props: {
            movie: params
        }
    }
    /* return {
        props: {
            link: response.data
        }
    } */
}

const MovieDetail = ({movie}) => {
    let idMovie = movie['movie-detail'];
    
    return <p>idMovie: {idMovie}</p>
}
 
export default MovieDetail;