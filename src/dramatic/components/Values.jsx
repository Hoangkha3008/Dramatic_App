import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data";
import Card from "../UI/Card";
import dramatic1 from "../images/sankhaukichhongvan.jfif";
import dramatic2 from "../images/sankhaukichIdecaf.jfif";
import dramatic3 from "../images/thoigioitre.jfif";
const Values = () => {
  return (
    <section className="facilities">
      <h1>GIỚI THIỆU</h1>
      <p>Các nhà kịch</p>
      <div className="row_r">
        <div className="facilities-col">
          <div className="facilities_img">
            <img src={dramatic1} alt="" />
          </div>
          <div className="facilities_titel">
            <h3>Sân khấu kịch Hồng Vân</h3>
            <p>
              Thời gian vội vã trôi qua, mới đó mà đã gần 10 năm. ..Còn nhớ,
              đường Nguyễn Văn Trỗi còn hẹp và không sầm uất như bây giờ, sân
              khấu kịch Phú Nhuận ra đời trong sự âu lo, lo vì sợ khán giả yêu
              kịch chưa quen xem ở một điểm mới, mặc dù khoảng cách đi vào trung
              tâm Sài Gòn không xa là mấy, lo chưa có kinh nghiệm, lo nghệ sĩ
              quy tụ về sân khấu chưa đông, lo chưa có vở diễn hấp dẫn ...
            </p>
          </div>
          <div className="facilities_details">
            <button className="facilities_btn">Xem thêm</button>
          </div>
        </div>
        <div className="facilities-col">
          <div className="facilities_img">
            <img src={dramatic2} alt="" />
          </div>
          <div className="facilities_titel">
            <h3>Sân khấu kịch Idecaf</h3>
            <p>
              Sân khấu Kịch IDECAF thành lập năm 1997, là sân khấu xã hội hóa
              thứ hai sau 5B; đến giờ vẫn là sân khấu vững mạnh nhất Sài Gòn...
            </p>
          </div>
          <div className="facilities_details">
            <button className="facilities_btn">Xem thêm</button>
          </div>
        </div>
        <div className="facilities-col">
          <div className="facilities_img">
            <img src={dramatic3} alt="" />
          </div>
          <div className="facilities_titel">
            <h3>Sân khấu kịch thới giới trẻ</h3>
            <p>
              Sân khấu Thế giới trẻ là sân khấu thuộc Trường Đại học Sân khấu
              Điện ảnh TP.HCM...
            </p>
          </div>
          <div className="facilities_details">
            <button className="facilities_btn">Xem thêm</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
