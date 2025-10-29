'use client';
import React from 'react';
import LeadCaptureSection from './LeadCaptureSection';
import Person2Rounded from '@mui/icons-material/Person2Rounded';
import EmailRounded from '@mui/icons-material/EmailRounded';

export default function InvestorPitchDeckSection() {
  const fields = [
    { name:'name',  label:'Name*',  placeholder:'John Carter', required:true, type:'text', colMd:6, icon:<Person2Rounded fontSize="small" /> },
    { name:'email', label:'Email',   placeholder:'Email address', required:true, email:true, type:'text', colMd:6, icon:<EmailRounded fontSize="small" /> },
    { name:'category', label:'Investor Category*', required:true, type:'select', colMd:12,
      options:[
        { value:'', label:'Select category', disabled:true },
        { value:'angel',  label:'Angel Investor' },
        { value:'vc',     label:'Venture Capital' },
        { value:'family', label:'Family Office' },
      ],
    },
  ];

  return (
    <LeadCaptureSection
      title="Get Our Investor Pitch Deck"
      subtitle="Learn more about our business model, traction, and growth roadmap."
      fields={fields}
      pageBg="#FFFFFF" 
      submitLabel="Download Pitch Deck"
      onSubmit={async (v) => console.log('Pitch Deck lead:', v)}
    />
  );
}
