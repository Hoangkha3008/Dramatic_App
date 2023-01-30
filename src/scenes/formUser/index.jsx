import { Box, Button, TextField,Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme, } from "@mui/material";
  import Header from "../../components/Header";
  import { tokens } from "../../theme";
  import Paper from "@mui/material/Paper";
  import { useEffect, useState } from "react";
  import { apiNhaKich } from "../../utils/api";

  
  const FormUser = () => {
    const [res, setRes] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    useEffect(() => {
      apiNhaKich.get("Khachhangs").then((res) => {
        
        console.log(res);
        setRes(res.data);
        
      });
    }, []);
    return (
      <Box m="20px">
        <Header title="Khách hàng" subtitle="Quản lý tài khoản khách hàng" />
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
              <TableUser rows={res} />
            </Box>
      </Box>
    );
  };
  
  const TableUser = ({ rows }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
              <TableRow>
                <TableCell>Mã khách hàng</TableCell>
                <TableCell align="right">Tên khách hàng</TableCell>
                <TableCell align="right">Tên tài khoản</TableCell>
                <TableCell align="right">Mật khẩu</TableCell>
                <TableCell align="right">Địa chỉ</TableCell>
                <TableCell align="right">Số điện thoại</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Ngày sinh</TableCell>
                <TableCell align="right">Hình đại diện</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.maKh}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.maKh}
                  </TableCell>
                  <TableCell align="right">{row.tenKh}</TableCell>
                  <TableCell align="right">{row.tenTaiKhoan}</TableCell>
                  <TableCell align="right">{row.matKhau}</TableCell>
                  <TableCell align="right">{row.diaChi}</TableCell>
                  <TableCell align="right">{row.sdt}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.ngaySinh}</TableCell>
                  <TableCell align="right">{row.avarta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
  export default FormUser;
  