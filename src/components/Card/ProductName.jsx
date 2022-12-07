import styled from 'styled-components'

const TextProductName = styled.strong`
    font-size: 18px;
    line-height: 22px;
    width: 338px;
    margin: 20px 0 10px;
`;

const Ellipsis = styled.strong`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default function ProductName({productName}) {
  return (
    <TextProductName>
      <Ellipsis>{productName}</Ellipsis>
    </TextProductName>
  )
}