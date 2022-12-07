import styled from 'styled-components'

const ProductImg = styled.img`
    position: relative;
    width: 380px;
    height: 380px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
`;

export default function ProductImage({thumbnailImg, productName}) {
    // console.log(thumbnailImg)
    const url = 'https://test.api.weniv.co.kr/' + thumbnailImg
    return (
        <ProductImg src={url} alt={productName}/>
    )
}