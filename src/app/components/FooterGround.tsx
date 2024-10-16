import React from 'react'

export default function FooterGround() {
  return (
    <div className='mt-12'>
        <div className="flex justify-between text-black">
            <div className='ml-14'>
                <div className="text-center">
                    <p className="mb-2">About Tripkolic</p>
                    <p className="mb-2 text-xs " style={{ color: '#6D6D6D' }}>About us</p>
                    <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Newsroom</p>
                    <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>tripkolic Blog</p>
                    <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Careers</p>
                </div>
            </div>
            <div className="text-center">
                <p className="mb-2">Partnership</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Merchant sign up</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Merchant log in</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Affiliate Partnership</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Agent Marketplace</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Tripkolic Partner Hub</p>
                <p className="mb-2 text-xs"  style={{ color: '#6D6D6D' }}>Distribution & Marketing Enquiries</p>

            </div>
            <div className='mr-8'>
                <div className="text-center">
                    <p className="mb-2">Term of use</p>
                    <p className="mb-2 text-sm" style={{ color: '#6D6D6D' }}>General terms of use</p>
                    <p className="mb-2 text-sm" style={{ color: '#6D6D6D' }}>Privacy Policy</p>
                    <p className="mb-2 text-sm" style={{ color: '#6D6D6D' }}>Cookie Policy</p>
                    <p className="mb-2 text-sm" style={{ color: '#6D6D6D' }}>Bug Bpunty Policy</p>
                    <p className="mb-2 text-sm" style={{ color: '#6D6D6D' }}>Animal Welfare Policy</p>

                </div>
            </div>
        </div>
        <div>
            <footer className="bg-white-800 text-black mt-4">
                <div className="border-t border-gray-300 py-4">         
                <div className=" p-4">
                    <p className="text-xs text-gray-600 ml-10">
                        © 2024 <span className="font-bold" style={{ color: '#6D6D6D' }}>Tripkolic</span>. All rights reserved.
                    </p>
                </div>
                </div>
            </footer>
        </div>
    </div>

  )
}
