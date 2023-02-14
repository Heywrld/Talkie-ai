"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelections() {
    const { data: models, isLoading } = useSWR("models", fetchModels );
  return (
    <div>
      <Select 
       className=" mt-2"
       // defaultValue=(model)
       // placeholder=(model)
       isSearchable
       isLoading={isLoading}
       menuPosition='fixed'
       
      />
    </div>
  )
}

export default ModelSelections
