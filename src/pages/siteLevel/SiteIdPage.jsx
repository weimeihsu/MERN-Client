import { useParams } from "react-router-dom"
const SiteIdPage = () => {
    const { siteID } = useParams()
    return ( 
        <>
        <p>sitename - { siteID }</p>
        </>
     );
}
 
export default SiteIdPage;