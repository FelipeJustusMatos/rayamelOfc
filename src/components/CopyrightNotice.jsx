import React from 'react';

function CopyrightNotice() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center' }}>
      <p>&copy; {currentYear} rayameltravel. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default CopyrightNotice;
