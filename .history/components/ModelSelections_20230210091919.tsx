"use client";
import useSWR from "swr";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json)

function ModelSelections() {
  return (
    <div>
      
    </div>
  )
}

export default ModelSelections
