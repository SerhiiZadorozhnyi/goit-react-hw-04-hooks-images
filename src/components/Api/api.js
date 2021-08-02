import axios from 'axios';
const PIXABAY_KEY = '20826556-19d7dce6dc96816ed1b7dccf7'


export const fetchCountries = async ( imgName ,pageNum ) => {

    const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${imgName}&image_type=photo&page=${pageNum}&per_page=$12&image_type=photo&orientation=horizontal&`);
    return response.data.hits;
}