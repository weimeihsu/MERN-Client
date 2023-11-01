import Container from '@mui/material/Container'
const HomePage = () => {
    console.log(import.meta.env.VITE_REACT_APP_SERVER_URL)
    return (
        <Container>
             <h1>homepage</h1>
             
        </Container>
     );
}
 
export default HomePage;