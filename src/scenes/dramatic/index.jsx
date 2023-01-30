import Button from "@mui/material/Button";
import { Modal, Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";import { tokens } from "../../theme";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "bootstrap/dist/css/bootstrap.min.css";

import { apiNhaKich } from "../../utils/api";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";

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

const Dramatic = () =>{
    const [res, setRes] = useState([]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
          <Header title="Quản lý kịch" subtitle="Danh sách thông tin của kịch" />
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
            <TableDramatic rows={res} />
          </Box>
        </Box>
      );
}
const TableDramatic = ({ rows }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{backgroundColor: colors.blueAccent[700]}}>
            <TableRow>
              <TableCell>Mã kịch</TableCell>
              <TableCell align="right">Tên kịch</TableCell>
              <TableCell align="right">Mô tả</TableCell>
              <TableCell align="right">Diễn viên</TableCell>
              <TableCell align="right">Đạo diễn</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="right">Ảnh</TableCell>
              <TableCell align="right">Ngày bắt đầu</TableCell>
              <TableCell align="right">Ngày kết thúc</TableCell>
              <TableCell align="right">Thể loại</TableCell>
              <TableCell align="right">Trạng thái</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.MaKich}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MaKich}
                </TableCell>
                <TableCell align="right">{row.TenKich}</TableCell>
                <TableCell align="right">{row.Mota}</TableCell>
                <TableCell align="right">{row.DienVien}</TableCell>
                <TableCell align="right">{row.DaoDien}</TableCell>
                <TableCell align="right">{row.Gia}</TableCell>
                <TableCell align="right">{row.Anh}</TableCell>
                <TableCell align="right">{row.NgayBD}</TableCell>
                <TableCell align="right">{row.NgayKT}</TableCell>
                <TableCell align="right">{row.TheLoai}</TableCell>
                <TableCell align="right">{row.TrangThai}</TableCell>
                <TableCell align="right">
                  <DeleteOutlineOutlinedIcon sx={{ mr: "5px" }} />
                  <BorderColorOutlinedIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Dramatic;