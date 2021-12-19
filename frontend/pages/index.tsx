import { useState, useEffect } from 'react'

import Layout from '../components/Layout/Layout';
import PatientInfoForm from '../components/PatientInfoForm/PatientInfoForm';
import PatientTabs from '../components/PatientTabs/PatientTabs';
import Timeline from '../components/Timeline/Timeline';

import {
  useGetAllPatients,
  useGetAllTimelineEntriesByPatient,
  useCreatePatient,
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
  const getAllTimelineEntriesByPatient = useGetAllTimelineEntriesByPatient();
  const createPatient = useCreatePatient();
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
          getAllTimelineEntriesByPatient={getAllTimelineEntriesByPatient.fetch}
        />
      )}
    </Layout>
  )
}

export default IndexPage;
