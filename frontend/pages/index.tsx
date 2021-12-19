import { useState, useEffect } from 'react'

import Layout from '../components/Layout';
import PatientInfoForm from '../components/PatientInfoForm';
import PatientTabs from '../components/PatientTabs';
import Timeline from '../components/Timeline';

import {
  useGetAllPatients,
  useCreatePatient,
  useDeletePatient,
  useGetAllTimelineEntriesByPatient,
  useCreateTimelineEntryByPatient,
  useDeleteTimelineEntryByPatient,
} from '../externals/patients'

const useTabs = () => {
  const [selected, setSelected] = useState<string | number>();

  const setSelectedTab = (tab: string | number): void => {
    setSelected(tab);
  }

  return {
    selectedTab: selected,
    setSelectedTab,
  }
}

const IndexPage = () => {
  const { selectedTab, setSelectedTab } = useTabs()

  const getAllPatients = useGetAllPatients();
  const createPatient = useCreatePatient();
  const deletePatient = useDeletePatient()

  const getAllTimelineEntriesByPatient = useGetAllTimelineEntriesByPatient();
  const createTimelineEntryByPatient = useCreateTimelineEntryByPatient();
  const deleteTimelineEntryByPatient = useDeleteTimelineEntryByPatient();

  useEffect(() => {
    if (!!selectedTab && selectedTab !== 'Add') {
      getAllTimelineEntriesByPatient.fetch({
        url: `/patients/${selectedTab}/timeline-entries`
      })
    }
  }, [selectedTab])

  if (getAllPatients.loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <h1 className="text-center my-10 primary-text">
        COVID Timeline Generator
      </h1>

      <PatientTabs
        patients={getAllPatients.data}
        selectedId={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {selectedTab === 'Add' && (
        <PatientInfoForm
          createPatient={createPatient.fetch}
          getAllPatients={getAllPatients.fetch}
          setSelectedTab={setSelectedTab}
        />
      )}

      {!!selectedTab && selectedTab !== 'Add' && (
        <Timeline
          patient={getAllPatients.data.find(patient => patient.id === selectedTab)}
          timelineEntries={getAllTimelineEntriesByPatient.data}
          deleteTimelineEntryByPatient={deleteTimelineEntryByPatient.fetch}
          deletePatient={deletePatient.fetch}
          getAllTimelineEntriesByPatient={getAllTimelineEntriesByPatient.fetch}
          getAllPatients={getAllPatients.fetch}
          createTimelineEntryByPatient={createTimelineEntryByPatient.fetch}
          setSelectedTab={setSelectedTab}
        />
      )}
    </Layout>
  )
}

export default IndexPage;
