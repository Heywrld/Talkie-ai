"use client";
import useSWR from "swr";
import 

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelections() {
    const { data: models, isLoading } = useSWR("models", fetchModels );
  return (
    <div>
      <Select />
    </div>
  )
}

export default ModelSelections
