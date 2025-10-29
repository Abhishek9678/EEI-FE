'use client';
import React from 'react';
import LeadCaptureSection from './LeadCaptureSection';
import Person2Rounded from '@mui/icons-material/Person2Rounded';
import BusinessRounded from '@mui/icons-material/BusinessRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import SmartphoneRounded from '@mui/icons-material/SmartphoneRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import LocationCityRounded from '@mui/icons-material/LocationCityRounded';

export default function BuildTheFutureSection() {
  const fields = [
    { name:'fullName', label:'Full Name', placeholder:'John Carter', required:true, type:'text', colMd:6, icon:<Person2Rounded fontSize="small" /> },
    { name:'company',  label:'Company',   placeholder:'Your company name', type:'text', colMd:6, icon:<BusinessRounded fontSize="small" /> },
    { name:'email',    label:'Email',     placeholder:'Email address', required:true, email:true, type:'text', colMd:6, icon:<EmailRounded fontSize="small" /> },
    { name:'phone',    label:'Phone number', placeholder:'+91 9876543210', required:true, phone:true, type:'text', colMd:6, icon:<SmartphoneRounded fontSize="small" /> },
    { name:'interest', label:'Investment Interest', required:true, type:'select', colMd:12,
      options:[
        { value:'', label:'Select interest', disabled:true },
        { value:'Equity Investment', label:'Equity Investment' },
        { value:'Debt Financing', label:'Debt Financing' },
        { value:'Strategic Partnership', label:'Strategic Partnership' },
      ],
    },
    { name:'city',     label:'City',     placeholder:'Mumbai', type:'text', colMd:6, icon:<LocationCityRounded fontSize="small" /> },
    { name:'country',  label:'Country',  placeholder:'India',  type:'text', colMd:6, icon:<PublicRounded fontSize="small" /> },
    { name:'message',  label:'Message / Proposal', placeholder:'Tell us about your investment interest…', type:'textarea', colMd:12, max:1000, rows:5 },
  ];

  return (
    <LeadCaptureSection
      title={`Let’s Build the Future of\nGreen Logistics, Together`}
      subtitle="Share your details and our Investment Relations Team will connect with you soon."
      fields={fields}
      submitLabel="Submit Investment Enquiry"
      onSubmit={async (v) => console.log('Future Enquiry:', v)}
    />
  );
}
