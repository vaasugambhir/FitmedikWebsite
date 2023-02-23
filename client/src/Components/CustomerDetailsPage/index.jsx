import { Button, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import ManagerSection from "./ManagerSection";
import OperationalSection from "./OperationalSection";
import { useNavigate, useParams } from "react-router-dom";
import { GetAdminToken } from "../../Cookies/admin";
import TreatmentPartnersDetails from "./TreatmentPartners";
import { GetCustomerByIdApi } from "../../Apis/Admin/Customers";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const HOSP_SECTION = 0;
const MGER_SECTION = 1;
const TRPT_SECTION = 2;
const OPDT_SECTION = 3;

const CustomerDetailsPage = () => {
  const [mode, setMode] = React.useState(HOSP_SECTION);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const GetCustomerData = () => {
    GetCustomerByIdApi(id, GetAdminToken(), {
      setLoading,
      setError,
      setErrorText,
      setHospitalDetails,
      setManagerDetails,
      setOpdtDetails,
      setPartners,
    });
  };

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
    else GetCustomerData();
  }, []);

  const [hospDetails, setHospitalDetails] = React.useState({
    name: "",
    employee_size: "",
    typeofHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
    documents: "",
  });

  const [managerDetails, setManagerDetails] = React.useState([
    {
      name: "",
      title: "",
      email: "",
    },
  ]);

  const [opdtDetails, setOpdtDetails] = React.useState({
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: 0,
    avgOpd: "",
    avgIpd: "",
  });

  const [partners, setPartners] = React.useState([]);

  const next = () => {
    if (mode !== OPDT_SECTION) {
      setMode(mode + 1);
    }
  };

  const prev = () => {
    if (mode !== HOSP_SECTION) {
      setMode(mode - 1);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingPage loadingText="Loading..." />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetCustomerData} />
      ) : (
        <div>
          {mode === HOSP_SECTION && (
            <HospitalSection hospDetails={hospDetails} />
          )}
          {mode === MGER_SECTION && (
            <ManagerSection managerDetails={managerDetails} />
          )}
          {mode === TRPT_SECTION && (
            <TreatmentPartnersDetails partners={partners} />
          )}
          {mode === OPDT_SECTION && (
            <OperationalSection opdtDetails={opdtDetails} />
          )}

          <Box
            sx={{
              position: "fixed",
              bottom: 50,
              right: 50,
            }}
          >
            <Button
              onClick={prev}
              color="error"
              startIcon={<ArrowBack />}
              variant="contained"
              sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
              disabled={mode === HOSP_SECTION}
            >
              Previous
            </Button>

            {mode !== OPDT_SECTION && (
              <Button
                onClick={next}
                color="success"
                endIcon={<ArrowForward />}
                variant="contained"
                sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
              >
                {"Next"}
              </Button>
            )}
          </Box>
        </div>
      )}
    </div>
  );
};

export default CustomerDetailsPage;
