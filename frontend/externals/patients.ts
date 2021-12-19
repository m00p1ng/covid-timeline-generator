import useAxios from 'axios-hooks'

import { Patient } from '../interfaces/Patient'
import { TimelineEntry } from '../interfaces/TimelineEntry'

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
  }, { manual: true })

  return {
    data,
    loading,
    error,
    fetch,
  }
}

export const useGetAllTimelineEntriesByPatient = () => {
  const [{ data, loading, error }, fetch] = useAxios<TimelineEntry[]>({
    url: `/patients/null/timeline-entries`,
    method: 'GET',
  }, { manual: true })

  return {
    data,
    loading,
    error,
    fetch,
  }
}

export const useDeleteTimelineEntryByPatient = () => {
  const [{ data, loading, error }, fetch] = useAxios({
    url: `/patients/null/timeline-entries/null`,
    method: 'DELETE',
  }, { manual: true })

  return {
    data,
    loading,
    error,
    fetch,
  }
}

export const useDeletePatient = () => {
  const [{ data, loading, error }, fetch] = useAxios({
    url: `/patients/null`,
    method: 'DELETE',
  }, { manual: true })

  return {
    data,
    loading,
    error,
    fetch,
  }
}