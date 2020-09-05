import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <div className='card hovercard'>
        <div className='card-background'></div>
        <div className='useravatar'>
          <img alt='cybersoft.edu.vn' src='images/cybersoft.png' />
        </div>
        <div className='card-info'>
          <span className='card-title'>
            CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ trực
            tuyến - Virtual Dressing Room
          </span>
        </div>
      </div>
      <hr className='style13' />
    </div>
  );
};

export default HeaderComponent;
