"use client";
import useSWR from "swr";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelections() {
    const { data: models, isLoading } = useSWR("models",  )
  return (
    <div>
      
    </div>
  )
}

export default ModelSelections
