import React from 'react';

const styles = {
  border: '3px dashed',
  width: 'calc(100% - 48px - 6px - 24px)',
  margin: '0 12px',
  padding: '24px',
  fontSize: '24px',
};

const DropZone = ({ elementDropped, elementIsDraggedOver }) => (
  <div style={styles} className="drop-zone" onDrop={() => elementDropped({ dropZone: true })}
    onDragOver={(e) => e.preventDefault() && elementIsDraggedOver({ dropZone: true })}>
    Drop here to create a new row for the element
  </div>
);

export default DropZone;
