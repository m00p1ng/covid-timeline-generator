import { useState } from 'react'

import Layout from '../components/Layout/Layout';
import PatientInfo from '../components/PatientInfo/PatientInfo';
import PatientTabs from '../components/PatientTabs/PatientTabs';
import Timeline from '../components/Timeline/Timeline';

import { useGetAllPatients } from '../externals/patients'

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
        <PatientInfo />
      )}

      {!!selectedTab && selectedTab !== 'Add' && (
        <Timeline />
      )}
    </Layout>
  )
}

export default IndexPage;
