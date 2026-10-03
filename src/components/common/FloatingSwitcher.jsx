const FloatingSwitcher = ({ viewMode, onViewModeChange }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        background: 'rgba(37, 37, 37, 0.95)',
        padding: '10px 18px',
        borderRadius: '25px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: '#fff',
        fontSize: '13px',
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <span style={{ fontWeight: 600 }}>View Mode:</span>
      <button
        onClick={() => onViewModeChange('all')}
        style={{
          background: viewMode === 'all' ? '#284990' : '#444',
          color: '#fff',
          padding: '5px 12px',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: viewMode === 'all' ? 'bold' : 'normal',
          border: 'none',
        }}
      >
        All Sections (Index)
      </button>
      <button
        onClick={() => onViewModeChange('single')}
        style={{
          background: viewMode === 'single' ? '#284990' : '#444',
          color: '#fff',
          padding: '5px 12px',
          borderRadius: '15px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: viewMode === 'single' ? 'bold' : 'normal',
          border: 'none',
        }}
      >
        Single Page (Multi-page)
      </button>
    </div>
  );
};

export default FloatingSwitcher;
