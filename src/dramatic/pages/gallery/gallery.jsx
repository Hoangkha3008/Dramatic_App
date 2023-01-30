import './gallery.css'
import '../../font/themify-icons/themify-icons.css'
import kich1 from "../../images/thuongthithuongthethoi.jpg"

const gallery = () => {
  return (
    <div className="content-page content1">
      <div className="drama">
        <div className="row_s">
          <div className="col-md-12">
            <h1 className="title">
                NHỮNG VỞ KỊCH  
                <span className="red"> MỚI NHẤT</span>
            </h1>
            <div className="vk-list">
              <div className="row">  
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="item vk-blk">
                    <div className="img-vk-blk">
                      <div className="overlay-vk" style={{display:"block"}}>
                        <a href="*" className='view-more-btn'>XEM CHI TIẾT</a>
                        <a href="*" className='online-book-btn'>MUA VÉ ONLINE</a>
                      </div>
                      <div className="img-vk">
                      <img src={kich1} alt="" />
                      </div>
                    </div>
                    <a href="*" className="title-vk">Thương thì thương thế thôi</a>
                    <span className="vk-info">
                        <i className="ti-tag">
                        </i>
                        Sân khấu kịch DH Kinh tế
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default gallery