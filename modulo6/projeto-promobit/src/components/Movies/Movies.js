import { format } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
import { BASE_URL_IMAGE } from '../../Constants/url'
import ErrorIcon from '@mui/icons-material/Error';
import {Card, MovieTitle, MovieDate} from './style'

export default function Movie(props) {
  return (
       <Card>
          {props.imagePath ? (
        <img src={`${BASE_URL_IMAGE}original/${
             props.imagePath ? props.imagePath : ''}`}

             alt={props.title}
        />
      ) : (
        <ErrorIcon/>
      )}
      <MovieTitle>{props.title ? props.title : ''}</MovieTitle>
      <MovieDate>
        {props.dateRelease
          ? format(new Date(props.dateRelease), 'dd MMM yyyy', { locale: ptBR })
          : 
          ''}
      </MovieDate>
    </Card>
  )
}
