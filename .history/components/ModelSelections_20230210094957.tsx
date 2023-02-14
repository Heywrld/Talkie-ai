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
       // placeholder="
       isSearchable
       isLoading={isLoading}
       menuPo
      />
    </div>
  )
}

export default ModelSelections
