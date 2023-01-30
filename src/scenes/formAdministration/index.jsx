import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Formik } from "formik";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { apiNhaKich } from "../../utils/api";

const FormAdministration = () => {
  const [res, setRes] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    apiNhaKich.get("Taikhoans").then((res) => {
      console.log(res);
      setRes(res.data);
    });
  }, []);
  return (
    <Box m="20px">
      <Header title="TÀI KHOẢN" subtitle="Quản lý tài khoản hệ thống" />
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
        <Box>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tạo tài khoản</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik>
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
                        disabled
                        id="outlined-basic"
                        label="Mã tài khoản"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Tên tài khoản"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Mật khẩu"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Số điện thoại"
                        variant="outlined"
                        sx={{ gridColumn: "span 4" }}
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
              <Button variant="primary" onClick={handleClose}>
                Tạo
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
            Tạo tài khoản
          </Button>
        </Box>
        <TableAdmintration rows={res} />
      </Box>
    </Box>
  );
};

const TableAdmintration = ({ rows }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
            <TableRow>
              <TableCell>Mã tài khoản</TableCell>
              <TableCell align="right">Tên tài khoản</TableCell>
              <TableCell align="right">Số mật khẩu</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="right">Số điện thoại</TableCell>
              <TableCell align="right">Loại tài khoản</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.maTk}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.maTk}
                </TableCell>
                <TableCell align="right">{row.tenTaiKhoan}</TableCell>
                <TableCell align="right">{row.matKhau}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.sdt}</TableCell>
                <TableCell align="right">{row.loaiTaiKhoan}</TableCell>
                <TableCell align="right">
                  <DeleteOutlineOutlinedIcon
                    sx={{ mr: "5px", cursor: "pointer" }}
                  />
                  <BorderColorOutlinedIcon sx={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default FormAdministration;
