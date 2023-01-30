import "./about.css";
import { showcdule } from "../../../data";
import "../../font/themify-icons/themify-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
const about = () => {
  return (
    <div className="showducle">
      <div className="row_s">
        <div className="col-md-12">
          <h1 className="title">LỊCH DIỄN</h1>
          <div className="vk-list">
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-blk">
                  <table>
                    <thead>
                      <tr>
                        <th>Ngày</th>
                        <th>Xuất</th>
                        <th>Sân khấu kịch Hồng Vân</th>
                        <th>Sân khấu kịch Idecaf</th>
                        <th>Sân khấu kịch thế gới trẻ</th>
                      </tr>
                    </thead>
                    {showcdule.map(
                      ({
                        MaLichChieu,
                        MaKich,
                        MaNhaKich,
                        ngayBD,
                        ngayKT,
                        gio,
                        tenKich,
                        theloai,
                      }) => {
                        return (
                          <tbody key={MaLichChieu}>
                            <td rowSpan="1" className="blue">
                              <strong>{ngayBD}</strong>
                              <br />
                              <strong>{ngayKT}</strong>
                            </td>
                            <td>{gio}</td>
                            <td>
                              <>
                                {MaNhaKich === "NH001" && (
                                  <>
                                    <a href="*" className="vk-tb">
                                      {tenKich}
                                    </a>
                                    <span className="category-vk">
                                      <i className="ti-tag"></i>
                                      {theloai}
                                    </span>
                                  </>
                                )}
                              </>
                            </td>
                            <td>
                              <>
                                {MaNhaKich === "NH002" && (
                                  <>
                                    <a href="*" className="vk-tb">
                                      {tenKich}
                                    </a>
                                    <span className="category-vk">
                                      <i className="ti-tag"></i>
                                      {theloai}
                                    </span>
                                  </>
                                )}
                              </>
                            </td>
                            <td>
                              <>
                                {MaNhaKich === "NH003" && (
                                  <>
                                    <a href="*" className="vk-tb">
                                      {tenKich}
                                    </a>
                                    <span className="category-vk">
                                      <i className="ti-tag"></i>
                                      {theloai}
                                    </span>
                                  </>
                                )}
                              </>
                            </td>
                          </tbody>
                        );
                      }
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
