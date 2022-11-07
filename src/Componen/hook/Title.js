import { useEffect } from "react"

const useTitle=title=>
{
    useEffect(()=>{
        document.title="Artworld Photography || "+title;
    },[title])
};
export default useTitle;