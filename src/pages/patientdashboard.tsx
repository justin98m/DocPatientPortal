import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Add from "components/Add";
import Grid from "components/Grid";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function patientdashboard() {
  return (
    <>
      <Navbar />
      <Add />
      <Grid />
      <Footer />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();