import './style.scss';

function LoadingPage() {
  return (
    <section className="emptyScreen" style={{ justifyContent: 'center' }}>
      <div className="loading">
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <span>Loading...</span>
      </div>
    </section>
  );
}

export default LoadingPage;
