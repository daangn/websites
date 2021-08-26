import { useState,useEffect, useMemo } from 'react'

type Store = {
  id: string;
  [property:string]:any
}
export const useFlexSearch = (query?:string, index?:string)=>{
  const [searchResult,setSearchResult] = useState<string[]>()
  const flexIndex = useMemo(()=>index && JSON.parse(index)[0] || {}, [index])
  useEffect(()=>{
    if(query && flexIndex){
      let results:string[] = []
      flexIndex.forEach((entities: { [key: string]: string[] }) => {
        results.push(...entities[query]||[])
      })

      results = Array.from(new Set(results))
      setSearchResult(results)
    }else{
      setSearchResult(undefined)
    }
  },[query,index])

  return searchResult
}
