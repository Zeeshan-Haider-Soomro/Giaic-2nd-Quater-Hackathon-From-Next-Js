import { Card } from 'antd'
import React from 'react'


const { Meta } = Card;
const OurProducts: React.FC = () => {
    
  return (
    <div>
    <div className='flex flex-wrap justify-center gap-8 p-5 m-5'>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/image 1 (1).png" />}
  >
    <Meta title="Syltherine" description="Stylish cafe chair" />
    <p className='text-[20px] py-2'>Rs : 2,500.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/Images (2).png" />}
  >
    <Meta title="Leviosa" description="Stylish cafe chair" />
    <p className='text-[20px] py-2'>Rs : 2,500.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/image 3.png" />}
  >
    <Meta title="Lolito" description="Luxury big sofa" />
    <p className='text-[20px] py-2'>Rs : 7,000.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/image 4.png" />}
  >
    <Meta title="Respira" description="Outdoor bar table and stool" />
    <p className='text-[20px] py-2'>Rs : 500.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/Images (3).png" />}
  >
    <Meta title="Grifo" description="Night lamp" />
    <p className='text-[20px] py-2'>Rs : 1,500.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/Images (5).png" />}
  >
    <Meta title="Muggo" description="Small mug" />
    <p className='text-[20px] py-2'>Rs : 150.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/image 7.png" />}
  >
    <Meta title="Pingky" description="Cute bed set" />
    <p className='text-[20px] py-2'>Rs : 7,000.00</p>
  </Card>
    <Card
    className=''
    hoverable
    style={{ width: 240, height: 400 }}
    cover={<img alt="example" src="/images/image 8 (1).png" />}
  >
    <Meta title="Potty" description="Minimalist flower pot" />
    <p className='text-[20px] py-2'>Rs : 500.00</p>
  </Card>

    </div>
    </div>
  )
}

export default OurProducts