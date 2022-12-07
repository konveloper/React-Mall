import { useRef } from 'react'
import styled from 'styled-components'
import heartOn from '../../assets/images/icon-heart-on.svg'
import heartOff from '../../assets/images/icon-heart.svg'

const LikeButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 40px;
    width: 22px;
    height: 22px;
    border: none;
    background: url(${heartOff}) no-repeat center / contain;

    &.on {
        background: url(${heartOn}) no-repeat center / contain;
    }
    `;

    const ProductLikeButton = () => {
        const likeBtn = useRef()

        function handleLikeBtn(e){
            console.log(e)
            console.log(e.currentTarget.classList)
            e.currentTarget.classList.toggle('on')
        }
        
        return (
            <LikeButton ref={likeBtn} onClick={handleLikeBtn}></LikeButton>
        )
    }

    export default ProductLikeButton