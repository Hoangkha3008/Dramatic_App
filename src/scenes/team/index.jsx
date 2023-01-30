import Button from "@mui/material/Button";
import axios from "axios";
import { Modal, Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import "bootstrap/dist/css/bootstrap.min.css";

import { apiNhaKich } from "../../utils/api";
import { useEffect, useState,useRef } from "react";
import Paper from "@mui/material/Paper";
import "./team.css";
import { PrecisionManufacturingRounded } from "@mui/icons-material";
const Team = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [res, setRes] = useState([]);
  const [maNhaKich, setMaNhaKich] = useState("");
  const [tenNhaKich, setTenNhaKich] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  // apiNhaKich
  //   .get("Nhakichs")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    apiNhaKich.get("Nhakichs").then((res) => {
      setRes(res.data);
    });
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7036/api/Nhakichs", {
        maNhaKich,
        tenNhaKich,
        soDienThoai,
        diaChi,
      })
      .then((res) => alert("thêm thành công", res))
      .catch((err) => console.log(err));
  };

  return (
    <Box m="20px">
      <Header title="Quản lí nhà kịch" subtitle="Danh sách nhà kịch" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-fotterContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <Box >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thêm nhà kịch</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik onSubmit={handleFormSubmit}>
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    >
                      <TextField
                        fullWidth
                        label="Mã nhà kịch"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                        value={maNhaKich}
                        onChange={(e) => setMaNhaKich(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Tên nhà kịch"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                        value={tenNhaKich}
                        onChange={(e) => setTenNhaKich(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Số điện thoại"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                        value={soDienThoai}
                        onChange={(e) => setSoDienThoai(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Địa chỉ"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                        value={diaChi}
                        onChange={(e) => setDiaChi(e.target.value)}
                      />
                    </Box>
                  </form>
                )}
              </Formik>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={postData}>
                Thêm
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              float: "right",
              marginBottom: "8px",
            }}
            variant="primary"
            onClick={handleShow}
          >
            <AddOutlinedIcon sx={{ mr: "10px" }} />
            Thêm nhà kịch
          </Button>
        </Box>
        <TableNhacKich rows={res} />
      </Box>
    </Box>
  );
};

const TableNhacKich = ({ rows }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [res, setRes] = useState([]);
  const [maNhaKich, setMaNhaKich] = useState("");
  const [tenNhaKich, setTenNhaKich] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const removeKich = (id) => {
    axios
      .delete(`https://localhost:7036/api/Nhakichs/${id}`)
      .then((res) => {
        alert("Xóa thành công", res);
      })
      .catch((err) => console.log(err));
  };

  const updateNhaKich = (id) => {
    axios
      .put(`https://localhost:7036/api/Nhakichs/${id}`, {
        maNhaKich:maNhaKich,
        tenNhaKich: tenNhaKich,
        soDienThoai: soDienThoai,
        diaChi:diaChi,
      })
      .then((res) => {
        alert("sửa Thành Công", res);
      })
      .catch((err) => console.log(err));
  };


  // const put_maNhaKich = useRef(null);
  // const put_tenNhaKich = useRef(null);
  // const put_soDienThoai= useRef(null);
  // const put_diaChi = useRef(null);

  // const [putResult, setPutResult] = useState(null);

  // const fortmatResponse = (res) => {
  //   return JSON.stringify(res, null, 2);
  // };

  // async function updateNhaKich() {
  //   const id =put_maNhaKich.current.value;

  //   if (id) {
  //     const putData = {
  //       title:  put_tenNhaKich.current.value,
  //       description: put_soDienThoai.current.value,
  //       published: put_diaChi.current.checked,
  //     };

  //     try {
  //       const res = await axios.put(`https://localhost:7036/api/Nhakichs/${id}`, putData, {
  //         headers: {
  //           "x-access-token": "token-value",
  //         },
  //       });

  //       const result = {
  //         status: res.status + "-" + res.statusText,
  //         headers: res.headers,
  //         data: res.data,
  //       };

  //       setPutResult(fortmatResponse(result));
  //       alert("Sửa thành Công",result)
  //     } catch (err) {
  //       setPutResult(fortmatResponse(err.response?.data || err));
  //     }
  //   }
  // }

  // const clearPutOutput = () => {
  //   setPutResult(null);
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell>Mã nhà kịch</TableCell>
              <TableCell align="right">Tên Nhà kịch</TableCell>
              <TableCell align="right">Số điện thoại</TableCell>
              <TableCell align="right">Địa chỉ</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.maNhaKich}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.maNhaKich}
                </TableCell>
                <TableCell align="right">{row.tenNhaKich}</TableCell>
                <TableCell align="right">{row.soDienThoai}</TableCell>
                <TableCell align="right">{row.diaChi}</TableCell>
                <TableCell align="right">
                <Button
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "5px",
                        fontWeight: "bold",
                        padding: "10px 5px",
                        float: "right",
                        marginBottom: "8px",
                      }}
                      variant="primary"
                      onClick={()=> removeKich(row.maNhaKich)}
                    >
                      <DeleteOutlineOutlinedIcon sx={{ mr: "5px" }} />
                    </Button>
                  <Box>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Update nhà kịch</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik onSubmit={handleFormSubmit}>
                          {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                              >
                                <TextField
                                  fullWidth
                                  label="Mã nhà kịch"
                                  variant="outlined"
                                  sx={{ gridColumn: "span 4" }}
                                  value={row.maNhaKich}
                                  disabled
                                  // onChange={(e) => setMaNhaKich(e.target.value)}
                                />
                                <TextField
                                  fullWidth
                                  label="Tên nhà kịch"
                                  variant="outlined"
                                  sx={{ gridColumn: "span 4" }}
                                  onChange={(e) => setTenNhaKich(e.target.value)}
                                />
                                <TextField
                                  fullWidth
                                  label="Số điện thoại"
                                  variant="outlined"
                                  sx={{ gridColumn: "span 4" }}
                                  value={row.soDienThoai}
                                  onChange={(e) => setSoDienThoai(e.target.value)}
                                />
                                <TextField
                                  fullWidth
                                  id="outlined-basic"
                                  label="Địa chỉ"
                                  variant="outlined"
                                  sx={{ gridColumn: "span 4" }}
                                  value={row.diaChi}
                                  onChange={(e) => setDiaChi(e.target.value)}
                                />
                              </Box>
                            </form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        {/* <Button variant="secondary" onClick={clearPutOutput}>
                          Clear
                        </Button> */}
                        <Button variant="primary" onClick={() =>updateNhaKich(row.maNhaKich)}>
                        Update
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "10px",
                        fontWeight: "bold",
                        padding: "10px 5px",
                        float: "right",
                        marginBottom: "8px",
                        marginRight:"3px"
                      }}
                      variant="primary"
                      onClick={handleShow}
                    >
                      <UpdateOutlinedIcon sx={{ mr: "5px" }} />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Team;
