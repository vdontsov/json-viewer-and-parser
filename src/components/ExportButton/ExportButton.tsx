import { useState } from 'react';
import { DataItem } from '../../types';

interface ExportButtonProps {
  items: DataItem[];
}

export function ExportButton({ items }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    const json = JSON.stringify(items, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modified-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={!items.length || isExporting}
    >
      {isExporting ? 'Exporting...' : 'Export JSON'}
    </button>
  );
}
