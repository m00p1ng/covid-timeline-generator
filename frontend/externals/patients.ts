import useAxios from 'axios-hooks'
import { Patient } from '../interfaces/Patient'

export const useGetAllPatient = () => {
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
