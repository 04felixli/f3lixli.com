import React from 'react'

const ResumePDF = () => {
    return (
        <div className="text-color flex items-center justify-center w-full relative z-50 h-screen">
            <embed
                src="/Resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default ResumePDF