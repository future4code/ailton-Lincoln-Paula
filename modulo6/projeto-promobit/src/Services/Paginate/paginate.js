import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate'
import {DivContainer, ImageArrow} from './style'
import { MoviesContext } from "./../../Global/GlobalState"
import Arrow from './../../Assets/images/Arrow-left.png'

export default function Paginate() {
  const {
    setPage
  } = useContext(MoviesContext)
  return (

<DivContainer>
            <ReactPaginate
              nextLabel={<ImageArrow src={Arrow}></ImageArrow>}
              breakLabel= "..."
              breakClassName="break-me"
              pageCount={18}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={pagination => {
              setPage(pagination.selected + 1)}}
              containerClassName="pagination"
              activeClassName="active"
            />
</DivContainer>
  )
}