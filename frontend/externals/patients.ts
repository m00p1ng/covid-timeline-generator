import useAxios from 'axios-hooks'
import { Patient } from '../interfaces/Patient'

export const useGetAllPatients = () => {
  const [{ data, loading, error }, fetch] = useAxios<Patient[]>({
    url: '/patients',
    method: 'GET',
  })

  return {
    data,
    loading,
    error,
    fetch,
  }
}

export const useCreatePatient = () => {
  const [{ data, loading, error }, fetch] = useAxios<Patient>({
    url: '/patients',
    method: 'POST',
  })

  return {
    data,
    loading,
    error,
    fetch,
  }
}