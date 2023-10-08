import React from 'react'
import './Plans.css'
function Plans() {

       const pricingData =[

        {
            title:'Regular member',
            price:'$0',
            duration:'/month',
            color:'#8dbff9',
            features: [
                'Unlimited access to the coursres',
                'customer Support',
                'personal monitor',
                'standard options',
                '5 classes per week'
            ]
        },

        {
            title:'Premium member',
            price:'$100',
            duration:'/month',
            color:'#8dbff9',
            features: [
                'Unlimited access to the coursres',
                'customer Support',
                'personal monitor',
                'standard options',
                '5 classes per week'
            ]
        },
        {
            title:'standard member',
            price:'$10',
            duration:'/month',
            color:'#8dbff9',
            features: [
                'Unlimited access to the coursres',
                'customer Support',
                'personal monitor',
                'standard options',
                '5 classes per week'
            ]
        }
       ]


  return (
    <div className='container'>
        <div className='pricing_top'>
            <h2 className='section-title'>
                Premium Pricing Plan
            </h2>
            <p>Unlock Elite Tech Services with our premium pricing plan ahead of the competition</p>

        </div>
        <div className='pricing-wrapper'>
            {pricingData.map((pricingItem, index)=>(

<div className='pricing_item' key={index}>
<div className='pricing_card-top' style={{ background:pricingItem.color}}>
  <h2 className='section_title'>{pricingItem.title}</h2>
  <h2 className='pricing_section_title'>{pricingItem.price}
  <span>{pricingItem.duration}</span>

  </h2>
</div>
<div className='services'>
    <ul>
      {pricingItem.features.map((feature,index)=>(
        <li key={index}>{feature}</li>
      ))}

    </ul>
    <button className='register-btmn'>Join</button>
</div>
</div>

            ))}

            
        </div>
    </div>
  )
}

export default Plans