import { useParams } from "react-router-dom"

const DnsRecords = () => {
    const { siteID } = useParams()
    return ( 
        <>
        <h1>DNS records</h1>
        <p>sitename - { siteID }</p>
        </>  
     );
}
 
export default DnsRecords;