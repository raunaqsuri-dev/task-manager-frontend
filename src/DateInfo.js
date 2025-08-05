import React from 'react';

function DateInfo() {
  const today = new Date().toLocaleDateString();
  return <p>Today’s Date: {today}</p>;
}

export default DateInfo;