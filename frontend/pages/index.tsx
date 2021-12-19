import { useState } from 'react'

import Layout from '../components/Layout/Layout';
import PatientTabs from '../components/PatientTabs/PatientTabs';

import { useGetAllPatient } from '../externals/patients'

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
  const getAllPatients = useGetAllPatient();

  if (getAllPatients.loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <PatientTabs
        patients={getAllPatients.data}
        selectedId={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Layout>
  )
}

export default IndexPage;
