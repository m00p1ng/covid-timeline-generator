import useAxios from 'axios-hooks'
import { useEffect } from 'react'

import { Patient } from '../interfaces/Patient'
import { TimelineEntry } from '../interfaces/TimelineEntry'

const useLogError = (error) => {
  useEffect(() => {
    if (error) {
      if (Array.isArray(error?.response?.data?.message)) {
        alert(error?.response?.data?.message?.join('\n'))
      } else {
        alert(error?.response?.data?.message)
      }
    }
  }, [error])
}

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

export const useCreatePatient = () => {
  const [{ data, loading, error }, fetch] = useAxios<Patient>({
    url: '/patients',
    method: 'POST',
  }, { manual: true })

  useLogError(error)

  return {
    data,
    loading,
    error,
    fetch,
  }
}

export const useCreateTimelineEntryByPatient = () => {
  const [{ data, loading, error }, fetch] = useAxios<TimelineEntry>({
    url: `/patients/null/timeline-entries`,
    method: 'POST',
  }, { manual: true })

  useLogError(error)

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

  useLogError(error)

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

  useLogError(error)

  return {
    data,
    loading,
    error,
    fetch,
  }
}