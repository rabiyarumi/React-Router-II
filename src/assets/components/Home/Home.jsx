import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="container mx-auto  my-10 text-center">
      <Header></Header>
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center ">
            <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
