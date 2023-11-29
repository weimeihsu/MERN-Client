import { useParams } from "react-router-dom"

const DnsRecords = () => {
    const { domainID } = useParams()
    return ( 
        <>
        <h1>DNS records</h1>
        <p>{ domainID }</p>
        </>  
     );
}
 
export default DnsRecords;