import React from 'react';

// We added a new prop called 'hideTabs'
const TableauEmbed = ({ url, hideTabs }) => {
  const cleanUrl = url.split('?')[0]; 
  
  // Logic: If hideTabs is true, add '&:tabs=no'. Otherwise, let Tableau decide.
  const tabsParam = hideTabs ? '&:tabs=no' : ''; 

  const embedUrl = `${cleanUrl}?:embed=yes${tabsParam}&:toolbar=no&:display_count=no&:showVizHome=no&:origin=viz_share_link`;

  return (
    <iframe 
      src={embedUrl}
      width="100%"
      height="850" 
      style={{ border: 'none', display: 'block' }}
      title="Tableau Visualization"
      allowFullScreen
    />
  );
};

export default TableauEmbed;