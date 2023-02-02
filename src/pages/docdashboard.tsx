import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Add from "components/Add";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function docdashboard() {
  return (
    <>
      <Navbar />
      <Add />
      <Footer />
    </>
  );
}
export const getServerSideProps = withPageAuthRequired();