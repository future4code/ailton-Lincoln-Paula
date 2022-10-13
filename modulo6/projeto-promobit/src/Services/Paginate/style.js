import styled from 'styled-components'

export const DivContainer = styled.div`

  .pagination {
    display: flex;
    flex-direction: row;
    color: #5C16C5;
    list-style-type: none;
    padding: 10px;
    font-weight: bold;
    li {
      border-radius: 10px;

      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }

  }
  .break-me {
    cursor: default;
  }

  .active {
    border-color: transparent;
    font-weight: bold;
    color: #5c16c5;
  }

`

export const ImageArrow = styled.img`

`