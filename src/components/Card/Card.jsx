import styled from 'styled-components'
import ProductImage from './ProductImage'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductLikeButton from './ProductLikeButton'

const ProductItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export default function Card({productName, price, thumbnailImg}) {
    //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
    // // console.log(thumbnailImg)

    return (
        <ProductItem>
            <ProductImage {...{thumbnailImg, productName}}/>
            <ProductName {...{productName}}/>
            <ProductLikeButton />
            <ProductPrice {...{price}}/>
        </ProductItem>
    )
}