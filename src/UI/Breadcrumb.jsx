import React from 'react'

const Breadcrumb = ({ data, onBreadcrumbClick }) => {
  return (
    <nav className="flex my-2 text-sm" aria-label="Breadcrumb" style={{ flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <div key={index} className="items-center">
          {index !== 0 && (
            <span
              className='mx-2'
              style={{ color: '#7B8191' }}
            >
              &#47;
            </span>
          )}
          {data.length - 1 !== index ? (
            <button
              type="button"
              onClick={() => onBreadcrumbClick(index)}
              style={{ color: '#7B8191' }}
              className="text-xs font-normal">
              {item.label}
            </button>
          ) : (
            <span className="text-xs font-normal" style={{ color: '#EEEEEE' }}>{item.label}</span>
          )}
        </div>
      ))
      }
    </nav >
  );
};

export default Breadcrumb;
